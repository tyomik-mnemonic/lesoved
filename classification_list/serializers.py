# -*- coding: utf-8 -*-
from django.conf import settings
from rest_framework import serializers, utils
from .models import *


class ForestActivitySerializer(serializers.ModelSerializer):

    class Meta:
        model = ForestActivity
        fields = ('id', 'name')

class ForestKindSerializer(serializers.ModelSerializer):

    class Meta:
        model = ForestKind
        fields = ('id', 'name')

class ForestObjtypeSerializer(serializers.ModelSerializer):

    class Meta:
        model =  ForestObjtype
        fields = ('id', 'name')

class ForestProtectionSerializer(serializers.ModelSerializer):

    class Meta:
        model = ForestProtection
        fields = ('id', 'name')

class ForestPurposeSerializer(serializers.ModelSerializer):

    class Meta:
        model = ForestPurpose
        fields = ('id', 'name')

class ForestResourceSerializer(serializers.ModelSerializer):

    class Meta:
        model = ForestResource
        fields = ('id', 'name')

class ForestSortSerializer(serializers.ModelSerializer):

    class Meta:
        model =  ForestSort
        fields = ('id', 'name')

class ForestUseSerializer(serializers.ModelSerializer):

    class Meta:
        model = ForestUse
        fields = ('id', 'name')

class ForestWorksSerializer(serializers.ModelSerializer):

    class Meta:
        model = ForestWorks
        fields = ('id', 'name')

class ForestationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Forestation
        fields = ('id', 'name')

class LegalDocumentsSerializer(serializers.ModelSerializer):

    class Meta:
        model = LegalDocuments
        fields = ('id', 'name')

class OsnovanieSerializer(serializers.ModelSerializer):

    class Meta:
        model = Osnovanie
        fields = ('id', 'name')

class SubjectRfSerializer(serializers.ModelSerializer):

    class Meta:
        model = SubjectRf
        fields = ('id', 'name', 'kod_okato')

class TypeFellingSerializer(serializers.ModelSerializer):

    class Meta:
        model = TypeFelling
        fields = ('id', 'name')

class ShapeFellingSerializer(serializers.ModelSerializer):

    class Meta:
        model = ShapeFelling
        fields = ('id', 'name')

class TypesForestrySerializer(serializers.ModelSerializer):

    class Meta:
        model = TypesForestry
        fields = ('id', 'name')

class ViddocSerializer(serializers.ModelSerializer):

    class Meta:
        model =  Viddoc
        fields = ('id', 'name')

class PravformSerializer(serializers.ModelSerializer):

    class Meta:
        model = Pravform
        fields = ('id', 'name')

class IdentDocSerializer(serializers.ModelSerializer):

    class Meta:
        model = IdentDoc
        fields = ('id', 'name')

class UnitMeasSerializer(serializers.ModelSerializer):

    class Meta:
        model = UnitMeas
        fields = ('id', 'name')