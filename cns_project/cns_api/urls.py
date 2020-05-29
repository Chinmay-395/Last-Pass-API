from django.urls import path
from cns_api import views

urlpatterns = [
    # Simple encrypt decrypt api
    #path('', views.apiOverview, name="api-overview"),
    path('api-en-de/', views.SimpleApiEncryptDecrypt.as_view(), name="api-en-de"),


]
