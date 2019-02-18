from django.db import models

# Create your models here.
class ForestActivity(models.Model): #Виды мероприятий по использованию лесов (справочник)
    id = models.SmallIntegerField(primary_key=True)
    activity = models.TextField(blank=True, null=True)

    class Meta:
        managed = True
        verbose_name = 'мероприятия'




class ForestKind(models.Model): #Таблица-справочник по видовому (породному) составу древесины
    id = models.SmallIntegerField(primary_key=True)
    name = models.CharField(max_length=15, blank=True, null=True)

    class Meta:
        managed = True
        verbose_name = 'видовой состав'

class ForestObjtype(models.Model):
    id = models.SmallIntegerField(primary_key=True)
    obj_type = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = True
        verbose_name = 'объект'
        verbose_name_plural = 'объекты'

class ForestProtection(models.Model):
    id = models.SmallIntegerField(primary_key=True)
    protect_cat = models.TextField(blank=True, null=True)
    code = models.CharField(max_length=5, blank=True, null=True)

    class Meta:
        managed = True
        verbose_name = 'категория лесозащиты'


class ForestPurpose(models.Model): #Целевое назначение лесов в соответствии с ЛК (справочник)
    id = models.SmallIntegerField(primary_key=True)
    purpose = models.TextField(blank=True, null=True)

    class Meta:
        managed = True
        verbose_name = 'целевое назначения'


class ForestResource(models.Model):
    id = models.SmallIntegerField(primary_key=True)
    type = models.CharField(max_length=110, blank=True, null=True)

    class Meta:
        managed = True
        verbose_name = 'ресурсы'


class ForestSort(models.Model):
    id = models.SmallIntegerField(primary_key=True)
    name = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = True
        verbose_name = 'сортиментный с-в'


class ForestUse(models.Model):
    id = models.SmallIntegerField(primary_key=True)
    name = models.TextField(blank=True, null=True)

    class Meta:
        managed = True
        verbose_name = 'использование лесов'


class ForestWorks(models.Model):
    id = models.SmallIntegerField(primary_key=True)
    name = models.TextField(blank=True, null=True)

    class Meta:
        managed = True
        verbose_name = 'лесные работы'


class Forestation(models.Model):
    id = models.SmallIntegerField(primary_key=True)
    indicator = models.TextField(blank=True, null=True)
    code = models.CharField(max_length=3, blank=True, null=True)

    class Meta:
        managed = True
        verbose_name = 'лесовостановление'


class LegalDocuments(models.Model):
    id = models.SmallIntegerField(primary_key=True)
    name = models.CharField(max_length=40, blank=True, null=True)

    class Meta:
        managed = True
        verbose_name = 'документ'


class Osnovanie(models.Model):
    id = models.SmallIntegerField(primary_key=True)
    name = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = True
        verbose_name = 'основание'


class PwdTest(models.Model):
    id = models.SmallIntegerField(primary_key=True) #нечто неопределенное (генка)
    acc_name = models.CharField(max_length=20, blank=True, null=True)
    pwd_hash = models.CharField(max_length=128, blank=True, null=True)

    class Meta:
        managed = True
        verbose_name = 'генка??'


class Quarters(models.Model):
    id = models.SmallIntegerField(primary_key=True)
    geom = models.TextField(blank=True, null=True)  # This field type is a guess.
    forest_code = models.CharField(max_length=10, blank=True, null=True)
    forest_name = models.CharField(max_length=20, blank=True, null=True)
    quarter = models.SmallIntegerField(blank=True, null=True)

    class Meta:
        managed = True

class SubjectRf(models.Model):
    id = models.SmallIntegerField(primary_key=True)
    name = models.CharField(max_length=10)
    kod_okato = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = True
        verbose_name = 'субъект РФ'
        verbose_name_plural = 'субъекты РФ'


class TypeFelling(models.Model): #Таблица-справочник по видам рубки
    id = models.SmallIntegerField(primary_key=True)
    name = models.CharField(max_length=300, blank=True, null=True)

    class Meta:
        managed = True
        verbose_name = 'вид рубки'

class ShapeFelling(models.Model): #Таблица-справочник по формам рубки
    id = models.SmallIntegerField(primary_key=True)
    name = models.CharField(max_length=300, blank=True, null=True)

    class Meta:
        managed = True
        verbose_name = 'форма рубки'


class TypesForestry(models.Model): #Таблица-справочник по типам хозяйства
    id = models.SmallIntegerField(primary_key=True)
    name = models.CharField(max_length=30, blank=True, null=True)

    class Meta:
        managed = True
        verbose_name = 'тип хозяйства'


class Viddoc(models.Model):
    id = models.IntegerField(primary_key=True)
    type = models.TextField(blank=True, null=True)

    class Meta:
        managed = True
        verbose_name = 'вид раз. документации'

class Pravform(models.Model):

    id = models.IntegerField(primary_key=True)
    prav_form = models.TextField(blank=True, null=True)

    class Meta:
        managed = True
        verbose_name = 'правовая форма'

class IdentDoc(models.Model):

    id = models.IntegerField(primary_key=True)
    ident_doc = models.TextField(blank=True, null=True)

    class Meta:
        managed = True
        verbose_name = 'документ удоств. личности'



class UnitMeas(models.Model):

    id = models.IntegerField(primary_key=True)
    qart_names = models.TextField(blank=True, null=True)

    class Meta:
        managed = True
        verbose_name = 'единицы измерения'