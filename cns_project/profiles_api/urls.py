from django.urls import path
from profiles_api.views import HelloApiView

urlpatterns = [
    path('hello_api/', HelloApiView.as_view()),

]
