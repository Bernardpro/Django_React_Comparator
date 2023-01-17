from django.db import models

# Create your models here.


class Comparator(models.Model):
    id = models.CharField(primary_key=True)
    name = models.CharField(max_length=150, blank=True)
    style = models.CharField(max_length=150, blank=True)
    url = models.URLField(max_length=500, blank=True)
    url_image = models.URLField(max_length=1000, blank=True)
    price = models.FloatField(default=-1, blank=True)
    reduction_price = models.FloatField(default=-1, blank=True)
    website = models.CharField(max_length=100, blank=True)

    def __str__(self) -> str:
        return self.name
