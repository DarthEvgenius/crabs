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



// listener for shop card buttons
document.addEventListener('click', (event) => {
    // check if click on shop card button
    const target = event.target.closest('.card__btn');
    if (target) {
        // check if there is an ID on button
        if (target.id) {

            // content mock
            let someContent = `
            <div class="shopcard__container">

            <div class="shopcard">

                <div class="shopcard__head row">
                    <div class="shopcard__head_title col-6">Морской ёж</div>
                    <div class="shopcard__head_close col-6"><span data-bs-dismiss="modal">X</span></div>
                </div>

                <div class="shopcard__body row">

                    <div class="shopcard__body_image col-6 mr-5">
                        <img src="./images/card_1.png" alt="" class="img-fluid">
                    </div>

                    <div class="shopcard__body_content col-6">

                        <div class="shopcard__body_title">Ёж морской живой</div>

                        <div class="shopcard__body_info">
                            <p class="shopcard__body_text">Являются традиционным блюдом жителей побережий Средиземного моря, Северной и Южной Америки, Новой Зеландии и Японии. Высоко ценятся их молоки и особенно икра, в которой содержится до 34,9 % жиров и 19,2—20,3 % белков.</p>
                            <p class="shopcard__body_list">Страна: </p>
                            <p class="shopcard__body_list">Производитель: </p>
                            <p class="shopcard__body_list">Фасовка:</p>
                            <p class="shopcard__body_list">Упаковка:</p>
                        </div>
                        <div class="shopcard__body_price">

                            <div class="shopcard__body_price-text">100<span> руб. за шт.</span></div>

                            <div class="shopcard__body_price-counter">
                                <div class="small__amount">
                                    <div class="amount__counter">
                                        <span class="amount__counter_decrease"></span>
                                        <span>
                                            <input class="amount__counter_input" type="number" min="0" max="999" value="1">
                                        </span>         
                                        <span class="amount__counter_increase"></span>
                                    </div>
                                </div>    
                            </div>

                            <div class="shopcard__body_price-btn"><button class="card__btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M7.34375 17.5642C7.34375 17.7805 7.2796 17.992 7.15942 18.1719C7.03924 18.3517 6.86842 18.4919 6.66856 18.5747C6.4687 18.6575 6.24879 18.6791 6.03662 18.6369C5.82445 18.5947 5.62957 18.4906 5.4766 18.3376C5.32364 18.1846 5.21947 17.9898 5.17727 17.7776C5.13506 17.5654 5.15672 17.3455 5.23951 17.1456C5.32229 16.9458 5.46248 16.775 5.64234 16.6548C5.82221 16.5346 6.03368 16.4705 6.25 16.4705C6.54008 16.4705 6.81828 16.5857 7.0234 16.7908C7.22852 16.9959 7.34375 17.2741 7.34375 17.5642ZM14.375 16.4705C14.1587 16.4705 13.9472 16.5346 13.7673 16.6548C13.5875 16.775 13.4473 16.9458 13.3645 17.1456C13.2817 17.3455 13.2601 17.5654 13.3023 17.7776C13.3445 17.9898 13.4486 18.1846 13.6016 18.3376C13.7546 18.4906 13.9495 18.5947 14.1616 18.6369C14.3738 18.6791 14.5937 18.6575 14.7936 18.5747C14.9934 18.4919 15.1642 18.3517 15.2844 18.1719C15.4046 17.992 15.4688 17.7805 15.4688 17.5642C15.4688 17.2741 15.3535 16.9959 15.1484 16.7908C14.9433 16.5857 14.6651 16.4705 14.375 16.4705ZM17.9477 6.45171L15.7195 13.6947C15.6127 14.0464 15.3955 14.3543 15.1 14.5728C14.8045 14.7914 14.4464 14.9089 14.0789 14.908H6.56797C6.19426 14.9066 5.83108 14.784 5.53299 14.5586C5.2349 14.3332 5.01799 14.0172 4.91484 13.658L2.08984 3.77124C2.08048 3.73851 2.06069 3.70973 2.03347 3.68929C2.00625 3.66884 1.9731 3.65784 1.93906 3.65796H0.625C0.50068 3.65796 0.381451 3.60857 0.293544 3.52067C0.205636 3.43276 0.15625 3.31353 0.15625 3.18921C0.15625 3.06489 0.205636 2.94566 0.293544 2.85775C0.381451 2.76984 0.50068 2.72046 0.625 2.72046H1.93906C2.17653 2.7211 2.40738 2.79873 2.59699 2.94171C2.78659 3.08468 2.92471 3.28529 2.99062 3.51343L3.65703 5.84546H17.5C17.5733 5.84553 17.6455 5.86279 17.7109 5.89584C17.7763 5.92889 17.8331 5.97681 17.8766 6.03577C17.9201 6.09472 17.9492 6.16305 17.9616 6.23529C17.9739 6.30753 17.9692 6.38165 17.9477 6.45171ZM16.8656 6.78296H3.925L5.81641 13.4041C5.8631 13.5673 5.96172 13.7109 6.09733 13.8131C6.23294 13.9153 6.39816 13.9706 6.56797 13.9705H14.0766C14.2437 13.9705 14.4064 13.9169 14.5408 13.8177C14.6753 13.7184 14.7743 13.5786 14.8234 13.4189L16.8656 6.78296Z" fill="black"/>
                                </svg>Купить
                            </button></div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
            `;

            

// On server mode --------------------------------
            // make request to 'catalog/product/<id>
            // fetch(`catalog/product/${target.id}`)
            fetch(`../crabs/shop_card.html`)
            .then(response => {
                // console.log(response)
                return response.text();
            })
            .then(textResponse => {
                let parser = new DOMParser();
                let htmlPage = parser.parseFromString(textResponse, 'text/html');
                return htmlPage;                
            })
            .then(htmlContent => {
                // get iiner html body as a string 
                let body = htmlContent.body.innerHTML;
                // create modal
                let modalWrapper = createModal(body);
                // add to DOM
                document.body.prepend(modalWrapper);
                // create modal instance
                let modal = new bootstrap.Modal(modalWrapper.querySelector('.modal'));
                // show modal
                modal.show();
            })
            .catch(function(err) {
                console.log(err);
            })

                
                

                
                
            // });

            
                        
            



           
        } else {
            console.log('No ID on clicked button found.')
        }
        
    }
    
});

// creates a modal wrapper with provided HTML content
function createModal(content) {
    let modalWrap = document.createElement('div');
    modalWrap.classList.add('modalWrap');
    modalWrap.style.backgroundColor = '#000';
    modalWrap.innerHTML = `
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                
                    <div class="modal-body">
                        ${content}
                    </div>
                
                </div>
            </div>
        </div>
    `;
    
    return modalWrap;    
}