from django.shortcuts import render
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


class UserNameRetrieveViewSet(viewsets.ModelViewSet):
    authentication_classes = (TokenAuthentication,)
    serializer_class = serializers.UserDetailSerializer

    def get_queryset(self):
        queryset = UserProfile.objects.filter(
            email=self.request.user.email
        )
#____________The code is DRF way of FBV __________#


class LastPassApiView(APIView):

    serializer_class = serializers.LastPassSerializer
    permission_classes = (UpdateLastPass,
                          IsAuthenticated)

    def get(self, request, format=None):
        an_apiview = [
            'get method'
            'LastPass API views in DRF-->FBV',
            'I am using this since it gives me the most control over the applciation logic'
        ]
        return Response({'message': 'hello!', 'an_apiview': an_apiview})

    def post(self, request):
        print(request.user.id)
        serializer = self.serializer_class(data=request.data)
        print('User who is authenticated')
        print(request.user.name)

        if serializer.is_valid():
            # serializer.validated_data['ogUser'] = request.user.id
            serializer.save()
            name = serializer.validated_data.get('name_of_website')
            message = f"Data save for {name} website"
            return Response({'message': message})
        else:
            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST
            )

    def put(self, request, pk=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response({'method': 'put'})

    def patch(self, request, pk=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response({'method': 'PATCH'})

    def delete(self, request, pk=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response({'method': 'DELETE'})


class LastpassUsernameApiView(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (UpdateLastPass,
                          IsAuthenticated)

    def get(self, request, format=None):

        x = str(request.user)
        print("x is ", x)
        an_apiview = [
            'getting username',
            x
        ]

        return Response({'message': 'hello!', 'an_apiview': an_apiview})
