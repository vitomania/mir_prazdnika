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
    // console.log(event.target);
    // console.log(document.querySelector('dropdown-filter__content.opened'));
    // console.log(event.target.matches('.dropdown-filter__content.opened'));
    var openedFilter = document.querySelector('.dropdown-filter__content.opened');
    console.log(event.target, openedFilter);

    if (!!openedFilter) {
        console.log(event.target, openedFilter.parentNode, event.target.matches('#' + openedFilter.parentNode.id));
        if (!event.target.matches('#' + openedFilter.parentNode.id)) {
            openedFilter.classList.remove('opened');
        }
    }
}