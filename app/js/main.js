$(function () {

  

  // TABS
  let tab = document.querySelectorAll('.service__tab'),
    tabs = document.querySelector('.service__tabs'),
    tabContent = document.querySelectorAll('.service__tabcontent'),
    tabActive = document.getElementById('tab-1'),
    tabHide = document.getElementById('tab-4');

  // чтобы отображалась 4-я кнопка при небольшой ширине экрана
  if (document.documentElement.clientWidth < 1101) {
    tabHide.classList.remove('hide-tab','hide');
  };
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
    let target = e.target;
    if (target && target.classList.contains('service__tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }

    //код для замены табов 1-го на 4-й
    if (document.documentElement.clientWidth > 1101) {
    
    tabActive.addEventListener('click', function () {
      tabActive.classList.remove('show');
      tabActive.classList.add('hide');
      tabHide.classList.add('show');
      tabHide.classList.remove('hide','hide-tab');
    });

    tabHide.addEventListener('click', function () {
      tabHide.classList.remove('show');
      tabHide.classList.add('hide');
      tabActive.classList.remove('hide');
      tabActive.classList.add('show');
    });
  }
    // 
  });
  $(".rating-stars").rateYo({
    rating: 5,
    starWidth: "12px",
    ratedFill: '#ffa726',
    readOnly: true,
  });


  // burger-menu
  $('.header__navigation-btn').on('click', function () {
    $('.header__navigation-inner').slideToggle();

    let mediaNav = document.querySelector('.header__navigation-inner'),
      newNavItems = document.querySelectorAll('.header__navigation-item'),
      btnLogin = document.querySelector('.header__btn-login'),
      btnStart = document.querySelector('.header__btn-start');
    if (newNavItems.length <= 3) {
      for (i = 0; i < 2; i++) {
        let newNavItem = document.createElement('li');
        newNavItem.classList.add('header__navigation-item');
        mediaNav.appendChild(newNavItem);
      }
    } else {};
    let newLogin = document.querySelectorAll('.header__navigation-item')[3],
      newStart = document.querySelectorAll('.header__navigation-item')[4];

    newLogin.appendChild(btnLogin);
    newStart.appendChild(btnStart);

    btnLogin.style.display = "block";
    btnStart.style.display = "block";
  });

  //MODAL
  let description = document.querySelectorAll('.description-btn'),
  loginBtn = document.querySelector('.header__btn-login'),
  login = document.getElementById('login'),
  overlay = document.querySelector('.overlay'),
  close = document.querySelectorAll('.popup-close');

  console.log(close);
// чтобы были доступны для обработчика событий все элементы собранные в description. Важно, чтобы после for не было ;.Потому, что description[i] будет underfined.
for (let i = 0; i < description.length; i++)

  description[i].addEventListener("click", function () {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    console.log(this);
    document.body.style.overflow = 'hidden';
  });

loginBtn.addEventListener('click', function () {
  login.style.display = 'block';
  this.classList.add('more-splash');
  console.log(this);
  document.body.style.overflow = 'hidden';
 });
for (let i = 0; i < close.length; i++)

close[i].addEventListener('click', function () {
    overlay.style.display = 'none';
  for (let i = 0; i < description.length; i++) // не уверена, что нет лучшего решения, но пока оно мне не доступно. Речь про еще один цикл для description 
  description[i].classList.remove('more-splash');

  login.style.display = 'none';
  login.classList.remove('more-splash');
  console.log(this);
  document.body.style.overflow = '';
});
// 
  
});