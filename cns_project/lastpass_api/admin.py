from django.contrib import admin
from .models import LastPassUserData
# Register your models here.


class LastPassUserDataAdmin(admin.ModelAdmin):
    list_display = ['ogUser', 'name_of_website', 'url_of_website']
    search_fields = ['name_of_website']
    list_display_links = ['name_of_website']
    list_filter = ["ogUser"]

    class Meta:
        model = LastPassUserData


admin.site.register(LastPassUserData, LastPassUserDataAdmin)
