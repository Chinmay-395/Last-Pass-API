from django.db import models
from profiles_api.models import UserProfile
# Create your models here.


class PasswordConverter(models.Model):
    ogUser = models.ForeignKey(
        UserProfile, on_delete=models.CASCADE, related_name='ogUser')
    individualPassword = models.TextField()

    def __str__(self):
        return self.individualPassword
