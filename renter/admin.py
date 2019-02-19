from django.contrib.gis import admin
from .models import*
from dynamic_raw_id.admin import DynamicRawIDMixin
# Register your models here.


# Register your models here.
@admin.register(Renters)
class RentersAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('account_name',)
    search_fields = ('identity_doc', 'account_name')
    list_display = ('id','org_prav_form','inn','account_name','acc_pwd','name',\
    'snameplp','fnameplp','patronymicplp','position','leg_docum','ogrn','identity_doc',\
    'serial_doc','number_doc')

@admin.register(Agreement)
class RentersAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('act_num',)
    search_fields = ('num', 'date_reg','positive_date','act_num')
    list_display = ('id','renters_id','date','organ','num','date_reg','kadastre','glr',\
    'reas_doc','use_start','use_end','act_num','act_date','project','project_date',\
    'project_author','positive_date')

@admin.register(RentAddres)
class RentAddresAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('renters_id',)
    search_fields = ('renters_id', 'subject','city','street','house', 'housing', 'building','office')
    fields = ('id','renters_id','subject','city','street','house','housing','building',\
    'office','telephon','type')

