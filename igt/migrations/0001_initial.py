# Generated by Django 2.0.7 on 2019-02-12 13:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Forestation',
            fields=[
                ('id', models.SmallIntegerField(primary_key=True, serialize=False)),
                ('indicator', models.TextField(blank=True, null=True)),
                ('code', models.CharField(blank=True, max_length=3, null=True)),
            ],
            options={
                'managed': True,
                'db_table': ('igt_forestation',),
            },
        ),
        migrations.CreateModel(
            name='ImageTest',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('descr', models.CharField(blank=True, max_length=80, null=True)),
                ('image', models.BinaryField(blank=True, null=True)),
            ],
            options={
                'managed': True,
                'db_table': ('igt_imagetest',),
            },
        ),
        migrations.CreateModel(
            name='PwdTest',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('acc_name', models.CharField(blank=True, max_length=20, null=True)),
                ('pwd_hash', models.CharField(blank=True, max_length=128, null=True)),
            ],
            options={
                'managed': True,
                'db_table': ('igt_pwdtest',),
            },
        ),
        migrations.CreateModel(
            name='SubjectRf',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=10)),
                ('kod_okato', models.IntegerField(blank=True, null=True)),
            ],
            options={
                'managed': True,
                'db_table': ('igt_subjectrf',),
            },
        ),
        migrations.CreateModel(
            name='VlTest',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('code', models.IntegerField(blank=True, null=True)),
                ('name', models.CharField(blank=True, max_length=80, null=True)),
                ('geom', models.TextField(blank=True, null=True)),
            ],
            options={
                'managed': True,
                'db_table': ('igt_vltest',),
            },
        ),
    ]