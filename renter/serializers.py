# -*- coding: utf-8 -*-
# -*- coding: utf-8 -*-
from django.conf import settings
from rest_framework import serializers, utils
from .models import *

class RentersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Renters
        fields = ('id','org_prav_form','inn','account_name','acc_pwd','name','snameplp','fnameplp',\
        'patronymicplp','position','leg_docum','ogrn','identity_doc','serial_doc','number_doc')

class AgreementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agreement
        fields = ('id','renters_id','date','organ','num','date_reg','kadastre','glr',\
        'reas_doc','use_start','use_end','act_num','act_date','project','project_date','project_author','positive_date','viddoc')

class RentAddresSerializer(serializers.ModelSerializer):
    class Meta:
        model = RentAddres
        fields = ('id','renters_id','subject','city','street','house','housing','building',\
        'office','telephon','type')
