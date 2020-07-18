'use strict';

(function () {
  const button = document.querySelectorAll('.task9__button');

  button.forEach( function(item) {
    item.addEventListener('click' , function(){
      this.classList.toggle('task9__button--active');
      let block = this.nextElementSibling;
      if (block.classList.contains('task9__list')) {
        block.classList.toggle('task9__list--active');
        if (block.style.maxHeight){
          block.style.maxHeight = null;
        } else {
          block.style.maxHeight = block.scrollHeight + "px";
        }
      }
    })
  });
})();