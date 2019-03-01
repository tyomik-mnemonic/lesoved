from django.contrib.gis import admin
from .models import*
from dynamic_raw_id.admin import DynamicRawIDMixin
# Register your models here.


# Register your models here.
@admin.register(ForestryKeys)
class ForestryKeysAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('id',)
    search_fields = ('id','name','geom')
    list_display = ('id','name','geom')

@admin.register(DistrForestKeys)
class DistrForestKeysAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('df_names',)
    search_fields = ('id','df_names','geom','forestry_id')
    list_display = ('id','df_names','geom', 'forestry_id')


@admin.register(QartalKeys)
class QartalKeysAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('district_forestry_id',)
    search_fields = ('id','district_forestry_id','geom')
    list_display = ('id','district_forestry_id','geom')

@admin.register(Allotment)
class AllotmentAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('num_kvr',)
    search_fields = ('id','geom','num_kvr')

    list_display = ('id','geom','num_kvr')

@admin.register(Fca)
class FcaAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('id',)
    search_fields = ('id','subject','num_of_agree','uroch','num_allot','num_fca','ar_fca',\
        'expl_ar','cel_nazn','cat_zas','geom','video_cat')
    list_display = ('id','subject','num_of_agree','uroch','num_allot','num_fca','ar_fca',\
        'expl_ar','cel_nazn','cat_zas','geom','video_cat')




@admin.register(FcaUse)
class FcaUseAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('id_fca',)
    search_fields =  ('id_fca','fell_form','fell_type','main_type','kind', 'sortiment','ed_izm','vol_drew',\
        'fca_res','vol_res')
    list_display =  ('id_fca','fell_form','fell_type','main_type','kind', 'sortiment','ed_izm','vol_drew',\
        'fca_res','vol_res')

@admin.register( FcaPhoto)
class FcaPhotoAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('id_fca',)
    search_fields = ('id','id_fca','point_no','photo_no','ext','ref','image')
    list_display = ('id','id_fca','point_no','photo_no','ext','ref','image')

@admin.register(FcaWorks)
class FcaWorksAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('id_fca',)
    search_fields = ('id','id_fca','wkod','use_type')
    list_display = ('id','id_fca','wkod', 'main_type','fell_form','fell_type','kind',\
        'sortiment','vol_drew','use_type','fca_res','ed_izm','vol_les','act_name',\
        'obj_type','use_area','indicator','comment','date_report')






