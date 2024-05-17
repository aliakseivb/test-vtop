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

const bannerLeft = document.querySelector('.banner__left');
const bannerCenter = document.querySelector('.banner__center');
const bannerRight = document.querySelector('.banner__right');

const bannerHeight = bannerLeft.offsetHeight*2;

bannerLeft.innerHTML = bannerLeft.innerHTML + bannerLeft.innerHTML + bannerLeft.innerHTML;

// bannerLeft.style.bottom = '0px';
bannerCenter.innerHTML = bannerCenter.innerHTML + bannerCenter.innerHTML + bannerCenter.innerHTML;
bannerRight.innerHTML = bannerRight.innerHTML + bannerRight.innerHTML + bannerRight.innerHTML;
