from django.shortcuts import render


from rest_framework import viewsets


from .serializers import ComparatorSerializer


from .models import Comparator

# Create your views here.

# create a class for the Todo model viewsets


class ComparatorView(viewsets.ModelViewSet):

    # create a serializer class and
    # assign it to the ComparatorSerializer class
    serializer_class = ComparatorSerializer

    # define a variable and populate it
    # with the Comparator list objects
    queryset = Comparator.objects.all()
