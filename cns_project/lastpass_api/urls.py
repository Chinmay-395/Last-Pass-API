from django.urls import path, include
from lastpass_api import views
from rest_framework.routers import DefaultRouter

router_lastpass = DefaultRouter()
router_lastpass.register(
    'feed_clone', views.LastPassViewSet, basename='lp_view_set')
urlpatterns = [
    # LastPass_clone API
    path('lp_view/', views.LastPassApiView.as_view()),
    # path('lp_list/', views.LastPassListView.as_view()),
    # path('lp_ret/', views.LastPassRetrieveView.as_view()),
    # add routers
    path('', include(router_lastpass.urls))

]
