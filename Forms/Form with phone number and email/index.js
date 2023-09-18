var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999-99-99");

im.mask(selector);

new JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
    email: {
      required: true,
      email: true,
    },
  },

  messages: {
    name: {
      required: 'Как вас зовут?',
      minLength: 'Это поле должно содержать минимум 2 буквы'
    },
    tel: 'Укажите ваш телефон',
    email: 'Укажите ваш email',
  },

  colorWrong: 'rgba(255, 92, 0, 1)'

});
