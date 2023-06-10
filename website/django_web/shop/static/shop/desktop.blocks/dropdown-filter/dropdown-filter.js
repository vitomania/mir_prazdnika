export function openDropdownFilterContent(dropdownFilterID) {
    var dropdownFilters = document.getElementsByClassName('dropdown-filter');
    var openDropdownFilter;
    
    for (let i = 0; i < dropdownFilters.length; i++) {
        var dropdownFilterContent= dropdownFilters[i].querySelector('.dropdown-filter__content');

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

export function closeDropdownFilterContent(event) {
    var openedFilter = document.querySelector('.dropdown-filter__content.opened');

    if (!!openedFilter) {
        if (!openedFilter.parentNode.contains(event.target)) {
            openedFilter.classList.remove('opened');
        }
    }
}