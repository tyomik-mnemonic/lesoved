from django.db import models
from renter.models import *
from classification_list.models import*

class ForestryKeys(models.Model):

    id = models.IntegerField(primary_key=True)
    df_forestry = models.TextField(blank=True, null=True)

    class Meta:
        managed = True
        verbose_name = 'лесничество'
        verbose_name_plural =  'лесничества'

class DistrForestKeys(models.Model):

    id = models.IntegerField(primary_key=True)
    df_names = models.TextField(blank=True, null=True)

    class Meta:
        managed = True
        verbose_name = 'УЛВ'
        verbose_name_plural =  'УЛВы'


class TractKeys(models.Model):

    id = models.IntegerField(primary_key=True)
    tract_name = models.TextField(blank=True, null=True)
    forestry = models.ForeignKey(ForestryKeys, models.DO_NOTHING, blank=True, null=True)
    district_forestry = models.ForeignKey(DistrForestKeys, models.DO_NOTHING, blank=True, null=True)


    class Meta:
        managed = True
        verbose_name = 'урочище'
        verbose_name_plural =  'урочища'


class QartalKeys(models.Model):

    id = models.IntegerField(primary_key=True)
    forestry_id = models.ForeignKey(ForestryKeys, models.DO_NOTHING, blank=True, null=True)
    district_forestry_id = models.ForeignKey(DistrForestKeys, models.DO_NOTHING, blank=True, null=True)
    tract_id =  models.ForeignKey(TractKeys, models.DO_NOTHING, blank=True, null=True)


    class Meta:
        managed = True
        verbose_name = 'квартал'
        verbose_name_plural =  'кварталы'




class Allotment(models.Model):  #выдел
    id = models.BigIntegerField(primary_key=True)
    geom = models.TextField(blank=True, null=True)  # This field type is a guess.
    forestry_id = models.ForeignKey(ForestryKeys, models.DO_NOTHING, blank=True, null=True)
    district_forestry_id = models.ForeignKey(DistrForestKeys, models.DO_NOTHING, blank=True, null=True)
    tract_id =  models.ForeignKey(TractKeys, models.DO_NOTHING, blank=True, null=True)
    num_kvr = models.ForeignKey(QartalKeys, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = True
        verbose_name = 'выдел'
        verbose_name_plural =  'список выделов'


class Fca(models.Model):  #составная лесосека
    id = models.BigAutoField(primary_key=True)
    subject = models.ForeignKey(SubjectRf, models.DO_NOTHING, blank=True, null=True)
    renter_name = models.ForeignKey(Renters, models.DO_NOTHING, blank=True, null=True)
#    num_doc = models.CharField(max_length=50, blank=True, null=True)
    num_of_agree = models.ForeignKey(Agreement, models.DO_NOTHING, blank=True, null=True)
#    forestry = models.ForeignKey(ForestryKeys, models.DO_NOTHING, blank=True, null=True)
#   district_forestry = models.ForeignKey(DistrForestKeys, models.DO_NOTHING, blank=True, null=True)
#   uroch = models.ForeignKey(TractKeys, models.DO_NOTHING, blank=True, null=True)
#  num_kv = models.TextField(blank=True, null=True)
    num_allot = models.ForeignKey(Allotment, models.DO_NOTHING, blank=True, null=True)
#   num_fca = models.CharField(max_length=50, blank=True, null=True)
    ar_fca = models.DecimalField(max_digits=8, decimal_places=2, blank=True, null=True)
    fell_form = models.TextField(blank=True, null=True)  # This field type is a guess.
    fell_type = models.IntegerField(blank=True, null=True)
    main_type = models.IntegerField(blank=True, null=True)
    sortiment = models.ForeignKey(ForestSort, on_delete=models.DO_NOTHING, verbose_name='cортиментный состав')
    vol_zag = models.FloatField(blank=True, null=True)
    biz_type = models.CharField(max_length=50, blank=True, null=True)
    expl_ar = models.FloatField(blank=True, null=True)
    cel_nazn = models.IntegerField(blank=True, null=True)
    cat_zas = models.IntegerField(blank=True, null=True)
    geom = models.TextField(blank=True, null=True)  # This field type is a guess.
    video_cat = models.TextField(blank=True, null=True)

    class Meta:
        managed = True
        verbose_name = 'лесосека'
        verbose_name_plural =  'лесосеки'



class FcaUse(models.Model): #планируемое использование
    id_fca = models.ForeignKey(Fca, on_delete=models.DO_NOTHING)
    fell_form = models.ForeignKey(ShapeFelling, on_delete=models.DO_NOTHING, verbose_name='форма рубки')
    fell_type = models.ForeignKey(TypeFelling, on_delete=models.DO_NOTHING, verbose_name='вид рубки')
    main_type = models.ForeignKey(TypesForestry, on_delete=models.DO_NOTHING, verbose_name='тип хозяйства')
    kind = models.ForeignKey(ForestKind, on_delete=models.DO_NOTHING, verbose_name='породный состав')
    ed_izm = models.ForeignKey(UnitMeas, on_delete=models.DO_NOTHING, verbose_name='единица измерения')
    vol_drew = models.FloatField(blank=True, null=True)
    fca_res = models.SmallIntegerField(blank=True, null=True)
    vol_res = models.FloatField(blank=True, null=True)

class Meta:
        verbose_name = 'планируемое использование'
        verbose_name_plural = 'планируемое использование'
        managed = True



class FcaPhoto(models.Model):
    id = models.BigIntegerField(primary_key=True)
    id_fca = models.ForeignKey(Fca, models.DO_NOTHING, blank=True, null=True)
    point_no = models.IntegerField(blank=True, null=True)
    coords = models.CharField(max_length=50, blank=True, null=True)
    photo_no = models.IntegerField(blank=True, null=True)
    ext = models.CharField(max_length=10, blank=True, null=True)
    ref = models.TextField(blank=True, null=True)
    image = models.BinaryField(blank=True, null=True)

    class Meta:
        verbose_name = 'фото'
        verbose_name_plural = 'фотографии'
        managed = True


class FcaWorks(models.Model):
    id = models.BigIntegerField(primary_key=True)
    id_fca = models.ForeignKey(Fca, models.DO_NOTHING, blank=True, null=True)
    wkod = models.SmallIntegerField(blank=True, null=True)
    #main_type = models.SmallIntegerField(blank=True, null=True)
    #fell_form = models.ForeignKey(ShapeFelling, on_delete=models.DO_NOTHING, verbose_name='форма рубки')
    #fell_type = models.ForeignKey(TypeFelling, on_delete=models.DO_NOTHING, verbose_name='вид рубки')
    #kind = models.ForeignKey(ForestKind, on_delete=models.DO_NOTHING, verbose_name='вид рубки')
    sortiment = models.ForeignKey(ForestSort, on_delete=models.DO_NOTHING, verbose_name='cортиментный состав')
    vol_drew = models.FloatField(blank=True, null=True)
    use_type = models.ForeignKey(ForestUse, on_delete=models.DO_NOTHING, verbose_name='вид рубки')
    fca_res = models.SmallIntegerField(blank=True, null=True)
    ed_izm = models.ForeignKey(UnitMeas, on_delete=models.DO_NOTHING, verbose_name='единица измерения')
    vol_les = models.FloatField(blank=True, null=True)
    act_name = models.SmallIntegerField(blank=True, null=True)
    obj_type = models.SmallIntegerField(blank=True, null=True)
    use_area = models.FloatField(blank=True, null=True)
    indicator = models.SmallIntegerField(blank=True, null=True)
    comment = models.TextField(blank=True, null=True)
    date_report = models.DateField(blank=True, null=True)
    #activity_use= models.ForeignKey(ForestActivity, on_delete=models.DO_NOTHING, verbose_name='мероприятия по использованию лесов')

    class Meta:
        verbose_name = 'фактические работы'
        managed = True


class ForestSite(models.Model): #Таблица содержит данные о правоустанавливающих документах на лесной участок
    id = models.AutoField(primary_key=True)
    vid_doc = models.ForeignKey(Viddoc, models.DO_NOTHING, blank=True, null=True)
    num_doc = models.CharField(max_length=80, blank=True, null=True)
    date_doc = models.DateField(blank=True, null=True)
    id_rr = models.IntegerField(blank=True, null=True)
    name_gov = models.CharField(max_length=80, blank=True, null=True)
    num_grd = models.CharField(max_length=80, blank=True, null=True)
    date_grd = models.DateField(blank=True, null=True)
    kud_number = models.CharField(max_length=30, blank=True, null=True)
    num_glr = models.CharField(max_length=30, blank=True, null=True)
    osn_pred_uch = models.ForeignKey(Osnovanie, models.DO_NOTHING, blank=True, null=True)
    date_start = models.DateField(blank=True, null=True)
    date_stop = models.DateField(blank=True, null=True)
    num_akt = models.CharField(max_length=15, blank=True, null=True)
    date_akt = models.DateField(blank=True, null=True)
    projects = models.IntegerField(blank=True, null=True)
    num_kv = models.CharField(max_length=10, blank=True, null=True)
    district_forestry = models.CharField(max_length=50, blank=True, null=True)
    forestry = models.CharField(max_length=80, blank=True, null=True)
    radio = models.SmallIntegerField(blank=True, null=True)

    class Meta:
        managed = True
        verbose_name = 'договоры 2' #??? уточнить необходимость



'''
class FcaOld(models.Model):   #-//-старая версия
    id = models.BigIntegerField(primary_key=True)
    num_fca = models.CharField(max_length=50, blank=True, null=True)
    num_doc = models.CharField(max_length=50, blank=True, null=True)
    uroch = models.CharField(max_length=50, blank=True, null=True)
    main_type = models.IntegerField(blank=True, null=True)
    fell_form = models.TextField(blank=True, null=True)  # This field type is a guess.
    fell_type = models.IntegerField(blank=True, null=True)
    geom = models.TextField(blank=True, null=True)  # This field type is a guess.
    fid = models.BigIntegerField(blank=True, null=True)
    org_name = models.CharField(max_length=50, blank=True, null=True)
    forestry = models.CharField(max_length=80, blank=True, null=True)
    district_forestry = models.CharField(max_length=50, blank=True, null=True)
    num_kv = models.TextField(blank=True, null=True)
    num_allot = models.TextField(blank=True, null=True)
    biz_type = models.CharField(max_length=20, blank=True, null=True)
    ar_fca = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    cel_nazn = models.IntegerField(blank=True, null=True)
    cat_zas = models.IntegerField(blank=True, null=True)
    expl_ar = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'fca_old'
'''
