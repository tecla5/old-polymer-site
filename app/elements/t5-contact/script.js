
'use strict';

Polymer({
  is: 't5-contact',

  ready(){

  },


  handleClick(  ) {
    //console.log(event, detail);
    //document.getElementById('form');
    this.$.form.submit();
  },

  listeners: {
    'iron-form-submit': '_openDialog'
  },

  _openDialog(){
    this.$.modal.toggle();
    this.$.form.name.value = '';
    this.$.form.email.value = '';
    this.$.form.message.value = '';
  },


  properties: {
    action: {
      type: String,
      value: '/__/forms/contact'
    },
  }


});



/*
document.querySelector('x-custom').addEventListener('kick', function (e) {
    console.log(e.detail.kicked); // true
})
*/
