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


    // phone numbers
    const phoneBtn = document.querySelector('#phone');
    const phones = document.querySelector('.tools__numbers');
    const closePhones = document.querySelector('#phones_remove');    

    if (phoneBtn) {
        phoneBtn.addEventListener('click', ()=> {
            phones.classList.add('active');
            
            closePhones.addEventListener('click', ()=> {
                phones.classList.remove('active');
            });
        })        
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


    // basket's counters
    document.addEventListener('click', (event)=> {
        const target = event.target;
        if (target.classList.value === 'amount__counter_decrease') {
            const input = target.nextElementSibling.firstElementChild;
            if (input.value > 0) {
                input.value = +input.value - 1;
            }
        }
        if (target.classList.value === 'amount__counter_increase') {            
            const input = target.previousElementSibling.firstElementChild;
            input.value = +input.value + 1; 
        }      
    });
})


// Carousels ----------------------------------------------------------------------
const swiperAbout = new Swiper('.about__swiper_swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
      
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    mousewheel: {
        sensitivity: 1,
    },

    slidesPerView: 1.5,

    spaceBetween: 80,

    breakpoints: {
        320: {
            spaceBetween: 6,
        },
        480: {
            spaceBetween: 20,
        },
        920: {
            spaceBetween: 40,
        }
    },
});


const swiperPopular = new Swiper(".popular__swiper", {
scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    draggable: true,
    dragSize: 80,
},

slidesPerView: 1.5,
spaceBetween: 10,

mousewheel: {
    sensitivity: 1,
},

breakpoints: {
    480: {
        spaceBetween: 20,
        slidesPerView: 2.5,
    },
    480: {
        spaceBetween: 40,
        slidesPerView: 2,
    },
    920: {
        spaceBetween:30,
        slidesPerView: 2.5,
        // scrollbar: {
        //     dragSize: 80,
        // }
    },

    1120: {
        spaceBetween: 40,
        slidesPerView: 3,
    },
    
}
});


//   Slider ---------------------------------------------------------------------
// get container
const slider = document.getElementById('slider');
// get inputs
const inputMin = document.getElementById('catalog-slider_min');
const inputMax = document.getElementById('catalog-slider_max');

// only on catalog page with these elements
if (slider && inputMin && inputMax) {    
    // init slider
    noUiSlider.create(slider, {
        start: [200, 800],
        connect: true,
        range: {
            'min': 0,
            'max': 1000
        }
    });
    
    // change inputs when slider updated
    slider.noUiSlider.on('update', function(values, handle) {
        // values - each time both values [min, max]
        // handle - which handle is moved (0 for min, 1 for max)
        let value = values[handle];

        // if max moved
        if (handle) {
            inputMax.value = Math.round(value);
        } else {
            inputMin.value = Math.round(value);
        }
    });

    // change slider if inputs updated
    inputMin.addEventListener('change', function() {
        slider.noUiSlider.set([this.value, null]);
    });
    inputMax.addEventListener('change', function() {
        slider.noUiSlider.set([null, this.value]);
    });
}