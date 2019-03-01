from django.db import models
from classification_list.models import*
# Create your models here. vid_doc = models.ForeignKey(Viddoc, models.DO_NOTHING, db_column='vid_doc', blank=True, null=True)



class Renters(models.Model):
    id = models.AutoField(primary_key=True)
    org_prav_form = models.ForeignKey(Pravform, models.DO_NOTHING, blank=True, null=True)
    inn = models.CharField('ИНН',max_length=100, blank=True, null=True)
    account_name = models.CharField(max_length=100, blank=True, null=True) #для регистрации
    acc_pwd = models.CharField(max_length=128, blank=True, null=True)#обдумать рег позже
    name = models.CharField('Наиминование организации',max_length=150, blank=True, null=True)
    snameplp = models.CharField(max_length=100, blank=True, null=True) #Ф
    fnameplp = models.CharField(max_length=100, blank=True, null=True) #и
    patronymicplp = models.CharField(max_length=100, blank=True, null=True) #O
    position = models.CharField('должность',max_length=50, blank=True, null=True)
    leg_docum = models.ForeignKey(LegalDocuments, models.DO_NOTHING, blank=True, null=True) #устав организации/
    ogrn = models.CharField(max_length=100, blank=True, null=True)
    identity_doc = models.ForeignKey(IdentDoc, models.DO_NOTHING, blank=True, null=True, help_text = 'документ удостоверяющий личность')
    serial_doc = models.CharField('серия документа',max_length=50, blank=True, null=True)
    number_doc = models.CharField('номер документа',max_length=50, blank=True, null=True)

    class Meta:
        managed = True
        verbose_name = 'арендатор'
        verbose_name_plural =  'арендаторы'

class Agreement(models.Model):
    id = models.AutoField(primary_key=True)
    renters_id = models.ForeignKey(Renters, on_delete=models.DO_NOTHING, verbose_name='рентер')
    date = models.DateField(verbose_name='дата утверждения')
    organ =  models.CharField(max_length=80, help_text ='наименование органа государственной власти, органа местного самоуправления')
    num = models.CharField(max_length=80, verbose_name='номер регистрации', help_text ='номер государственной регистрации документа')
    date_reg = models.DateField(verbose_name='дата регистрации', null=True)
    kadastre = models.CharField(max_length=30, verbose_name='кадастровый номер')
    glr = models.CharField(max_length=30, verbose_name='номер ГЛР', help_text ='номер учетной записи в государственном лесном реестре (ГЛР)')
    reas_doc = models.ForeignKey(Osnovanie, on_delete=models.DO_NOTHING, verbose_name='основание')
    use_start = models.DateField(verbose_name='начало использования')
    use_end = models.DateField(verbose_name='конец использования')
    act_num = models.CharField(max_length=15, verbose_name='номер акта', help_text ='номер акта приема-передачи лесного участка')
    act_date = models.DateField(verbose_name='дата акта', help_text ='дата акта приема-передачи лесного участка')
    project = models.BooleanField(verbose_name='Есть проект освоения?')
    project_date = models.DateField(verbose_name='срок действия проекта', help_text ='cрок действия проекта освоения лесов')
    project_author = models.CharField(max_length=80, verbose_name='автор проекта', help_text ='разработчик проекта освоения лесов')
    positive_date = models.DateField(verbose_name='дата позитивчика', help_text ='дата выдачи положительного заключения по итогам государственной экспертизы проекта освоения лесов')
    viddoc = models.ForeignKey (Viddoc, on_delete=models.DO_NOTHING, verbose_name='viddoc')

    class Meta:
        verbose_name = 'договор'
        verbose_name_plural = 'проекты'






class RentAddres(models.Model): #адрес арендатора
    id = models.IntegerField(primary_key=True)
    renters_id = models.ForeignKey(Renters, models.DO_NOTHING, verbose_name='рентер')
    subject = models.ForeignKey(SubjectRf, models.DO_NOTHING, blank=True, null=True)
    city = models.CharField(max_length=50, blank=True, null=True)
    street = models.CharField(max_length=50, blank=True, null=True)
    house = models.CharField(max_length=4, blank=True, null=True)
    housing = models.CharField(max_length=3, blank=True, null=True)
    building = models.CharField(max_length=2, blank=True, null=True)
    office = models.CharField(max_length=3, blank=True, null=True)
    telephon = models.CharField(max_length=16, blank=True, null=True)
    type = models.TextField(blank=True, null=True)  # This field type is a guess.

    #продублировать юрид адрес

    class Meta:
        managed = True
        verbose_name = 'адрес'
        verbose_name_plural = 'список адресов'

