window.I18nMsg = window.I18nMsg || {
  lang: null,
  url: 'locales',
  locales: {}
};

// Holds all t5-i18n elements to have them easily updated with translation messages.
var _instances = [];
// True if there's an outstanding XHR fetching a locale file.
var _fetching = false;
var _numInstancesUpdated = 0;

Polymer({
  is: 't5-i18n',

  /**
   * The `i18n-language-ready` is fired after the locale was fetched and
   * all `<t5-i18n>` elements were updated.
   *
   * @ event i18n-language-ready
   * @ detail {{language: String}}
   */
  properties: {
    /**
     * The message id (key) for this message.
     */
    msgid: {
      type: String,
      value: null
    },

    /**
     * The language being used.
     */
    language: {
      type: String,
      value: null,
      observer: '_languageChanged',
      readOnly: true
    },

    /**
     * The folder name where the localized `<lang>.json` files are located.
     * Overrides `window.I18nMsg.url` if not `null`.
     */
    messagesUrl: {
      type: String,
      value: 'locales'
    }
  },

  /**
   * An object containing the set of known language locales that have been loaded.
   */
  locales: {
    type: Object,
    value: window.I18nMsg.locales // static
  },

  ready: function() {
    console.log(window.I18nMsg);
    this.messagesUrl = window.I18nMsg.url;
    this._setLanguage(window.I18nMsg.lang);

    // Have instances observe window.I18nMsg.lang changes
    // and go fetch the localized messages.json file.
    var observerLang = new PathObserver(window.I18nMsg, 'lang');
    observerLang.open(function(newValue) {//, oldValue
      _numInstancesUpdated = 0;
      this._setLanguage(newValue);
    }.bind(this));

    // Have instances observe window.I18nMsg.url changes
    // and go fetch the localized messages.json file.
    var observerUrl = new PathObserver(window.I18nMsg, 'url');
    observerUrl.open(function(newValue) {//, oldValue
      //console.log(oldValue);
      _numInstancesUpdated = 0;
      this.messagesUrl = newValue;

      // TODO: this will xhr the json file for each instance.
      // if (!this.language || _fetching) {
      //   return;
      // }

      this._fetchLanguage();
      return window.lang[this.msgId].message;
    }.bind(this));

    _instances.push(this);
  },

  attached: function() {
    var msg = this.getMsg(this.msgid);
    if (msg) {
      this.innerHTML = msg;
    }
  },

  /**
   * Returns a message in the current locale (set by `window.I18nMsg.lang`).
   * @ method getMsg
   * @ param {string=} optMsgId Optional message id to lookup. If left off,
   * the instance's `msgid` property is used.
   * @ return {string|null} Translated message or `null` if not found.
   */

  getMsg: function(optMsgId) {
    var msgId = optMsgId || this.msgid;
    var lang = this.locales[this.language];

    var value = 'patata';
    if (lang && lang[msgId]) {
      value = lang[msgId];
    }
    
    console.log('getMsg',lang, msgId, value);
    return value;
  },

  _languageChanged: function() {
    // Don't fetch .json file if it has already been
    // fetched or another instance is already trying to.
    if (this.language && this.locales[this.language] && !_fetching) {
      // Send one signal that language changed to outside.
      if (_numInstancesUpdated === _instances.length - 1) {
        this.fire('i18n-language-ready', {
          language: this.language
        });
      }

      this._updateElementMessage();
      _numInstancesUpdated++;

      return;
    } else if (!this.language || this.locales[this.language] || _fetching) {
      return;
    }

    this._fetchLanguage();
  },

  _fetchLanguage: function() {
    // if (_fetching) {
    //   return;
    // }

    _fetching = true;

    var url = /*this.baseURI + */ this.messagesUrl + '/' + this.language + '.json';

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function(e) {
      _fetching = false;

      if (e.target.status !== 200) {
        return;
      }

      var resp = JSON.parse(e.target.response);
      if (!(this.msgid in resp)) {
        console.warn(this.localName + ': "' + this.msgid +
            '" message id was not found in ' + url);
        return;
      }

      this.locales[this.language] = resp; // cache this locale.

      this._notifyInstances();

      this.fire('i18n-language-ready', {
        language: this.language
      });
    }.bind(this);
    xhr.onerror = function(e) {
      console.log(e);
      _fetching = false;
    };
    xhr.send();
  },

  _updateElementMessage: function(optInstance) {
    var instance = optInstance || this;

    var msg = instance.locales[instance.language][instance.msgid];
    if (msg) {
      instance.innerHTML = msg;
    }
  },

  _notifyInstances: function() {
    for (var i = 0; i < _instances.length; i++) {
      var instance = _instances[i];
      instance._setLanguage(window.I18nMsg.lang);

      if (!instance.locales[instance.language][instance.msgid]) {
        console.warn(this.localName + ': "' + instance.msgid + '" message id was not found');
        continue;
      }

      this._updateElementMessage(instance);
    }
  }

});
