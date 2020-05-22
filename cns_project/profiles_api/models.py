from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser, PermissionsMixin, BaseUserManager)


class UserProfileManager(BaseUserManager):
    def create_user(self, email, name, password=None):
        """ Creates a new user profile """
        '''
        if you dont specifiy the password it will default to none;
        basically if you don't set a password you won't be able to;
        authenticate with the user.
        '''
        if not email:
            '''
               so if the email has been passed in as either an empty string
               or a null value then we will raise a value error exception
               so this is the standard behavior that 
            '''
            raise ValueError('User must have an email address')

        email = self.normalize_email(email)
        user = self.model(email=email, name=name)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, name, password):
        """ Create and save a new superuser with given detail """
        user = self.create_user(email, name, password)
        user.is_superuser = True
        '''
        user.is_superuser is automatically created by the PermissionsMixin
        '''
        user.is_staff = True
        user.save(using=self._db)
        return user


class UserProfile(AbstractBaseUser, PermissionsMixin):
    """ Database Model for users in the system """
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserProfileManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def get_full_name(self):
        """Retrieve full nam of the user"""
        return self.name

    def get_short_name(self):
        """retrieve short name of the user"""
        return self.name

    def __str__(self):
        return self.email
