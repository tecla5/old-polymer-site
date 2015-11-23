Polymer({
  is: 't5-lang',

  showLanguage: function() {
    //this.$.showMenu.toggle();
    document.getElementById('languages').toggle();

  },
  changeLanguage: function(e) {
    var I18nMsg = window.I18nMsg;
    I18nMsg.lang = e.srcElement.getAttribute('data-lang');
    document.getElementById('languages').toggle();
  },

});
