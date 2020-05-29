from django.db import models
from profiles_api.models import UserProfile
from django.conf import settings
# Create your models here.


class LastPassUserData(models.Model):
    ogUser = models.ForeignKey(settings.AUTH_USER_MODEL,
                               on_delete=models.CASCADE)
    """ 'ogUser' is the user who has registered """
    name_of_website = models.CharField(max_length=225, null=True, blank=True)
    url_of_website = models.URLField(max_length=255, null=True, blank=True)
    username_for_website = models.CharField(max_length=225, null=True)
    password_for_website = models.CharField(max_length=225, null=True)
    notes = models.TextField(blank=True)

    def __str__(self):
        return f'{self.ogUser} -- "has created password for" --> {self.name_of_website}'
