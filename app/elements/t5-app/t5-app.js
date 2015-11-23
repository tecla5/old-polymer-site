Polymer({
  is: 't5-app',

  properties: {
    foo: {
      type: String,
      value: 't5-app',
      notify: true
    }
  },
  attached: function() {
    this.showSplash();
  },
  listeners: {
    'splash-completed': 'onDataRouteClick'
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
