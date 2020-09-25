$(function () {

      // TABS
      let tab = document.querySelectorAll('.service__tab'),
        tabs = document.querySelector('.service__tabs'),
        tabContent = document.querySelectorAll('.service__tabcontent'),
        // для замены табов
        tabActive = document.getElementById('tab-1'),
        tabHide = document.getElementById('tab-4');
// 

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

        //код для замены табов
        tabActive.addEventListener('click', function () {
          tabActive.classList.remove('show');
          tabActive.classList.add('hide');
          tabHide.classList.add('show');
          tabHide.classList.remove('hide');
        });

        tabHide.addEventListener('click', function () {
          tabHide.classList.remove('show');
          tabHide.classList.add('hide');
          tabActive.classList.remove('hide');
          tabActive.classList.add('show');
        });
        // 
      });
        $(".rating-stars").rateYo({
          rating: 5,
          starWidth: "12px",
          ratedFill: '#ffa726',
          readOnly: true,
        });

        const anime = require('animejs');


      });