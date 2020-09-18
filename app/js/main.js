$(function(){

  // TABS
  let tab = document.querySelectorAll('.service__tab'),
    tabs = document.querySelector('.service__tabs'),
    tabContent = document.querySelectorAll('.service__tabcontent');

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }
  hideTabContent(1);

  function showTabContent(b) {
    tabContent[b].classList.remove('hide');
    tabContent[b].classList.add('show');
  }
  showTabContent(0);

  tabs.addEventListener('click', function (e) {
    let target = event.target;
    if (target && target.classList.contains('service__tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
  
  $(".rating-stars").rateYo({
      rating: 5,
    starWidth: "12px",
    ratedFill: '#ffa726',
    readOnly: true,
  }); 

  const anime = require('animejs');


});


  