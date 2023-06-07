from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='product_images', default='default_background.jpg')
    category = models.CharField(max_length=50)
    size = models.PositiveSmallIntegerField()
    description = models.TextField()

    def __str__(self) -> str:
        return self.name
