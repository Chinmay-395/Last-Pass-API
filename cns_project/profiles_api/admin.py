from django.contrib import admin
from .models import UserProfile, ProfileFeedItem
# Register your models here.


class UserProfileAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "email", "is_staff",
                    "check_If_User_IsActive")
    search_fields = ("name",)
    list_display_links = ("name",)
    list_filter = ("is_staff", "is_active")

    def check_If_User_IsActive(self, obj):
        return obj.is_active

    class Meta:
        model = UserProfile


admin.site.register(UserProfile, UserProfileAdmin)
admin.site.register(ProfileFeedItem)
