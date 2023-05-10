window.addEventListener('load', function() {
  var container = document.querySelector('.container');
  var left = document.querySelector('.left');
  var right = document.querySelector('.right');
  
  function addClass(elem, className) {
    if (elem.classList) {
      elem.classList.add(className);
    } else {
      elem.className += ' ' + className;
    }
  }
  
  function removeClass(elem, className) {
    if (elem.classList) {
      elem.classList.remove(className);
    } else {
      elem.className = elem.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }
  
  function leftEnter() {
    addClass(container, 'left-is-hovered');
  }
  
  function leftLeave() {
    removeClass(container, 'left-is-hovered');
  }
  
  function rightEnter() {
    addClass(container, 'right-is-hovered');
  }
  
  function rightLeave() {
    removeClass(container, 'right-is-hovered');
  }
  
  var resizeTimeout;
  
  function resizeHandler() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
      if (window.innerWidth >= 1200) {
        left.addEventListener('mouseenter', leftEnter);
        left.addEventListener('mouseleave', leftLeave);
        right.addEventListener('mouseenter', rightEnter);
        right.addEventListener('mouseleave', rightLeave);
      } else {
        left.removeEventListener('mouseenter', leftEnter);
        left.removeEventListener('mouseleave', leftLeave);
        right.removeEventListener('mouseenter', rightEnter);
        right.removeEventListener('mouseleave', rightLeave);
        removeClass(container, 'left-is-hovered');
        removeClass(container, 'right-is-hovered');
      }
    }, 800);
  }
  
  resizeHandler();
  window.addEventListener('resize', resizeHandler);  

});

