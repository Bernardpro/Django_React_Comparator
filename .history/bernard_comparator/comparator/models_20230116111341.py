from django.db import models
import json
from pathlib import Path
# Extract data from webscraping.json in data.
file_path = Path(
    "./bernard_comparator/comparator/webscraping/webscraping.json")
with open(file_path) as json_file:
    data = json.load(json_file)

# Create your models here.


class Comparator(models.Model):
    id = models.CharField(primary_key=True, max_length=100)
    name = models.CharField(max_length=500, blank=True)
    style = models.CharField(max_length=500, blank=True)
    url = models.URLField(blank=True)
    url_image = models.URLField(blank=True)
    price = models.FloatField(default=-1, blank=True)
    reduction_price = models.FloatField(default=-1, blank=True)
    website = models.CharField(max_length=100, blank=True)

    def __str__(self) -> str:
        return self.name

    def set_style(self, id, style):
        if self.id == id:
            self.style = style

    def set_url(self, id, url):
        if self.id == id:
            self.url = url

    def set_url_image(self, id, url_image):
        if self.id == id:
            self.url_image = url_image

    def set_price(self, id, price):
        if self.id == id:
            self.price = price

    def set_reduction_price(self, id, reduction_price):
        if self.id == id:
            self.reduction_price = reduction_price

    def set_reduction_price(self, id, website):
        if self.id == id:
            self.website = website


for id_value, name in data["name"].items():
    model1 = Comparator(id=id_value, name=name)
    model1.save()
# for id_value, style in data["style"].items():
#     model2 = Comparator(id=id_value, style=style)
#     model2.save()
# for id_value, url in data["url"].items():
#     model = Comparator(id=id_value, url=url)
#     model.save()
# for id_value, url_image in data["url_image"].items():
#     model = Comparator(id=id_value, url_image=url_image)
#     model.save()
# for id_value, price in data["price"].items():
#     model = Comparator(id=id_value, price=price)
#     model.save()
# for id_value, reduc_price in data["reduction_price"].items():
#     model = Comparator(id=id_value, reduction_price=reduc_price)
#     model.save()
# for id_value, site in data["website"].items():
#     model = Comparator(id=id_value, website=site)
#     model.save()
