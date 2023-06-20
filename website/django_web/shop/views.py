from django.shortcuts import render

from .models import Product


# Create your views here.
def home(request):
    return render(request, 'shop/home.html')


def about(request):
    return render(request, 'shop/about.html')


def catalog(request):
    context = {
        'js_scripts_to_include': [
            'shop/desktop.blocks/filter-panel/filter-block/filter-block.js',
            'shop/desktop.blocks/filter-side-panel/filters-sidebar.js'
        ],
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
        'categories': ['LongLongLongLongLOngLongCategory'] + [f'Category_{i}' for i in range(40)],
        'checkbox_filters': ['LongLongLodf sng Lo ngLOngLongFilter'] + [f'Filter_{i}' for i in range(40)],
        'radio_filters': ['LongLongLodf sng Lo ngLOngLongFilter'] + [f'Filter_{i}' for i in range(5)],
        'review_count': 234
    }

    return render(request, 'shop/catalog.html', context)



def gallery(request):
    return render(request, 'shop/gallery.html')