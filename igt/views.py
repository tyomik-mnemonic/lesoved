from django.shortcuts import render

# Create your views here.


from django.shortcuts import render
from rest_framework import viewsets, generics, permissions, filters, decorators

from .models import *
from .serializers import *


class AddressesViewSet(viewsets.ModelViewSet):
    queryset = Addresses.objects.all()
    serializer_class = AddressesSerializer
    permission_classes = (permissions.AllowAny,)