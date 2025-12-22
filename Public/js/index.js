const swiper = new Swiper('.swiper.mySwiper', {
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    }
});

const header = document.getElementById('cabeça');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

const logo = document.querySelector('.container-logo');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        header.classList.add('scrolled');
        logo.classList.add('troca');
    } else {
        header.classList.remove('scrolled');
        logo.classList.remove('troca');
    }
});
