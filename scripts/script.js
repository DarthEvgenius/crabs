document.addEventListener('DOMContentLoaded', ()=> {
    // burger menu
    const burger = document.querySelector('.menu_burger');
    const menu = document.querySelector('.header__menu');    
    const closeMenu = document.querySelector('.menu_close');
    
    if (burger) {
        closeMenu.addEventListener('click', ()=> {
            menu.classList.remove('active');
        });
        burger.addEventListener('click', ()=> {
            menu.classList.add('active');             
        });
    }
       
    // filter menu
    const filterBtn = document.querySelector('.catalog__filter_open');
    const filter = document.querySelector('.catalog__filter');
    const closeFilter = document.querySelector('.filter__close_btn');

    if (filterBtn) {
        
        
        closeFilter.addEventListener('click', ()=> {
            filter.classList.remove('active');
        });
        filterBtn.addEventListener('click', ()=> {
            filter.classList.add('active');
        });
    }
})