from django.contrib.gis import admin
from .models import*
from dynamic_raw_id.admin import DynamicRawIDMixin
# Register your models here.

'''
class DefaultGeoAdmin(admin.OSMGeoAdmin):
    search_fields = ['code', 'name']
    display_wkt = True
    save_on_top = True'''

@admin.register(ForestActivity)
class ForestActivityAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('name',)
    search_fields = ('id', 'name')
    list_display = ('id', 'name')


@admin.register(ForestKind)
class ForestKindAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('name',)
    search_fields = ('id', 'name')
    list_display = ('id', 'name')


@admin.register(ForestObjtype)
class ForestObjtypeAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('name',)
    search_fields = ('id', 'name')
    list_display = ('id', 'name')


@admin.register(ForestProtection)
class ForestProtectionAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('name',)
    search_fields = ('id', 'name')
    list_display = ('id', 'name')


@admin.register(ForestPurpose)
class ForestPurposeAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('name',)
    search_fields = ('id', 'name')
    list_display = ('id', 'name')

@admin.register(ForestResource)
class ForestResourceAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('name',)
    search_fields = ('id', 'name')
    list_display = ('id', 'name')


@admin.register(ForestSort)
class ForestSortAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('name',)
    search_fields = ('id', 'name')
    list_display = ('id', 'name')

@admin.register(ForestUse)
class ForestUseAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('name',)
    search_fields = ('id', 'name')
    list_display = ('id', 'name')

#==========z nen!!!!!!!!!!!!!!
@admin.register(ForestWorks)
class ForestWorksAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('name',)
    search_fields = ('id', 'name')
    list_display = ('id', 'name')

@admin.register(Forestation)
class ForestationAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('name',)
    search_fields = ('id', 'name')
    list_display = ('id', 'name')


@admin.register(LegalDocuments)
class LegalDocumentsAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('name',)
    search_fields = ('id', 'name')
    list_display = ('id', 'name')

@admin.register(Osnovanie)
class OsnovanieAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('name',)
    search_fields = ('id', 'name')
    list_display = ('id', 'name')

'''
@admin.register(PwdTest)
class PwdTestAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('acc_name',)
    search_fields = ('id', 'acc_name','pwd_hash')
    list_display = ('id', 'acc_name,''pwd_hash')
'''

@admin.register(Quarters)
class QuartersAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('id', 'geom', 'forest_code','name', 'quarter')
    search_fields = ('id', 'geom', 'forest_code','name', 'quarter')
    list_display = ('id', 'geom', 'forest_code','name', 'quarter')


@admin.register(SubjectRf)
class SubjectRfAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('name',)
    search_fields = ('id', 'name', 'kod_okato')
    list_display = ('id', 'name',  'kod_okato')

@admin.register(TypeFelling)
class TypeFellingAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('name',)
    search_fields = ('id', 'name')
    list_display = ('id', 'name')


@admin.register(ShapeFelling)
class ShapeFellingAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('name',)
    search_fields = ('id', 'name')
    list_display = ('id', 'name')

@admin.register(TypesForestry)
class TypesForestryAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('name',)
    search_fields = ('id', 'name')
    list_display = ('id', 'name')


@admin.register(Viddoc)
class ViddocAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('name',)
    search_fields = ('id', 'name')
    list_display = ('id', 'name')



@admin.register(Pravform)
class PravformAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('name',)
    search_fields = ('id', 'name')
    list_display = ('id', 'name')

@admin.register(IdentDoc)
class IdentDocAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('name',)
    search_fields = ('id', 'name')
    list_display = ('id', 'name')

@admin.register(UnitMeas)
class UnitMeasAdmin(DynamicRawIDMixin, admin.OSMGeoAdmin):
    list_filter = ('name',)
    search_fields = ('id', 'name')
    list_display = ('id', 'name')