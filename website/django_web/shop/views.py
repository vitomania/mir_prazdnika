from django.shortcuts import render

from .models import Product


# Create your views here.
def home(request):
    return render(request, 'shop/home.html')


def about(request):
    return render(request, 'shop/about.html')


def catalog(request):
    context = {
        'products': Product.objects.all(),
        'filters_block': {
            'categories': ['Balloons', 'Toys', 'Books'],
            'brand': ['brand1', 'brand2', 'brand3'],
            'price': {
                'min': 0,
                'max': 10000
            },
            'orderby': ['orderby1', 'orderby2', 'orderby3']
        },
        'categories': [f'Category_{i}' for i in range(15)],
    }

    return render(request, 'shop/catalog.html', context)



def gallery(request):
    return render(request, 'shop/gallery.html')