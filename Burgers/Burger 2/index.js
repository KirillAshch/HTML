document.querySelector('#burger').addEventListener('click', function () {
  document.querySelector('#menu').classList.toggle('is-active')
});

document.querySelector('#burger').addEventListener('click', function () {
  document.querySelector('#burger').classList.toggle('is-active')
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

$(".accordion").accordion({
  // heightStyle: "content"
});

document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){

  const path = e.currentTarget.dataset.path;

  document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
    btn.classList.remove('tabs-nav__btn--active')});

  e.currentTarget.classList.add('tabs-nav__btn--active');

  document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
    tabsBtn.classList.remove('tabs-item--active')});

  document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');

  });
});
