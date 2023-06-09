export function toggleAllFilters() {
    document.getElementById("filters-sidebar").classList.toggle("j-is-shown");
    document.getElementById("overlay").classList.toggle('overlay--all-filters-btn');
}


export function closeAllFilters(event) {
    if (!event.target.matches('#filters-sidebar') && event.target.matches('#overlay')) {
        var filtersSidebar = document.getElementById("filters-sidebar");
        if (filtersSidebar.classList.contains('j-is-shown')) {
            filtersSidebar.classList.remove('j-is-shown');
            document.getElementById("overlay").classList.remove('overlay--all-filters-btn')
        }
    }
}
