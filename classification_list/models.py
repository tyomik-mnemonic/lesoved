from django.db import models

# Create your models here.


class ForestActivity(models.Model): #Виды мероприятий по использованию лесов (справочник)
    id = models.SmallIntegerField(primary_key=True)
    name = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.name

    def __unicode__(self):
        return self.name

    class Meta:
        managed = True
        verbose_name = 'мероприятия'
        verbose_name_plural = 'мероприятия'




class ForestKind(models.Model): #Таблица-справочник по видовому (породному) составу древесины
    id = models.SmallIntegerField(primary_key=True)
    name = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.name

    def __unicode__(self):
        return self.name

    class Meta:
        managed = True
        verbose_name = 'видовой состав'
        verbose_name_plural = 'видовой состав'

class ForestObjtype(models.Model):
    id = models.SmallIntegerField(primary_key=True)
    name = models.CharField(max_length=100, blank=True, null=True)


    def __str__(self):
        return self.name

    def __unicode__(self):
        return self.name

    class Meta:
        managed = True
        verbose_name = 'объект'
        verbose_name_plural = 'объекты'

class ForestProtection(models.Model):
    id = models.SmallIntegerField(primary_key=True)
    name = models.TextField(blank=True, null=True)
    code = models.CharField(max_length=5, blank=True, null=True) #коды кат лесозащиты

    def __str__(self):
        return self.name

    def __unicode__(self):
        return self.name

    class Meta:
        managed = True
        verbose_name = 'категория лесозащиты'
        verbose_name_plural = 'категории лесозащиты'


class ForestPurpose(models.Model): #Целевое назначение лесов в соответствии с ЛК (справочник)
    id = models.SmallIntegerField(primary_key=True)
    name = models.CharField(max_length=180, blank=True, null=True)


    def __str__(self):
        return self.name

    def __unicode__(self):
        return self.name

    class Meta:
        managed = True
        verbose_name = 'целевое назначение'
        verbose_name_plural = 'целевое назначение'


class ForestResource(models.Model):
    id = models.SmallIntegerField(primary_key=True)
    name = models.CharField(max_length=110, blank=True, null=True)

    def __str__(self):
        return self.name

    def __unicode__(self):
        return self.name

    class Meta:
        managed = True
        verbose_name = 'ресурс'
        verbose_name_plural = 'ресурсы'


class ForestSort(models.Model):
    id = models.SmallIntegerField(primary_key=True)
    name = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.name

    def __unicode__(self):
        return self.name

    class Meta:
        managed = True
        verbose_name = 'сортиментный с-в'
        verbose_name_plural = 'сортиментный с-в'


class ForestUse(models.Model):
    id = models.SmallIntegerField(primary_key=True)
    name = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.name

    def __unicode__(self):
        return self.name

    class Meta:
        managed = True
        verbose_name = 'использование лесов'
        verbose_name_plural = 'виды использования лесов'



class ForestWorks(models.Model):
    id = models.SmallIntegerField(primary_key=True)
    name = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.name

    def __unicode__(self):
        return self.name

    class Meta:
        managed = True
        verbose_name = 'лесные работы'
        verbose_name_plural = 'лесные работы'


class Forestation(models.Model):
    id = models.SmallIntegerField(primary_key=True)
    name = models.CharField(max_length=100, blank=True, null=True)
    code = models.CharField(max_length=3, blank=True, null=True)

    def __str__(self):
        return self.name

    def __unicode__(self):
        return self.name

    class Meta:
        managed = True
        verbose_name = 'лесовостановление'
        verbose_name_plural = 'лесовостановление'


class LegalDocuments(models.Model):
    id = models.SmallIntegerField(primary_key=True)
    name = models.CharField(max_length=40, blank=True, null=True)

    def __str__(self):
        return self.name

    def __unicode__(self):
        return self.name

    class Meta:
        managed = True
        verbose_name = 'документ'
        verbose_name_plural = 'документы'



class Osnovanie(models.Model):
    id = models.SmallIntegerField(primary_key=True)
    name = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.name

    def __unicode__(self):
        return self.name

    class Meta:
        managed = True
        verbose_name = 'основание'
        verbose_name_plural = 'основание'


class SubjectRf(models.Model):
    id = models.SmallIntegerField(primary_key=True)
    name = models.CharField(max_length=70)
    kod_okato = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.name

    def __unicode__(self):
        return self.name

    class Meta:
        managed = True
        verbose_name = 'субъект РФ'
        verbose_name_plural = 'субъекты РФ'


class TypeFelling(models.Model): #Таблица-справочник по видам рубки
    id = models.SmallIntegerField(primary_key=True)
    name = models.CharField(max_length=300, blank=True, null=True)

    def __str__(self):
        return self.name

    def __unicode__(self):
        return self.name

    class Meta:
        managed = True
        verbose_name = 'форма рубки'
        verbose_name_plural = 'формы рубки'

class ShapeFelling(models.Model): #Таблица-справочник по формам рубки
    id = models.SmallIntegerField(primary_key=True)
    name = models.CharField(max_length=300, blank=True, null=True)

    def __str__(self):
        return self.name

    def __unicode__(self):
        return self.name

    class Meta:
        managed = True
        verbose_name = 'вид рубки'
        verbose_name_plural = 'виды рубки'


class TypesForestry(models.Model): #Таблица-справочник по типам хозяйства
    id = models.SmallIntegerField(primary_key=True)
    name = models.CharField(max_length=30, blank=True, null=True)

    def __str__(self):
        return self.name

    def __unicode__(self):
        return self.name

    class Meta:
        managed = True
        verbose_name = 'тип хозяйства'
        verbose_name_plural = 'типы хозяйства'


class Viddoc(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.name

    def __unicode__(self):
        return self.name

    class Meta:
        managed = True
        verbose_name = 'вид раз. документации'
        verbose_name_plural = 'виды раз. документации'

class Pravform(models.Model):

    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.name

    def __unicode__(self):
        return self.name

    class Meta:
        managed = True
        verbose_name = 'правовая форма'
        verbose_name_plural = 'правовые формы'

class IdentDoc(models.Model):

    id = models.IntegerField(primary_key=True)
    name = models.CharField('документ, удостоверяющий личность',max_length=100, blank=True, null=True)

    def __str__(self):
        return self.name

    def __unicode__(self):
        return self.name

    class Meta:
        managed = True
        verbose_name = 'документ удоств. личности'
        verbose_name_plural = 'виды документов удос. личн.'



class UnitMeas(models.Model):

    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.name

    def __unicode__(self):
        return self.name

    class Meta:
        managed = True
        verbose_name = 'единицы измерения'
        verbose_name_plural = 'единицы измерения'