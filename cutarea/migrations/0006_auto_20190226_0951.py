# Generated by Django 2.0.7 on 2019-02-26 09:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cutarea', '0005_auto_20190226_0840'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fcaworks',
            name='act_name',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.DO_NOTHING, to='classification_list.ForestActivity', verbose_name='мероприятия'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='fcaworks',
            name='obj_type',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.DO_NOTHING, to='classification_list.ForestObjtype', verbose_name='объекты'),
            preserve_default=False,
        ),
    ]
