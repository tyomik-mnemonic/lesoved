from django.shortcuts import render
from rest_framework import viewsets, generics, permissions, filters, decorators

from .models import *
from .serializers import *

class ForestActivitySet(viewsets.ModelViewSet):
    queryset = ForestActivity.objects.all()
    serializer_class = ForestActivitySerializer
    permission_classes = (permissions.AllowAny,)

class ForestKindSet(viewsets.ModelViewSet):
    queryset = ForestKind.objects.all()
    serializer_class = ForestKindSerializer
    permission_classes = (permissions.AllowAny,)

class ForestObjtypeSet(viewsets.ModelViewSet):
    queryset = ForestObjtype.objects.all()
    serializer_class = ForestObjtypeSerializer
    permission_classes = (permissions.AllowAny,)

class ForestProtectionSet(viewsets.ModelViewSet):
    queryset = ForestProtection.objects.all()
    serializer_class = ForestProtectionSerializer
    permission_classes = (permissions.AllowAny,)

class ForestPurposeSet(viewsets.ModelViewSet):
    queryset = ForestPurpose.objects.all()
    serializer_class = ForestPurposeSerializer
    permission_classes = (permissions.AllowAny,)

class ForestResourceSet(viewsets.ModelViewSet):
    queryset = ForestResource.objects.all()
    serializer_class = ForestResourceSerializer
    permission_classes = (permissions.AllowAny,)

class ForestSortSet(viewsets.ModelViewSet):
    queryset = ForestSort.objects.all()
    serializer_class = ForestSortSerializer
    permission_classes = (permissions.AllowAny,)

class ForestUseSet(viewsets.ModelViewSet):
    queryset = ForestUse.objects.all()
    serializer_class = ForestUseSerializer
    permission_classes = (permissions.AllowAny,)


class ForestWorksSet(viewsets.ModelViewSet):
    queryset = ForestWorks.objects.all()
    serializer_class = ForestWorksSerializer
    permission_classes = (permissions.AllowAny,)

class ForestationSet(viewsets.ModelViewSet):
    queryset = Forestation.objects.all()
    serializer_class = ForestationSerializer
    permission_classes = (permissions.AllowAny,)

class LegalDocumentsSet(viewsets.ModelViewSet):
    queryset = LegalDocuments.objects.all()
    serializer_class = LegalDocumentsSerializer
    permission_classes = (permissions.AllowAny,)

class OsnovanieSet(viewsets.ModelViewSet):
    queryset = Osnovanie.objects.all()
    serializer_class = OsnovanieSerializer
    permission_classes = (permissions.AllowAny,)
'''
class PwdTestSet(viewsets.ModelViewSet):
    queryset = PwdTest.objects.all()
    serializer_class = PwdTestSerializer
    permission_classes = (permissions.AllowAny,)
'''
class QuartersSet(viewsets.ModelViewSet):
    queryset = Quarters.objects.all()
    serializer_class = QuartersSerializer
    permission_classes = (permissions.AllowAny,)

class SubjectRfSet(viewsets.ModelViewSet):
    queryset = SubjectRf.objects.all()
    serializer_class = SubjectRfSerializer
    permission_classes = (permissions.AllowAny,)

class TypeFellingSet(viewsets.ModelViewSet):
    queryset = TypeFelling.objects.all()
    serializer_class = TypeFellingSerializer
    permission_classes = (permissions.AllowAny,)



class ShapeFellingSet(viewsets.ModelViewSet):
    queryset = ShapeFelling.objects.all()
    serializer_class = ShapeFellingSerializer
    permission_classes = (permissions.AllowAny,)

class TypesForestrySet(viewsets.ModelViewSet):
    queryset = TypesForestry.objects.all()
    serializer_class = TypesForestrySerializer
    permission_classes = (permissions.AllowAny,)

class ViddocSet(viewsets.ModelViewSet):
    queryset = Viddoc.objects.all()
    serializer_class = ViddocSerializer
    permission_classes = (permissions.AllowAny,)

class PravformSet(viewsets.ModelViewSet):
    queryset = Pravform.objects.all()
    serializer_class = PravformSerializer
    permission_classes = (permissions.AllowAny,)

class IdentDocSet(viewsets.ModelViewSet):
    queryset = IdentDoc.objects.all()
    serializer_class = IdentDocSerializer
    permission_classes = (permissions.AllowAny,)

class UnitMeasSet(viewsets.ModelViewSet):
    queryset = UnitMeas.objects.all()
    serializer_class = UnitMeasSerializer
    permission_classes = (permissions.AllowAny,)