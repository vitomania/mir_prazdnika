from django.conf import settings
from django.conf.urls.static import static
from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name='shop-home'),
    path('about/', views.about, name='shop-about'),
    path('catalog/', views.catalog, name='shop-catalog'),
    path('gallery/', views.catalog, name='shop-gallery')
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
