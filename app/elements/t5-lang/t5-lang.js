Polymer({
  is: 't5-lang',

  attached: function() {
    var i18n = document.querySelector('i18n-msg');

    console.log('hacking default behavior of i18n-msg');
    i18n.getMsg = function(optMsgId) {
      var msgId = optMsgId || this.msgid;
      var lang = this.locales[this.language];
      if (lang && lang[msgId]) {
        return lang[msgId];
      }
      return null;
    };
    i18n._updateElementMessage = function(optInstance) {
      var instance = optInstance || this;

      var msg = instance.locales[instance.language][instance.msgid];
      if (msg) {
        instance.innerHTML = msg;
      }
    };

  },
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
