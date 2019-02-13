from django.contrib.gis import admin
from .models import Addresses
from dynamic_raw_id.admin import DynamicRawIDMixin


class DefaultGeoAdmin(admin.OSMGeoAdmin):
    search_fields = ['code', 'name']
    display_wkt = True
    save_on_top = True

@admin.register(Addresses)
class CutareaAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('id_renter','subject','city','street','house','housing','building','office','telephon','type')
    list_display = ('id_renter','subject','city','street','house','housing','building','office','telephon','type')
