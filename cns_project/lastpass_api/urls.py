from django.urls import path
from lastpass_api import views

urlpatterns = [
    # Simple encrypt decrypt api
    #path('', views.apiOverview, name="api-overview"),
    path('api-en-de/', views.SimpleApiEncryptDecrypt.as_view(), name="api-en-de"),
    # LastPass_clone API
    path('lastPass_api/', views.LastPassApiView.as_view()),
    #path('', views.helloWorld)

]
