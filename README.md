# Web Project Overview: Celio vs. Jules Site Comparison

This project is a comprehensive web application designed to compare and analyze the websites of two major fashion retailers: Celio and Jules. By leveraging the robust back-end capabilities of Django and the dynamic front-end features of React JS, this application offers an insightful comparison of these websites in terms of product range, pricing, and user experience.

## Key Features

- **Scraping Algorithm**: Implemented in Python using Beautiful Soup, this algorithm meticulously extracts data from both Celio and Jules websites. It captures product details, prices, images, and more, providing a thorough dataset for comparison.
- **Django Back-End**: Manages data processing, storage, and serves as the backbone of the application. It handles requests from the front-end, executes the scraping algorithm, and sends back processed data.
- **React JS Front-End**: Offers an interactive and user-friendly interface. Users can view side-by-side comparisons of products, prices, and other relevant data from Celio and Jules.

## Installation & Setup

1. **Clone the Repository**
```
git clone https://github.com/Bernardpro/Django_React_Comparator.git
```
2. Set Up the Django Environment

```
cd Django_React_Comparator
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
3. Set Up the React Application
```
cd frontend
npm install
npm start
```
## Usage
Initiate Scraping: Access the Django admin panel to trigger the scraping process.
Data Visualization: Use the React interface to compare the products, prices, and other aspects between Celio and Jules.
