document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.menu');
    const btn = document.querySelector('.btn__menu');

    btn.addEventListener('click', function (e) {
        e.stopPropagation(); // чтобы клик не ушёл дальше
        menu.classList.toggle('open');
    });
});