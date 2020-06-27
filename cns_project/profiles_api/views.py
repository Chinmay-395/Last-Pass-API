from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import (status, viewsets)
from rest_framework.authentication import TokenAuthentication
from rest_framework import filters
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.settings import api_settings
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated

# from Created app
from profiles_api import serializers, models, permissions
# Create your views here.


#------ The important once are below ------#


class UserProfileViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.UserProfileSerializer
    queryset = models.UserProfile.objects.all()
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.UpdateOwnProfile,)
    filter_backends = (filters.SearchFilter,)
    search_fields = ('name', 'email',)
    # renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES


class UserLoginApiView(ObtainAuthToken):
    """ handle creating user authentication tokens """
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES


class UserProfileFeedViewSet(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication,)
    serializer_class = serializers.ProfileFeedItemSerializer
    queryset = models.ProfileFeedItem.objects.all()
    permission_classes = (
        permissions.UpdateOwnStatus,
        IsAuthenticated
    )

    def perform_create(self, serializer):
        serializer.save(user_profile=self.request.user)


class UserDetailViewSet(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication,)
    serializer_class = serializers.UserDetailSerializer

    def get_queryset(self):
        print("userId ", self.request.user.id)
        print("userName ", self.request.user)
        # print("userEmail ", self.request.user.email)
        queryset = models.UserProfile.objects.filter(
            name=self.request.user)
        return queryset
