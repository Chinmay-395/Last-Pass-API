from django.urls import path
from lastpass_api import views

urlpatterns = [
    path('intro_api/', views.IntroApiView.as_view()),
    path('', views.helloWorld)

]
