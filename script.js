const scrollTrack = document.querySelector('#scrollTrack');
const scrollThumb = scrollTrack.querySelector('.scrollThumb');
const blogItems = document.querySelector('.blog__items');

scrollThumb.onmousedown = function (event) {
  event.preventDefault(); // предотвратить запуск выделения (действие браузера)

  let shiftY = event.clientY - scrollThumb.getBoundingClientRect().top;
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(event) {
    let newTop = event.clientY - shiftY - scrollTrack.getBoundingClientRect().top;
    // курсор вышел из слайдера => оставить бегунок в его границах.
    if (newTop < 0) {
      newTop = 0;
    }
    let downEdge = scrollTrack.offsetHeight - scrollThumb.offsetHeight;
    if (newTop > downEdge) {
      newTop = downEdge;
    }
    /**todo доработать в процентном отношении*/
    scrollThumb.style.top = newTop + 'px';
    blogItems.style.bottom = newTop + 'px'
  }

  function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }
};


//*todo подумать через клонирование и точную высоту одного начального сегмента*/
const bannerLeft = document.querySelector('.banner__left');
const bannerCenter = document.querySelector('.banner__center');
const bannerRight = document.querySelector('.banner__right');

for (let i = 0; i < 3; i++) {
  bannerLeft.innerHTML += bannerLeft.innerHTML;
  bannerCenter.innerHTML += bannerCenter.innerHTML;
  bannerRight.innerHTML += bannerRight.innerHTML;
}

const burgerMenu = document.querySelector('.burger-menu');
const language = document.querySelector('.language');
const burger = document.querySelector('.burger');
const headerMenu = document.querySelector('.header__menu');
burgerMenu.addEventListener('click', (e) => {
  e.composedPath().forEach(elem => {
    if (elem === burger) {
      headerMenu.classList.toggle('open');
      burger.classList.toggle('active');
      if (headerMenu.classList.contains('open')) {
        document.querySelector('.hidden').classList.add('active');
      } else {
        document.querySelector('.hidden').classList.remove('active');
      }
    }
    if (elem === language) {
      headerMenu.classList.remove('open');
      alert('Обязательно сделать смену языка ))')
      document.querySelector('.hidden').classList.remove('active');
    }
  });
});

headerMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' ||  e.target.tagName === 'LI' || e.target.classList.contains('action__item')) {
      headerMenu.classList.remove('open');
      document.querySelector('.hidden').classList.remove('active');
      burger.classList.remove('active');
      alert('Куда-то переходим и закрываем меню');
    } else {
      return false
    }
});