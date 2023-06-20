function openDropdownFilterContent(dropdownFilterID) {
    var dropdownFilters = document.getElementsByClassName('filter-block');
    var openDropdownFilter;
    
    for (let i = 0; i < dropdownFilters.length; i++) {
        var dropdownFilterContent= dropdownFilters[i].querySelector('.filter-block__content');

        if (dropdownFilters[i].id === dropdownFilterID) {
            openDropdownFilter = dropdownFilterContent;
        } else {
            if (dropdownFilterContent.classList.contains('opened')) {
                dropdownFilterContent.classList.remove('opened');
            }
        }
    }

    openDropdownFilter.classList.toggle('opened');
}

function closeDropdownFilterContent(event) {
    var openedFilter = document.querySelector('.filter-block__content.opened');

    if (!!openedFilter) {
        if (!openedFilter.parentNode.contains(event.target)) {
            openedFilter.classList.remove('opened');
        }
    }
}

var btns = document.getElementsByClassName('filter-block__btn');
for (let i = 0; i < btns.length; i++) {
    btns[i].openDropdownFilterContent = openDropdownFilterContent;
}

window.addEventListener('click', closeDropdownFilterContent);