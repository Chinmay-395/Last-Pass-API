from django.contrib import admin
from .models import LastPassUserData
# Register your models here.


class LastPassUserDataAdmin(admin.ModelAdmin):
    list_display = ("ogUser", "name_of_website", "password_for_website")

    class Meta:
        model = LastPassUserData


admin.site.register(LastPassUserData, LastPassUserDataAdmin)
