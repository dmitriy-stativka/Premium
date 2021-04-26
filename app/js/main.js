const swiperReviews = new Swiper('.reviews__slider-container', {

    direction: 'horizontal',
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    speed: 500,
    autoHeight: false,
    loop: true,



    breakpoints: {
      1100: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      }
    },

  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  
  });




const popupLinks = document.querySelectorAll('.popup-link');
const popup = document.querySelector('.popup');
const popupBody = document.querySelector('.popup__body');
const closeButton = document.querySelector('.popup__close-btn-image');
const lockPadding = document.querySelectorAll('.lock-padding');
const body = document.body;

const timeout = 800;



function disableScroll() {
  let pagePosition = window.scrollY;
  body.classList.add('disable-scroll');
  body.dataset.position = pagePosition;
  body.style.top = -pagePosition + 'px';
}

function enableScroll() {
  setTimeout( () => {
    let pagePosition = parseInt(body.dataset.position, 10);
    body.style.top = 'auto';
    body.classList.remove('disable-scroll');
    window.scroll({top: pagePosition, left: 0});
    body.removeAttribute('data-position');
  },timeout);
  
  
}

function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');
}

function bodyUnlock() {
  setTimeout( () => {
    for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.style.paddingRight = '0px';
    }
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);
}

popupLinks.forEach((el) => {
  el.addEventListener('click', (e) => {
    popup.classList.add('popup-active');
    bodyLock();
    disableScroll();
     
  });
});

closeButton.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target == closeButton) {
    popup.classList.remove('popup-active');
    bodyUnlock();
    enableScroll();
  }

});

popupBody.addEventListener('click', (e) => {
  
  if (e.target == popupBody) {
    popup.classList.remove('popup-active');
    bodyUnlock();
    enableScroll();
  }

});

const swiperAdvantages = new Swiper('.advantages__slider-container', {
 
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  speed: 500,
  autoHeight: false,
  loop: true,

  breakpoints: {

    1500: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },

    1100: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    }
  },

  
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
});



const menuButton = document.querySelector('.header__menu-btn');
const sideMenu = document.querySelector('.header__sidemenu');
const menuCloseButton = document.querySelector('.header__sidemenu-btn-close');
const sideMenuLink = document.querySelectorAll('.header__sidemenu-link');
const sideMenuBody = document.querySelector('.header__sidemenu');


menuButton.addEventListener('click', (e) => {
  sideMenu.classList.toggle('header__sidemenu--active');
  menuButton.classList.toggle('header__menu-btn--close');
     
});


sideMenuLink.forEach((el) => {
  el.addEventListener('click', (e) => {
    sideMenu.classList.remove('header__sidemenu--active');
    menuButton.classList.remove('header__menu-btn--close');
  });
});

