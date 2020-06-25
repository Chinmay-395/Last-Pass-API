from django.urls import path, include
from rest_framework.routers import DefaultRouter
from profiles_api.views import (
    UserProfileViewSet, UserLoginApiView, UserProfileFeedViewSet)

router = DefaultRouter()
router.register('profile', UserProfileViewSet)
router.register('feed', UserProfileFeedViewSet)

urlpatterns = [
    path('login/', UserLoginApiView.as_view()),
    path('', include(router.urls))
]
