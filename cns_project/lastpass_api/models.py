from django.db import models
from profiles_api.models import UserProfile
from django.conf import settings
from django.db.models.signals import pre_save

from .aes_method import EncryptFunc, DecryptFunc
# Create your models here.


class LastPassUserData(models.Model):
    ogUser = models.ForeignKey(settings.AUTH_USER_MODEL,
                               on_delete=models.CASCADE)
    """ 'ogUser' is the user who has registered """
    name_of_website = models.CharField(max_length=225, null=True, blank=True)
    url_of_website = models.URLField(max_length=255, null=True, blank=True)
    username_for_website = models.TextField(
        max_length=225, blank=True, null=True)
    password_for_website = models.TextField(blank=True, null=True)
    notes = models.TextField(blank=True)

    def __str__(self):
        return f'{self.ogUser} -- "has created password for" --> {self.name_of_website}'

    class Meta:
        ordering = ["-id"]


def pre_save_encypt_password_reciever(sender, instance, *args, **kwargs):
    print("The instance is --------", instance)
    print("The instance is --------", instance.password_for_website)
    print("The instance is --------", instance.username_for_website)
    # save the password in an encrypted format
    encrypted_password = EncryptFunc(instance.password_for_website)
    print("Encrypted password is \n", str(encrypted_password))
    instance.password_for_website = encrypted_password
    print("THE VALUE CHANGE \n", instance.password_for_website)
    decrypted_pass = DecryptFunc(encrypted_password)
    print("The decrypted value \n", str(decrypted_pass))


pre_save.connect(pre_save_encypt_password_reciever, sender=LastPassUserData)
