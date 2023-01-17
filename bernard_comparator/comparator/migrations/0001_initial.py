# Generated by Django 4.1.5 on 2023-01-16 08:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Comparator',
            fields=[
                ('id', models.CharField(max_length=100, primary_key=True, serialize=False)),
                ('name', models.CharField(blank=True, max_length=150)),
                ('style', models.CharField(blank=True, max_length=150)),
                ('url', models.URLField(blank=True, max_length=500)),
                ('url_image', models.URLField(blank=True, max_length=1000)),
                ('price', models.FloatField(blank=True, default=-1)),
                ('reduction_price', models.FloatField(blank=True, default=-1)),
                ('website', models.CharField(blank=True, max_length=100)),
            ],
        ),
    ]
