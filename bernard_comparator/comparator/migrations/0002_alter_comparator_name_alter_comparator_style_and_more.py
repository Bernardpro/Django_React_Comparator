# Generated by Django 4.1.5 on 2023-01-16 10:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comparator', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comparator',
            name='name',
            field=models.CharField(blank=True, max_length=500),
        ),
        migrations.AlterField(
            model_name='comparator',
            name='style',
            field=models.CharField(blank=True, max_length=500),
        ),
        migrations.AlterField(
            model_name='comparator',
            name='url',
            field=models.URLField(blank=True),
        ),
        migrations.AlterField(
            model_name='comparator',
            name='url_image',
            field=models.URLField(blank=True),
        ),
    ]
