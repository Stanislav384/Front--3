const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.color = 'white';
    });

    button.addEventListener('mouseleave', () => {
        if (!button.classList.contains('active')) {
            button.style.color = 'rgba(255, 255, 255, 0.8)';
        }
    });

    button.addEventListener('click', () => {
        buttons.forEach(b => {
            b.classList.remove('active');
            b.style.color = 'rgba(255, 255, 255, 0.8)';
        });

        button.classList.add('active');
        button.style.color = 'white';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const currentPath = window.location.pathname;

    if (currentPath.includes("main.html")) {
        document.getElementById("main-btn").classList.add("active");
    } else if (currentPath.includes("heroes.html")) {
        document.getElementById("heroes-btn").classList.add("active");
    } else if (currentPath.includes("news.html")) {
        document.getElementById("news-btn").classList.add("active");
    }
});