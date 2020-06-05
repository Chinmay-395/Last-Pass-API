from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('profiles_api.urls')),
    path('lastpass_api/', include('lastpass_api.urls')),
    path('cns_api/', include('cns_api.urls')),
    path('auth/', include('dj_rest_auth.urls'))
]
