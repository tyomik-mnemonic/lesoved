from django.contrib.gis import admin
from .models import*
from dynamic_raw_id.admin import DynamicRawIDMixin
# Register your models here.


# Register your models here.
@admin.register(ForestryKeys)
class ForestryKeysAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('id',)
    search_fields = ('id','df_forestry','geom')
    list_display = ('id','df_forestry','geom')

@admin.register(DistrForestKeys)
class DistrForestKeysAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('df_names',)
    search_fields = ('id','df_names','geom')
    list_display = ('id','df_names','geom')

@admin.register(TractKeys)
class TractKeysAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('id',)
    search_fields = ('id','tract_name','forestry','district_forestry','geom')

    list_display = ('id','tract_name','forestry','district_forestry','geom')


@admin.register(QartalKeys)
class QartalKeysAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('forestry_id',)
    search_fields = ('id','forestry_id','district_forestry_id','tract_id','geom')
    list_display = ('id','forestry_id','district_forestry_id','tract_id','geom')

@admin.register(Allotment)
class AllotmentAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('forestry_id',)
    search_fields = ('id','geom','forestry_id','district_forestry_id','tract_id','num_kvr')

    list_display = ('id','geom','forestry_id','district_forestry_id','tract_id','num_kvr')

@admin.register(Fca)
class FcaAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('id',)
    search_fields = ('subject', 'renter_name','sortiment','main_type','fell_type', 'fell_form')
    list_display = ('id','subject','renter_name','num_of_agree','num_allot','ar_fca',\
        'fell_form','fell_type','main_type','sortiment',\
        'vol_zag','biz_type','expl_ar','cel_nazn','cat_zas','geom','video_cat')




@admin.register(FcaUse)
class FcaUseAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('id_fca',)
    search_fields =  ('id_fca','fell_form','fell_type','main_type','kind','ed_izm','vol_drew',\
        'fca_res','vol_res')
    list_display =  ('id_fca','fell_form','fell_type','main_type','kind','ed_izm','vol_drew',\
        'fca_res','vol_res')

@admin.register( FcaPhoto)
class FcaPhotoAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('id_fca',)
    search_fields = ('id','id_fca','point_no','coords','photo_no','ext','ref','image')
    list_display = ('id','id_fca','point_no','coords','photo_no','ext','ref','image')

@admin.register(FcaWorks)
class FcaWorksAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('id_fca',)
    search_fields = ('id','id_fca','wkod','sortiment','vol_drew','use_type')
    list_display = ('id','id_fca','wkod','sortiment','vol_drew','use_type',\
        'fca_res','ed_izm','vol_les','act_name',\
        'obj_type','use_area','indicator','comment','date_report')


@admin.register(ForestSite)
class ForestSiteAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('id',)
    search_fields = ('num_kv','district_forestry','forestry','radio')
    list_display = ('id','vid_doc','num_doc','date_doc','id_rr','name_gov',\
        'num_grd','osn_pred_uch','date_start','date_stop',\
        'num_akt','date_akt','projects','num_kv','district_forestry','forestry','radio')




