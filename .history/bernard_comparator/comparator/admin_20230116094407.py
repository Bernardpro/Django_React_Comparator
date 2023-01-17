from django.contrib import admin

from .models import Comparator
# Register your models here.


class ComparatorAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'style',
                    'url', 'url_image', 'price', 'website']


admin.site.register(Comparator, ComparatorAdmin)
