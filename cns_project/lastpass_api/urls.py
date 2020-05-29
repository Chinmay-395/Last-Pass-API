from django.urls import path
from lastpass_api import views

urlpatterns = [
    # LastPass_clone API
    path('', views.LastPassApiView.as_view()),
    #path('', views.helloWorld)

]
