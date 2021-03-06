# Generated by Django 4.0.4 on 2022-05-10 22:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cc', '0002_device'),
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='Not Specified', max_length=100)),
                ('field', models.CharField(default='Not specified', max_length=100)),
                ('logo', models.CharField(max_length=200, null=True)),
            ],
        ),
        migrations.AddField(
            model_name='device',
            name='company',
            field=models.CharField(default='None', max_length=100),
        ),
        migrations.AddField(
            model_name='device',
            name='description',
            field=models.CharField(default='None', max_length=200),
        ),
        migrations.AddField(
            model_name='device',
            name='features',
            field=models.CharField(default='None', max_length=200),
        ),
        migrations.AddField(
            model_name='device',
            name='label',
            field=models.CharField(default='None', max_length=100),
        ),
        migrations.AddField(
            model_name='device',
            name='location',
            field=models.CharField(default='None', max_length=100),
        ),
        migrations.AddField(
            model_name='device',
            name='name',
            field=models.CharField(default='None', max_length=100),
        ),
    ]
