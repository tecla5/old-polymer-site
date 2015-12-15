Polymer({
  is: 't5-app',

  properties: {
    model: {
      type: Object,
      notify: true
    },

  },

  ready: function() {
    // Initialize the instance's "list" property to empty array.
    this.model = this.model || {};
  },
  attached: function() {
    this.showSplash();
  },
  listeners: {
    'splash-completed': 'onDataRouteClick',
    'i18n-language-ready': 'laguageChanged'
  },

  laguageChanged: function() {
    console.log('i18n-language-ready', window.I18nMsg);
    document.getElementById('t5model').updateModel(window.I18nMsg.lang);
  },

  // Close drawer after menu item is selected if drawerPanel is narrow
  onDataRouteClick: function(mouseEvent) {
    var drawerPanel = document.querySelector('#paperDrawerPanel');
    drawerPanel.forceNarrow = false;

    if (drawerPanel.narrow) {
      drawerPanel.closeDrawer();
    }
    var route = mouseEvent.srcElement.getAttribute('data-route') || app.route;

    var mainToolbar = document.querySelector('#mainToolbar');
    mainToolbar.customStyle['--paper-toolbar-background'] =
    'var(--' + route + '-bg-image,--primary-background-color)'; //'blue';
    mainToolbar.updateStyles();

  },

  showSplash: function() {
    console.log('show splash');
    if (app.route === undefined && (window.location.pathname === '/' ||
        window.location.pathname.search(/\/(es|en)\/{0,1}/) !== -1)) {
      app.route = 'splash'; // default route to 'one'.
    }

    if (app.route === 'splash') {
      var t5Splash = document.querySelector('t5-splash');
      t5Splash.startup();
    } else {
      document.querySelector('#paperDrawerPanel').forceNarrow = false;
    }
  }

});
