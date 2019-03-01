# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.contrib.gis.db import models


class Addresses(models.Model): #адрес арендатора
    id_renter = models.IntegerField(primary_key=True)
    subject = models.IntegerField()
    city = models.CharField(max_length=50, blank=True, null=True)
    street = models.CharField(max_length=50, blank=True, null=True)
    house = models.CharField(max_length=4, blank=True, null=True)
    housing = models.CharField(max_length=3, blank=True, null=True)
    building = models.CharField(max_length=2, blank=True, null=True)
    office = models.CharField(max_length=3, blank=True, null=True)
    telephon = models.CharField(max_length=16, blank=True, null=True)
    type = models.TextField(blank=True, null=True)  # This field type is a guess.

    class Meta:
        managed = False
        db_table = 'addresses'


class Allotment(models.Model):  #попродный с-в
    id = models.BigIntegerField(primary_key=True)
    geom = models.TextField(blank=True, null=True)  # This field type is a guess.
    num_kvr = models.CharField(max_length=4, blank=True, null=True)
    num_vyd = models.CharField(max_length=3, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'allotment'


class DistrictForestry(models.Model):  #составное лесничеств (forestry_forestry district)
    id = models.BigAutoField(primary_key=True)
    code_df = models.IntegerField(blank=True, null=True)
    name_df = models.CharField(max_length=80, blank=True, null=True)
    code_f = models.IntegerField(blank=True, null=True)
    name_f = models.CharField(max_length=80, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'district_forestry'


class FcPoints(models.Model):
    num_fc = models.ForeignKey('ForestCutting', models.DO_NOTHING, db_column='num_fc')
    description = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'fc_points'
        unique_together = (('id', 'num_fc'),)


class Fca(models.Model):  #составная лесосека
    id = models.BigAutoField(primary_key=True)
    fid = models.BigIntegerField(blank=True, null=True)
    subject = models.IntegerField(blank=True, null=True)
    org_name = models.CharField(max_length=80, blank=True, null=True)
    num_doc = models.CharField(max_length=50, blank=True, null=True)
    forestry = models.CharField(max_length=80, blank=True, null=True)
    district_forestry = models.CharField(max_length=80, blank=True, null=True)
    uroch = models.CharField(max_length=80, blank=True, null=True)
    num_kv = models.TextField(blank=True, null=True)
    num_allot = models.TextField(blank=True, null=True)
    num_fca = models.CharField(max_length=50, blank=True, null=True)
    ar_fca = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    fell_form = models.TextField(blank=True, null=True)  # This field type is a guess.
    fell_type = models.IntegerField(blank=True, null=True)
    main_type = models.IntegerField(blank=True, null=True)
    sortiment = models.IntegerField(blank=True, null=True)
    vol_zag = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    biz_type = models.CharField(max_length=50, blank=True, null=True)
    expl_ar = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    cel_nazn = models.IntegerField(blank=True, null=True)
    cat_zas = models.IntegerField(blank=True, null=True)
    geom = models.TextField(blank=True, null=True)  # This field type is a guess.
    video_cat = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'fca'


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


class FcaPhoto(models.Model):
    id_fca = models.ForeignKey(Fca, models.DO_NOTHING, db_column='id_fca', blank=True, null=True)
    point_no = models.IntegerField(blank=True, null=True)
    coords = models.CharField(max_length=50, blank=True, null=True)
    photo_no = models.IntegerField(blank=True, null=True)
    ext = models.CharField(max_length=10, blank=True, null=True)
    ref = models.TextField(blank=True, null=True)
    image = models.BinaryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'fca_photo'


class FcaUse(models.Model):
    id_fca = models.ForeignKey(Fca, models.DO_NOTHING, db_column='id_fca', blank=True, null=True)
    fell_form = models.TextField(blank=True, null=True)  # This field type is a guess.
    fell_type = models.SmallIntegerField(blank=True, null=True)
    main_type = models.SmallIntegerField(blank=True, null=True)
    kind = models.SmallIntegerField(blank=True, null=True)
    ed_izm = models.TextField(blank=True, null=True)  # This field type is a guess.
    vol_drew = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    fca_res = models.SmallIntegerField(blank=True, null=True)
    vol_res = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'fca_use'


class FcaWorks(models.Model):
    id_fca = models.ForeignKey(Fca, models.DO_NOTHING, db_column='id_fca', blank=True, null=True)
    wkod = models.SmallIntegerField(blank=True, null=True)
    main_type = models.SmallIntegerField(blank=True, null=True)
    fell_form = models.TextField(blank=True, null=True)  # This field type is a guess.
    fell_type = models.SmallIntegerField(blank=True, null=True)
    kind = models.SmallIntegerField(blank=True, null=True)
    sortiment = models.SmallIntegerField(blank=True, null=True)
    vol_drew = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    use_type = models.SmallIntegerField(blank=True, null=True)
    fca_res = models.SmallIntegerField(blank=True, null=True)
    ed_izm = models.TextField(blank=True, null=True)  # This field type is a guess.
    vol_les = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    act_name = models.SmallIntegerField(blank=True, null=True)
    obj_type = models.SmallIntegerField(blank=True, null=True)
    use_area = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    indicator = models.SmallIntegerField(blank=True, null=True)
    comment = models.TextField(blank=True, null=True)
    date_report = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'fca_works'


class ForestActivity(models.Model):
    id = models.SmallIntegerField(primary_key=True)
    activity = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'forest_activity'


class ForestCutting(models.Model):
    id = models.BigAutoField(primary_key=True)
    geom = models.TextField(blank=True, null=True)  # This field type is a guess.
    num_fca = models.CharField(max_length=10, blank=True, null=True)
    type_resou = models.BigIntegerField(blank=True, null=True)
    ed_izm = models.CharField(max_length=254, blank=True, null=True)
    seizure_vo = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'forest_cutting'


class ForestDeclaration(models.Model):
    num_decl = models.CharField(max_length=3, blank=True, null=True)
    date_decl = models.DateField(blank=True, null=True)
    use_forest = models.IntegerField(blank=True, null=True)
    govsub = models.CharField(max_length=150, blank=True, null=True)
    name_doc = models.CharField(max_length=30, blank=True, null=True)
    num_doc = models.CharField(max_length=10, blank=True, null=True)
    date_doc = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'forest_declaration'


class ForestKind(models.Model):
    name = models.CharField(max_length=15, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'forest_kind'


class ForestObjtype(models.Model):
    id = models.SmallIntegerField(primary_key=True)
    obj_type = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'forest_objtype'


class ForestProperties(models.Model):
    id = models.IntegerField(primary_key=True)
    type = models.ForeignKey('TypesForestry', models.DO_NOTHING, db_column='type', blank=True, null=True)
    uroch = models.CharField(max_length=20, blank=True, null=True)
    area_felling = models.FloatField(blank=True, null=True)
    type_felling = models.ForeignKey('TypeFelling', models.DO_NOTHING, db_column='type_felling', blank=True, null=True)
    kind = models.ForeignKey(ForestKind, models.DO_NOTHING, db_column='kind', blank=True, null=True)
    sort = models.IntegerField(blank=True, null=True)
    vol_forest = models.FloatField(blank=True, null=True)
    vol_biz = models.FloatField(blank=True, null=True)
    vol_plan = models.FloatField(blank=True, null=True)
    date_report = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'forest_properties'


class ForestProtection(models.Model):
    id = models.SmallIntegerField(primary_key=True)
    protect_cat = models.TextField(blank=True, null=True)
    code = models.CharField(max_length=5, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'forest_protection'


class ForestPurpose(models.Model):
    id = models.SmallIntegerField(primary_key=True)
    purpose = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'forest_purpose'


class ForestResource(models.Model):
    type = models.CharField(max_length=110, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'forest_resource'


class ForestSite(models.Model):
    id = models.AutoField(primary_key=True)
    vid_doc = models.ForeignKey('Viddoc', models.DO_NOTHING, db_column='vid_doc', blank=True, null=True)
    num_doc = models.CharField(max_length=80, blank=True, null=True)
    date_doc = models.DateField(blank=True, null=True)
    id_renter = models.IntegerField(blank=True, null=True)
    name_gov = models.CharField(max_length=80, blank=True, null=True)
    num_grd = models.CharField(max_length=80, blank=True, null=True)
    date_grd = models.DateField(blank=True, null=True)
    kud_number = models.CharField(max_length=30, blank=True, null=True)
    num_glr = models.CharField(max_length=30, blank=True, null=True)
    osn_pred_uch = models.ForeignKey('Osnovanie', models.DO_NOTHING, db_column='osn_pred_uch', blank=True, null=True)
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
        managed = False
        db_table = 'forest_site'


class ForestSort(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'forest_sort'


class ForestUse(models.Model):
    id = models.SmallIntegerField(primary_key=True)
    name = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'forest_use'


class ForestWorks(models.Model):
    id = models.SmallIntegerField(primary_key=True)
    name = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'forest_works'


class Forestation(models.Model):
    id = models.SmallIntegerField(primary_key=True)
    indicator = models.TextField(blank=True, null=True)
    code = models.CharField(max_length=3, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'forestation'


class ImageTest(models.Model):
    descr = models.CharField(max_length=80, blank=True, null=True)
    image = models.BinaryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'image_test'


class IndEntrep(models.Model):
    id = models.AutoField(primary_key=True)
    org_prav_form = models.TextField()  # This field type is a guess.
    inn = models.CharField(max_length=12)
    account_name = models.CharField(max_length=20)
    acc_pwd = models.CharField(max_length=128, blank=True, null=True)
    second_name = models.CharField(max_length=40)
    first_name = models.CharField(max_length=40)
    patronymic = models.CharField(max_length=40)
    identity_doc = models.CharField(max_length=40)
    serial_doc = models.CharField(max_length=8)
    number_doc = models.CharField(max_length=8)
    ogrnip = models.CharField(max_length=15, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'ind_entrep'


class LegalDocuments(models.Model):
    name = models.CharField(max_length=40, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'legal_documents'


class Objects(models.Model):
    obj_name = models.CharField(max_length=80, blank=True, null=True)
    obj_num = models.IntegerField(blank=True, null=True)
    obj_infr = models.CharField(max_length=80, blank=True, null=True)
    obj_area = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'objects'


class Organizations(models.Model):
    id = models.AutoField(primary_key=True)
    org_prav_form = models.TextField()  # This field type is a guess.
    inn = models.CharField(max_length=12)
    account_name = models.CharField(max_length=20)
    acc_pwd = models.CharField(max_length=128, blank=True, null=True)
    name = models.CharField(max_length=50, blank=True, null=True)
    snameplp = models.CharField(max_length=80, blank=True, null=True)
    fnameplp = models.CharField(max_length=80, blank=True, null=True)
    patronymicplp = models.CharField(max_length=80, blank=True, null=True)
    position = models.CharField(max_length=80, blank=True, null=True)
    leg_docum = models.ForeignKey(LegalDocuments, models.DO_NOTHING, db_column='leg_docum', blank=True, null=True)
    ogrn = models.CharField(max_length=13, blank=True, null=True)
    identity_doc = models.CharField(max_length=40, blank=True, null=True)
    serial_doc = models.CharField(max_length=8, blank=True, null=True)
    number_doc = models.CharField(max_length=8, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'organizations'


class Osnovanie(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'osnovanie'


class Persons(models.Model):
    id = models.AutoField(primary_key=True)
    org_prav_form = models.TextField()  # This field type is a guess.
    inn = models.CharField(max_length=12)
    account_name = models.CharField(max_length=20)
    acc_pwd = models.CharField(max_length=128, blank=True, null=True)
    second_name = models.CharField(max_length=40)
    first_name = models.CharField(max_length=40)
    patronymic = models.CharField(max_length=40)
    identity_doc = models.CharField(max_length=40)
    serial_doc = models.CharField(max_length=8)
    number_doc = models.CharField(max_length=8)
    ogrnip = models.CharField(max_length=15, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'persons'


class Photo(models.Model):
    num_point = models.ForeignKey(FcPoints, models.DO_NOTHING, db_column='num_point')
    description = models.IntegerField(blank=True, null=True)
    photo = models.BinaryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'photo'


class Positions(models.Model):
    name = models.CharField(max_length=80, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'positions'


class Projects(models.Model):
    id = models.BigAutoField(primary_key=True)
    id_renter = models.BigIntegerField(blank=True, null=True)
    num_proj = models.CharField(max_length=80, blank=True, null=True)
    date_project = models.DateField(blank=True, null=True)
    date_zakl = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'projects'


class PwdTest(models.Model):
    acc_name = models.CharField(max_length=20, blank=True, null=True)
    pwd_hash = models.CharField(max_length=128, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'pwd_test'


class Quarters(models.Model):
    geom = models.TextField(blank=True, null=True)  # This field type is a guess.
    forest_code = models.CharField(max_length=10, blank=True, null=True)
    forest_name = models.CharField(max_length=20, blank=True, null=True)
    quarter = models.SmallIntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'quarters'


class QuartersTest(models.Model):
    id = models.SmallIntegerField(primary_key=True)
    id_df = models.SmallIntegerField()
    num_kv = models.SmallIntegerField(blank=True, null=True)
    descr = models.CharField(max_length=254, blank=True, null=True)
    kod = models.SmallIntegerField(blank=True, null=True)
    kod1 = models.SmallIntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'quarters_test'


class Renters(models.Model):
    org_prav_form = models.TextField()  # This field type is a guess.
    inn = models.CharField(max_length=12)
    account_name = models.CharField(unique=True, max_length=20)
    acc_pwd = models.CharField(max_length=128, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'renters'


class SubjectRf(models.Model):
    name = models.CharField(max_length=10)
    kod_okato = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'subject_rf'


class TypeFelling(models.Model):
    name = models.CharField(max_length=300, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'type_felling'


class TypesForestry(models.Model):
    name = models.CharField(max_length=30, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'types_forestry'


class Viddoc(models.Model):
    id = models.IntegerField(primary_key=True)
    type = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'viddoc'


class VlTest(models.Model):
    id = models.BigAutoField(primary_key=True)
    code = models.IntegerField(blank=True, null=True)
    name = models.CharField(max_length=80, blank=True, null=True)
    geom = models.TextField(blank=True, null=True)  # This field type is a guess.

    class Meta:
        managed = False
        db_table = 'vl_test'
