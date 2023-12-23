(function () {
function highlightActiveMenuItem() {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        console.log('location ', window.location.pathname, 'item ', item)
        if (window.location.pathname.includes(item.getAttribute('href'))) {
            item.classList.add('active');
            console.log('Active class added to:', item);
        }
    });
}
function addMenuEventListeners() {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('hovered');
        });

        item.addEventListener('mouseleave', () => {
            item.classList.remove('hovered');
        });
    });
}

window.addEventListener('load', () => {
    highlightActiveMenuItem();
    addMenuEventListeners();});
})();