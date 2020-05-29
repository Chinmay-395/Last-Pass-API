from django.db import models
from profiles_api.models import UserProfile
# Create your models here.


class PasswordConverter(models.Model):
    CATEGORY = (
        ('AES Cryptography', 'AES Cryptography'),
        #('RSA Cipher', 'RSA Cipher'),
        ('Hill Cipher', 'Hill Cipher'),
        ('Rail Fence', 'Rail fence'),
        ('caesar Cipher', 'Ceasar Cipher'),
        ('Column Transpose Cipher', 'Column Transpose Cipher'),
    )
    ogUser = models.ForeignKey(
        UserProfile, on_delete=models.CASCADE, related_name='ogUser')
    individualPassword = models.CharField(max_length=225, null=True)
    plainText = models.CharField(max_length=225, null=True)
    category = models.CharField(max_length=200, null=True, choices=CATEGORY)

    def __str__(self):
        return f'{self.ogUser} -- "has created" --> {self.individualPassword}'
