# Generated by Django 2.0.7 on 2019-03-04 11:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cutarea', '0007_auto_20190226_1140'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fca',
            name='cat_zas',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.DO_NOTHING, to='classification_list.ForestProtection', verbose_name='категория лесозащиты'),
        ),
        migrations.AlterField(
            model_name='fca',
            name='cel_nazn',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.DO_NOTHING, to='classification_list.ForestPurpose', verbose_name='целевое назначение'),
        ),
    ]
