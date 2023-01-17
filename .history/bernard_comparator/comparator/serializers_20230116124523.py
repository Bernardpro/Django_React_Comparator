from rest_framework import serializers

from .models import Comparator

# create a serializer class


class ComparatorSerializer(serializers.ModelSerializer):
    # create a meta class
    class Meta:
        model = Comparator
        fields = ('id', 'name', 'website', 'price',
                  'style', 'url', 'url_image')
