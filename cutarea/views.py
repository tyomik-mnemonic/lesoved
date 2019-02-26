from django.shortcuts import render
from rest_framework import viewsets, generics, permissions, filters, decorators

from .models import *
from .serializers import *

class ForestryKeysSet(viewsets.ModelViewSet):
    queryset = ForestryKeys.objects.all()
    serializer_class = ForestryKeysSerializer
    permission_classes = (permissions.AllowAny,)

class DistrForestKeysSet(viewsets.ModelViewSet):
    queryset = DistrForestKeys.objects.all()
    serializer_class = DistrForestKeysSerializer
    permission_classes = (permissions.AllowAny,)

class QartalKeysSet(viewsets.ModelViewSet):
    queryset = QartalKeys.objects.all()
    serializer_class = QartalKeysSerializer
    permission_classes = (permissions.AllowAny,)

class AllotmentSet(viewsets.ModelViewSet):
    queryset = Allotment.objects.all()
    serializer_class = AllotmentSerializer
    permission_classes = (permissions.AllowAny,)

class FcaSet(viewsets.ModelViewSet):
    queryset = Fca.objects.all()
    serializer_class = FcaSerializer
    permission_classes = (permissions.AllowAny,)

class FcaUseSet(viewsets.ModelViewSet):
    queryset = FcaUse.objects.all()
    serializer_class = FcaUseSerializer
    permission_classes = (permissions.AllowAny,)

class FcaPhotoSet(viewsets.ModelViewSet):
    queryset = FcaPhoto.objects.all()
    serializer_class = FcaPhotoSerializer
    permission_classes = (permissions.AllowAny,)


class FcaWorksSet(viewsets.ModelViewSet):
    queryset = FcaWorks.objects.all()
    serializer_class = FcaWorksSerializer
    permission_classes = (permissions.AllowAny,)
