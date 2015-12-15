Polymer({
  is: 't5-lang',

  showLanguage: function() {
    //this.$.showMenu.toggle();
    document.getElementById('languages').toggle();

  },
  changeLanguage: function(e) {
    window.I18nMsg.lang = e.srcElement.getAttribute('data-lang');
    document.getElementById('languages').toggle();

    document.getElementById('t5model').updateModel(window.I18nMsg.lang);
  },

});
