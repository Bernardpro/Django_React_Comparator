from rest_framework import serializers

from .models import Comparator

# create a serializer class


class ComparatorSerializer(serializers.ModelSerializer):
    # create a meta class
    class Meta:
        model = Comparator
        fiels = ['id', 'name', 'style', 'url', 'url_img',
                 'price', 'website', 'reduction_price']
