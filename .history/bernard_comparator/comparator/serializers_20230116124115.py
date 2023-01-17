from rest_framework import serializers

from .models import Comparator

# create a serializer class


class ComparatorSerializer(serializers.ModelSerializer):
    # create a meta class
    class Meta:
        model = Comparator
        fields = ('name', 'id', 'website', 'price', 'style', 'url', 'url_img')
