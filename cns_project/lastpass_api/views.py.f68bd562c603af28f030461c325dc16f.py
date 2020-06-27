from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import (status, viewsets, generics)
from rest_framework.authentication import TokenAuthentication
from rest_framework import filters
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.settings import api_settings
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated

# from lastpass_api
from lastpass_api import serializers, models
from lastpass_api.permissions import UpdateLastPass
# from profiles_api
from profiles_api import permissions
from profiles_api.models import UserProfile


""" THE FOLLOWING CODE IS FOR LASTPASS CLONE 
    WITH AUTHENTICATIONS WHICH WILL BE FINALLY USED 
"""


class LastPassViewSet(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication,)
    serializer_class = serializers.LastPassSerializer
    #queryset = models.LastPassUserData.objects.filter(id=request.user.id)
    permission_classes = (
        UpdateLastPass,
        IsAuthenticated,
    )
    search_fields = ['ogUser', ]

    def get_queryset(self):
        print(self.request.user.id)
        print(self.request.user)
        queryset = models.LastPassUserData.objects.filter(
            ogUser=self.request.user.id)
        return queryset

    def perform_create(self, serializer):
        """ when all the parameters are set in
            the serializer this function 
            attaches our profile_api model with 
            the LastPassApiModel by taking in
            kwarg ogUser which holds the <request.user>
            object and thereby goes starts with 
            checking authentication <permission_classes>         
        """
        serializer.save(ogUser=self.request.user)


