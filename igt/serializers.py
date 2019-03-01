# -*- coding: utf-8 -*-
from django.conf import settings
from rest_framework import serializers, utils
from rest_framework_gis import serializers as gis_serializers

from .models import *


class AddressesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Addresses
        fields = ('id_renter','subject','city','street','house','housing','building','office','telephon','type')
        read_only_fields = ('id_renter','subject','city','street','house','housing','building','office','telephon','type')

