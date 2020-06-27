from django.urls import path, include
from rest_framework.routers import DefaultRouter
from profiles_api.views import (
    UserProfileViewSet, UserLoginApiView, UserProfileFeedViewSet,
    UserDetailViewSet)

router = DefaultRouter()
router.register('profile', UserProfileViewSet)
router.register('feed', UserProfileFeedViewSet)
router.register('udetail', UserDetailViewSet, basename='user-detail')

urlpatterns = [
    path('login/', UserLoginApiView.as_view()),
    path('', include(router.urls))
]
