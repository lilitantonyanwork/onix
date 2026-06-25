document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.menu');
    const btn = document.querySelector('.btn__menu');
    const platform = document.querySelectorAll('.platform__tab');

    btn.addEventListener('click', function (e) {
        e.stopPropagation(); // чтобы клик не ушёл дальше
        menu.classList.toggle('open');
    });
    platform.forEach((item) =>{
        item.addEventListener('click', function (e) {
            e.stopPropagation();
            platform.forEach((allItems) =>{
                allItems.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    })




});