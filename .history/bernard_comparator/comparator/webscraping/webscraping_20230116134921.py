import undetected_chromedriver as uc
import yaml
import random
import time
from functools import wraps
import os
import pandas as pd
import requests
from bs4 import BeautifulSoup as bs
from selenium.webdriver.common.by import By
from selenium import webdriver
import warnings
from pathlib import Path
warnings.filterwarnings("ignore")


################################################### Decorator #####################################################


def timer_func(func):
    # This function shows the execution time of
    # the function object passed
    @wraps(func)
    def wrap_func(*args, **kwargs):
        t1 = time.time()
        result = func(*args, **kwargs)
        t2 = time.time()
        print(f'Function {func.__name__!r} executed in {(t2-t1):.4f}s')
        return result
    return wrap_func

################################################### Escape detection from the website scraped #####################################################


def browser_headers(path: str = "./bernard_comparator/comparator/webscraping/headers.yml", ) -> dict[str:dict]:
    """
    Returns browser headers from a yaml file.

    Args:
        path (str): Path to yaml file containing the headers. Defaults to "./headers.yml".

    Returns:
        dict[str:dict]: Dictionary containing the headers.
    """
    with open(path) as file_headers:
        headers = yaml.safe_load(file_headers)
    return headers


def user_agents(path: str = "./bernard_comparator/comparator/webscraping/user_agents.yml", ) -> dict[str:dict]:
    """
    Returns user agents from a yaml file.

    Args:
        path (str): Path to yaml file containing the user agents. Defaults to "./bernard_comparator/comparator/webscraping/user_agents.yml".

    Returns:
        dict[str:dict]: Dictionary containing the user agents.
    """
    with open(path) as file_user_agents:
        user_agents = yaml.safe_load(file_user_agents)
    return user_agents


def extract_proxy_and_test_it(url_website_test: str = "https://httpbin.org/ip", url_website_proxy_scraped: str = "https://free-proxy-list.net/", web_browser='Chrome') -> set:
    """
    Extract proxy from url_website_proxy_scraped and test them to see if they work with url_website_test.
    Return a set of working proxies.

    Args:
        url_website_test (str): url of website to test the proxy on.
        url_website_proxy_scraped (str): url of website to scrap the proxy from.
        web_browser (str): web browser to use as a user agent.

    Returns:
        set: a set of working proxies.
    """
    # Fetch the url in response.
    response = requests.get(url_website_proxy_scraped)

    # Create a DataFrame of every proxy on the website.
    proxy_list = pd.read_html(response.text)[0]
    # print(proxy_list.head())

    # Create a new coloumns url.
    proxy_list["url"] = "http://" + proxy_list["IP Address"] + \
        ":" + proxy_list["Port"].astype(str)

    # print(proxy_list.head())

    # Filter the proxies list by Https.
    https_proxies = proxy_list[proxy_list["Https"] == "yes"]

    good_proxies = set()
    # Call hearders from headers.yml
    headers = browser_headers()[web_browser]
    # Fetch the test website with every proxy and return only whose don't made exception.
    for proxy_url in https_proxies["url"]:
        proxies = {
            "http": proxy_url,
            "https": proxy_url,
        }

        try:
            response = requests.get(url_website_test,
                                    headers=headers,
                                    proxies=proxies,
                                    timeout=2)
            good_proxies.add(proxy_url)
            print(f"Proxy {proxy_url} OK, added to good_proxy list.")
        except Exception:
            pass
        if len(good_proxies) > 2:
            break
    return good_proxies


def detection_escape(url_website: str):
    """
    Fetch the website using various browser headers and proxies, and return the response only if the request is successful (status code is 200).

    Agrs:
        url_website (str): The URL of the test website to fetch.

    Returns:
        requests.Response: The response of the successful request.
    """
    good_proxies = extract_proxy_and_test_it()
    for browser, headers in browser_headers().items():
        print(f"\n\nUsing {browser} headers\n")

        for proxy_url in good_proxies:
            proxies = {
                "http": proxy_url,
                "https": proxy_url,
            }
            try:
                response = requests.get(
                    url_website,
                    headers=headers,
                    proxies=proxies)
                print(response.status_code)
                # print(response.content)
                time.sleep(random.randrange(0, 1))
                if response.status_code == 200:
                    # print(response.json())
                    print('ok')
                    return response
            except Exception as e:
                print(f"Proxy {proxy_url} failed, trying another one")
                print(e)
    return None


def detection_escape_with_selenium(url_website: str, headers: dict[str, str] = None, accept_button_id='didomi-notice-agree-button'):
    """
    Scrape a website using the Selenium webdriver and a list of proxies.

    Parameters:
        - url_website (str): The URL of the website to scrape.
        - headers (Dict[str, str]): A dictionary of headers to use when making the request. If not specified, the default headers of the webdriver will be used.

    Returns:
        The page source of the website as a bytes object, or None if the website could not be loaded.
    """
    good_proxies = extract_proxy_and_test_it()
    for proxy_url in good_proxies:
        proxy = proxy_url.replace("http://", "")
        chrome_capabilities = webdriver.DesiredCapabilities.CHROME
        chrome_capabilities['proxy'] = {
            "proxyType": "MANUAL",
            "httpProxy": proxy,
            "sslProxy": proxy
        }
        chrome_options = webdriver.ChromeOptions()
        if headers:
            chrome_options.add_experimental_option(
                "excludeSwitches", ["ignore-certificate-errors"])
            chrome_options.add_experimental_option(
                'useAutomationExtension', False)
            chrome_options.add_argument(f"--proxy-server={proxy_url}")
            for key, value in headers.items():
                chrome_options.add_argument(f"--{key}={value}")
        try:
            driver = uc.Chrome(
                chrome_options=chrome_options, desired_capabilities=chrome_capabilities)
        except Exception:
            driver = uc.Chrome(ChromeDriverManager().install(
            ), desired_capabilities=chrome_capabilities, chrome_options=chrome_options)
        try:
            driver.get(url_website)
            webelement = driver.find_element(
                By.ID, accept_button_id)
            if webelement.is_displayed() and webelement.is_enabled():
                driver.execute_script("arguments[0].click();", webelement)
            else:
                print("L'élément accepté n'est pas interactif")
            time.sleep(2)
            page = driver.page_source.encode('utf-8')
            return page
        except Exception as e:
            print(e)
    return None

################################################### Webscraping from Jules and Celio websites #####################################################


def build_url(start_url, list_of_element_in_url):
    return [f"{start_url}{word}" for word in list_of_element_in_url
            ]


def parse_html_source(start_url: str = 'https://www.jules.com/fr-fr/l/',
                      list_of_element_in_url: list = [
                          'slim-tom', 'straight-ben', 'skinny-max', 'relax-sami', 'loose-liam', 'regular-alex'],
                      list_of_style: list = [
                          'slim', 'straight', 'skinny', 'relax', 'loose', 'regular'],
                      website: str = 'jules',
                      button_id='didomi-notice-agree-button'):
    """
    Extract the source code of webpages from differents categories of jeans on a websites.
    The source code of the pages is saved in .html files in the directory 'bernard_comparator/comparator/webscraping/data'.
    The name of the saved files are in the format "page_[website]_[style].html"

    Args:
        start_url (str, optional): The base url to construct the urls. Defaults to 'https://www.jules.com/fr-fr/l/'.
        list_of_element_in_url (list, optional): A list of word pairs used to construct the URLs.
    """

    list_url = build_url(start_url, list_of_element_in_url)
    # print(list_url)
    # Iterates over the list of url of the page to parse.
    for page_number, url in enumerate(list_url):
        response = detection_escape_with_selenium(
            url_website=url,
            accept_button_id=button_id
        )
        # Create the directory if it does not exist.
        directory = 'bernard_comparator/comparator/webscraping/data'
        os.makedirs(directory, exist_ok=True)
        # Build the full path to the file.
        category = list_of_style[page_number]
        file_path = Path(f"{directory}/page_{website}_{category}.html")
        # Delete file if it exists
        if file_path.exists():
            file_path.unlink()
        file_path.touch(exist_ok=True)
        # Open the file and write the source code of the page.
        with open(file_path, "wb") as file:
            file.write(response)


def clean_spaces(tag):
    return tag.text.strip()


def clean_prices_jules(tag):
    return float(tag.text.replace(u"\u20AC", "").replace(",", ".").strip())


def clean_prices_celio(tag):
    return float(tag.text[:6].replace(",", ".").strip())


def clean_id_celio(tag: str):
    return tag[-7:]


def clean_id_none(tag):
    return tag


def scrape_of_pages(page,
                    style: str,
                    website: str,
                    start_url: str,
                    filter: dict = {
                        'class': 'product-tile einstein', 'tag': 'div'
                    },
                    class_names: dict[str:str] = {'name': 'link pdp-title-link', 'price': 'value', 'reduction': 'value reduction',
                                                  'URL_img': "d-block img-fluid", 'URL': 'link pdp-title-link', 'id': 'clickproduct plp-carousel'
                                                  },
                    tags: dict = {'name': 'a', 'price': 'span', 'reduction': 'span',
                                  'URL_img': 'img', 'URL': 'a', 'id': 'span'
                                  },
                    clean_names_func=clean_spaces,
                    clean_prices_func=clean_prices_jules,
                    clean_id_func=clean_id_none,
                    name_id: str = 'data-pid'):

    # Loop on the list of jeans displayed on the page.
    soup = bs(page, "html.parser")
    df = pd.DataFrame(
        columns=['name', 'style', 'price', 'reduction_price', 'url_image', 'url', 'website', 'id'])
    df['id'] = [website + clean_id_func(tag[name_id])
                for tag in soup.find_all(name=tags['id'], attrs={'class': class_names['id']})]
    df['name'] = [
        clean_names_func(tag) for tag in soup.find_all(
            name=tags['name'], attrs={'class': class_names['name']})
    ]
    lenght = df.shape[0]
    print(lenght)
    df['style'] = [
        style for number_repetitions in range(lenght)
    ]
    price_list = []
    url_img_list = []
    reduction_price_list = []
    id_list = []
    # filter the code page over the image, title, and price of every jeans.
    for soup_filted in soup.find_all(name=filter['tag'], attrs={'class': filter['class']}):

        price_soup = soup_filted.find(
            name=tags['price'], attrs={'class': class_names['price']})
        price_list.append(clean_prices_func(price_soup))

        reduc_soup = soup_filted.find(
            name=tags['reduction'], attrs={'class': class_names['reduction']})
        if reduc_soup:
            reduction_price_list.append(clean_prices_func(reduc_soup))
        else:
            reduction_price_list.append(0)

        if website == 'Jules':
            # Select only the first image by jean in the DataFrame.
            img_soup = soup_filted.find_all(
                name=tags['URL_img'], attrs={'class': class_names['URL_img']})[0]

        else:
            img_soup = soup_filted.find('img')
        url_img_list.append(img_soup['src'])

    df['price'] = price_list
    df['reduction_price'] = reduction_price_list
    df['url_image'] = url_img_list

    df['url'] = [
        f"{start_url}{tag['href']}" for tag in soup.find_all(name=tags['URL'], attrs={'class': class_names['URL']}, href=True)]
    df['website'] = [
        website for number_repetitions in range(lenght)
    ]

    return df


def parse_to_dataframe(list_of_element: list = ['Loose', 'Regular', 'Relax', 'Skinny', 'Slim', 'Straight', 'Loose', 'Regular', 'Relax', 'Skinny', 'Slim', 'Straight']):
    df = pd.DataFrame(
        columns=['name', 'style', 'price', 'reduction_price', 'url_image', 'url', 'website', 'id'])
    pages_paths = os.listdir(
        "./bernard_comparator/comparator/webscraping/data")
    info_page = zip(list_of_element, pages_paths)
    for style, pages_path in info_page:
        with open(os.path.join("./bernard_comparator/comparator/webscraping/data", pages_path), "rb") as file:
            page = file.read().decode("utf-8")
            print(pages_path)
            if "jules" in pages_path:
                df = df.append(scrape_of_pages(
                    page=page, website='Jules', style=style, start_url='https://www.jules.com'))
            else:
                df = df.append(scrape_of_pages(
                    page=page, website='Celio', style=style, start_url='https://www.celio.com',
                    filter={
                        'class': 'ec_link c-product-v2-fullLink', 'tag': 'a'},
                    class_names={'name': 'ec_card__label', 'price': 'ec_card__price c-price c-product-v2_price', 'reduction': 'ec_card__price c-ota-product-price-new', 'URL': 'ec_link c-product-v2-fullLink', 'id': 'ec_link c-product-v2-fullLink'
                                 },
                    tags={'name': 'div', 'price': 'div', 'reduction': 'div', 'URL': 'a', 'id': 'a'
                          },
                    clean_names_func=clean_spaces,
                    clean_prices_func=clean_prices_celio,
                    clean_id_func=clean_id_celio,
                    name_id='href'))
    df = df.set_index('id', drop=True)
    return df


# def send_mail(message):
#     smtp_address = 'smtp.gmail.com'
#     smtp_port = 465

#     # on rentre les informations sur notre adresse e-mail
#     email_address = ''
#     email_password = ""

#     email_receiver = 'ber.maxime.paul@gmail.com'

#     # on crée la connexion
#     context = ssl.create_default_context()
#     with smtplib.SMTP_SSL(smtp_address, smtp_port, context=context) as server:
#         # connexion au compte
#         server.login(email_address, email_password)
#         # envoi du mail
#         server.sendmail(email_address, email_receiver,
#                         f"{message}")
def change_price_to_reduc_price(df):
    index = df[df['reduction_price'] > 0].index
    df.loc[index]['price'] = df.loc[index]['reduction_price']
    return df


@timer_func
def save_to_json():
    result = change_price_to_reduc_price(parse_to_dataframe())
    file_path = Path(
        './bernard_comparator/comparator/webscraping/webscraping.json')
    if file_path.exists():
        old_scraping = pd.read_json(file_path)
        print(old_scraping.head())
        if result.isna().sum().sum() == 0:
            result = result.merge(right=old_scraping, how='left')
        else:
            raise ValueError(
                "WEBSCRAPING BERNARD'S COMPARATOR: NA value in the result. Fail on the merge request.")
    else:
        # file_path.unlink()
        file_path.touch(exist_ok=True)

    result = result.to_json()
    with open(file_path, "w") as file:
        file.write(result)


# save_to_json()


@timer_func
def main():
    parse_html_source(website="Jules")

    parse_html_source(start_url='https://www.celio.com/Jeans-coupes-homme/c/',
                      list_of_element_in_url=['FR_BAS_JEANS_JEANSSLIM', 'FR_BAS_JEANS_JEANSTRAIGHT', 'FR_BAS_JEANS_JEANSSKINNY',
                                              'FR_SELECTION_LOOKS_DENIMCHIC', 'jean-homme-loose', 'FR_BAS_JEANS_JEANSREGULAR'],
                      website='celio',
                      button_id='footer_tc_privacy_button')
    save_to_json()


if __name__ == '__main__':
    main()
