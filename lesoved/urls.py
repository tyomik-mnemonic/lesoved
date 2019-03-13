"""lesoved URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from django.views.generic import TemplateView
from rest_framework import routers

from django.conf import settings

from classification_list import views
from renter.views import *
from cutarea.views import *


router = routers.DefaultRouter()
router.register(r'list-forest-activity', views.ForestActivitySet, base_name='list-forest-activity') #localhost:/api/Виды мероприятий по использованию лесов (справочник)
router.register(r'list-forest-kind', views.ForestKindSet, base_name='list-forest-kind')
router.register(r'list-forest-obj-type', views.ForestObjtypeSet, base_name='list-forest-obj-type')#api геометрии лесосеки
router.register(r'ForestProtectionSet', views.ForestProtectionSet, base_name='ForestProtectionSet')
router.register(r'list-forest-purpose', views.ForestPurposeSet, base_name='list-forest-purpose')
router.register(r'list-forest-resource', views.ForestResourceSet, base_name='list-forest-resource')
router.register(r'list-forest-sort', views.ForestSortSet, base_name='list-forest-sort')
router.register(r'list-forest-use', views.ForestUseSet, base_name='list-forest-use')
router.register(r'list-forest-works', views.ForestWorksSet, base_name='list-forest-works')
router.register(r'list-forest-ation', views.ForestationSet, base_name='list-forest-ation')
router.register(r'list-legal-documents', views.LegalDocumentsSet, base_name='list-legal-documents')
router.register(r'list-osnovanie', views.OsnovanieSet, base_name='list-osnovanie')
router.register(r'list-subjectRF', views.SubjectRfSet, base_name='list-subjectRF')
router.register(r'list-type-felling', views.TypeFellingSet, base_name='list-type-felling')
router.register(r'list-shape-felling', views.ShapeFellingSet, base_name='list-shape-felling')
router.register(r'list-types-forestry', views.TypesForestrySet, base_name='list-types-forestry')#localhost:/api/forestry-cutarea/
router.register(r'list-vid-doc', views.ViddocSet, base_name='list-vid-doc')
router.register(r'list-prav-form', views.PravformSet, base_name='list-prav-form')
router.register(r'list-ident-doc', views.IdentDocSet, base_name='list-ident-doc')
router.register(r'list-unit-meas', views.UnitMeasSet, base_name='list-unit-meas')
#renters api
router.register(r'renter',RentersSet, base_name = 'renter')
router.register(r'agreement',AgreeSet, base_name = 'agreement')
router.register(r'addresses',RentAddresSet, base_name = 'addresses')
#cutareas api
router.register(r'cutarea-forestry', ForestryKeysSet, base_name='cutarea-forestry') #localhost:/api/Виды мероприятий по использованию лесов (справочник)
router.register(r'cutarea-distr-forestry', DistrForestKeysSet, base_name='cutarea-distr-forestry')
router.register(r'cutarea-qart', QartalKeysSet, base_name='cutarea-qart')
router.register(r'cutarea-allotment', AllotmentSet, base_name='cutarea-allotment')
router.register(r'cutarea-fca', FcaSet, base_name='cutarea-fca')
router.register(r'cutarea-fca-use', FcaUseSet, base_name='cutarea-fca-use')
router.register(r'cutarea-fca-photo', FcaPhotoSet, base_name='cutarea-fca-photo')
router.register(r'cutarea-works', FcaWorksSet, base_name='cutarea-works')




urlpatterns = [
    url(r'^api/', include(router.urls)),
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html'), name='index'),
    url(r'^admin/dynamic_raw_id/', include('dynamic_raw_id.urls')),
]
if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        path('__debug__/', include(debug_toolbar.urls)),

        # For django versions before 2.0:
        # url(r'^__debug__/', include(debug_toolbar.urls)),

    ] + urlpatterns