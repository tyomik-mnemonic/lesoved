
from django.conf import settings
from rest_framework import serializers, utils
from .models import *

class ForestryKeysSerializer(serializers.ModelSerializer):
    class Meta:
        model = ForestryKeys
        fields = ('id','name','geom')

class DistrForestKeysSerializer(serializers.ModelSerializer):
    class Meta:
        model = DistrForestKeys
        fields = ('id','df_names','geom', 'forestry_id')


class QartalKeysSerializer(serializers.ModelSerializer):
    class Meta:
        model = QartalKeys
        fields = ('id','district_forestry_id','geom')

class AllotmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Allotment
        fields = ('id','geom','num_kvr')

class FcaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fca
        fields = ('id','subject','num_of_agree','uroch','num_allot','num_fca','ar_fca',\
       'expl_ar','cel_nazn','cat_zas','geom','video_cat')


class FcaUseSerializer(serializers.ModelSerializer):
    class Meta:
        model = FcaUse
        fields = ('id_fca','fell_form','fell_type','main_type','kind','sortiment','ed_izm','vol_drew',\
        'fca_res','vol_res')


class FcaPhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = FcaPhoto
        fields = ('id','id_fca','point_no','photo_no','ext','ref','image')



class FcaWorksSerializer(serializers.ModelSerializer):
    class Meta:
        model = FcaWorks
        fields = ('id','id_fca','wkod', 'main_type','fell_form','fell_type','kind',\
        'sortiment','vol_drew','use_type','fca_res','ed_izm','vol_les','act_name',\
        'obj_type','use_area','indicator','comment','date_report')


