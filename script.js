const blogArea = document.querySelector('#blog-area');

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

scrollThumb.ondragstart = function () {
  return false;
};