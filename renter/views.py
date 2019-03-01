from django.shortcuts import render
from rest_framework import viewsets, generics, permissions, filters, decorators

from .models import *
from .serializers import *

class RentersSet(viewsets.ModelViewSet):
    queryset = Renters.objects.all()
    serializer_class = RentersSerializer
    permission_classes = (permissions.AllowAny,)

class AgreeSet(viewsets.ModelViewSet):
    queryset = Agreement.objects.all()
    serializer_class = AgreementSerializer
    permission_classes = (permissions.AllowAny,)



class RentAddresSet(viewsets.ModelViewSet):
    queryset = RentAddres.objects.all()
    serializer_class = RentAddresSerializer
    permission_classes = (permissions.AllowAny,)
