const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.color = 'white';
    });

    item.addEventListener('mouseleave', () => {
        if (!item.classList.contains('active')) {
            item.style.color = 'rgba(255, 255, 255, 0.8)';
        }
    });

    item.addEventListener('click', () => {
        menuItems.forEach(i => {
            i.classList.remove('active');
            i.style.color = 'rgba(255, 255, 255, 0.8)';
        });

        if (item.textContent.trim() !== 'ГРА') {
            item.classList.add('active');
            item.style.color = 'white';
        }
    });
});
