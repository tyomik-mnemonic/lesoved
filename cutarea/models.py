from renter.models import *
from classification_list.models import*
from django.contrib.gis.db import models


class ForestryKeys(models.Model):

    id = models.IntegerField(primary_key=True)
    name = models.TextField(blank=True, null=True), # перенести в админку
    geom = models.PolygonField(geography=True, null=True, blank=True, verbose_name='геометрия')

    class Meta:
        managed = True
        verbose_name = 'лесничество'
        verbose_name_plural =  'лесничества'

class DistrForestKeys(models.Model):

    id = models.IntegerField(primary_key=True)
    df_names = models.TextField(blank=True, null=True)
    geom = models.PolygonField(geography=True, null=True, blank=True, verbose_name='геометрия')
    forestry_id = models.ForeignKey(ForestryKeys, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = True
        verbose_name = 'УЛВ'
        verbose_name_plural =  'УЛВы'



class QartalKeys(models.Model):

    id = models.IntegerField(primary_key=True)
    district_forestry_id = models.ForeignKey(DistrForestKeys, models.DO_NOTHING, blank=True, null=True)
    geom = models.PolygonField(geography=True, null=True, blank=True, verbose_name='геометрия')


    class Meta:
        managed = True
        verbose_name = 'квартал'
        verbose_name_plural =  'кварталы'




class Allotment(models.Model):  #выдел
    id = models.BigIntegerField(primary_key=True)
    geom = models.PolygonField(geography=True, null=True, blank=True, verbose_name='геометрия')#хорошо бы оптимизировать УЛВ ключ
    num_kvr = models.ForeignKey(QartalKeys, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = True
        verbose_name = 'выдел'
        verbose_name_plural =  'список выделов'


class Fca(models.Model):  #составная лесосека
    id = models.BigAutoField(primary_key=True)
    subject = models.ForeignKey(SubjectRf, models.DO_NOTHING, blank=True, null=True)
#renter_name = models.ForeignKey(Renters, models.DO_NOTHING, blank=True, null=True) #хорошо бы оптимизировать: рентер через договор
    num_of_agree = models.ForeignKey(Agreement, models.DO_NOTHING, blank=True, null=True)
    uroch = models.TextField(blank=True, null=True)
    num_allot = models.ForeignKey(Allotment, models.DO_NOTHING, blank=True, null=True)
    num_fca = models.CharField(max_length=50, blank=True, null=True) #номер лесосеки "официальный"
    ar_fca = models.DecimalField(max_digits=8, decimal_places=2, blank=True, null=True)
#    vol_zag = models.FloatField(blank=True, null=True)
    expl_ar = models.FloatField(blank=True, null=True)
    cel_nazn = models.ForeignKey(ForestPurpose, on_delete=models.DO_NOTHING, verbose_name='целевое назначение',blank=True, null=True) #классификатор
    cat_zas = models.ForeignKey(ForestProtection, on_delete=models.DO_NOTHING, verbose_name='категория лесозащиты',blank=True, null=True ) #классификатор
    geom = models.TextField(blank=True, null=True)  # This field type is a guess.
    video_cat = models.TextField(blank=True, null=True)

    class Meta:
        managed = True
        verbose_name = 'лесосека'
        verbose_name_plural =  'лесосеки'



class FcaUse(models.Model): #планируемое использование
    id_fca = models.ForeignKey(Fca, on_delete=models.DO_NOTHING)
    fell_form = models.ForeignKey(ShapeFelling, on_delete=models.DO_NOTHING, verbose_name='вид рубки')
    fell_type = models.ForeignKey(TypeFelling, on_delete=models.DO_NOTHING, verbose_name='форма рубки')
    main_type = models.ForeignKey(TypesForestry, on_delete=models.DO_NOTHING, verbose_name='тип хозяйства') #возможна ли оптимизация?
    kind = models.ForeignKey(ForestKind, on_delete=models.DO_NOTHING, verbose_name='породный состав'),
    sortiment = models.ForeignKey(ForestSort, on_delete=models.DO_NOTHING, verbose_name='cортиментный состав')
    ed_izm = models.ForeignKey(UnitMeas, on_delete=models.DO_NOTHING, verbose_name='единица измерения')
    vol_drew = models.FloatField(blank=True, null=True) #древесные ресурсы
    fca_res = models.SmallIntegerField(blank=True, null=True)
    vol_res = models.FloatField(blank=True, null=True)#недревесные ресурсы

class Meta:
        verbose_name = 'планируемое использование'
        verbose_name_plural = 'планируемое использование'
        managed = True



class FcaPhoto(models.Model): #на потому, на перспективу
    id = models.BigIntegerField(primary_key=True)
    id_fca = models.ForeignKey(Fca, models.DO_NOTHING, blank=True, null=True)
    point_no = models.IntegerField(blank=True, null=True)
#   coords = models.CharField(max_length=50, blank=True, null=True)
    photo_no = models.IntegerField(blank=True, null=True)
    ext = models.CharField(max_length=10, blank=True, null=True)
    ref = models.TextField(blank=True, null=True)
    image = models.BinaryField(blank=True, null=True) #Поле с изображением

    class Meta:
        verbose_name = 'фото'
        verbose_name_plural = 'фотографии'
        managed = True


class FcaWorks(models.Model):
    id = models.BigIntegerField(primary_key=True)
    id_fca = models.ForeignKey(Fca, models.DO_NOTHING, blank=True, null=True)
    wkod =models.ForeignKey(ForestWorks, models.DO_NOTHING, blank=True, null=True, verbose_name='вид работ')
    main_type = models.SmallIntegerField(blank=True, null=True)
    fell_form = models.ForeignKey(ShapeFelling, on_delete=models.DO_NOTHING, verbose_name='форма рубки')
    fell_type = models.ForeignKey(TypeFelling, on_delete=models.DO_NOTHING, verbose_name='вид рубки')
    kind = models.ForeignKey(ForestKind, on_delete=models.DO_NOTHING, verbose_name='вид рубки')
    sortiment = models.ForeignKey(ForestSort, on_delete=models.DO_NOTHING, verbose_name='cортиментный состав')
    vol_drew = models.FloatField(blank=True, null=True)
    use_type = models.ForeignKey(ForestUse, on_delete=models.DO_NOTHING, verbose_name='вид рубки')
    fca_res = models.SmallIntegerField(blank=True, null=True)
    ed_izm = models.ForeignKey(UnitMeas, on_delete=models.DO_NOTHING, verbose_name='единица измерения')
    vol_les = models.FloatField(blank=True, null=True)
    act_name = models.ForeignKey(ForestActivity, on_delete=models.DO_NOTHING, verbose_name='мероприятия') #мероприятия добавить вн ключ
    obj_type = models.ForeignKey(ForestObjtype, on_delete=models.DO_NOTHING, verbose_name='объекты')
    use_area = models.FloatField(blank=True, null=True)
    indicator = models.ForeignKey(Forestation , on_delete=models.DO_NOTHING, verbose_name='лесовосстановление')
    comment = models.TextField(blank=True, null=True)
    date_report = models.DateField(blank=True, null=True)#дата проведенных работ

    class Meta:
        verbose_name = 'фактические работы'
        verbose_name_plural = 'фактические работы'
        managed = True


