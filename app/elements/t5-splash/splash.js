Polymer({
  is: 't5-splash',
  listeners: {
    //'dialog.iron-overlay-closed': 'completeStartup'
  },
  startup: function() {
    document.querySelector('#paperDrawerPanel').forceNarrow = true;
    var mainToolbar = document.querySelector('#mainToolbar');
    mainToolbar.customStyle['--paper-toolbar-background'] = 'none';//'blue';
    mainToolbar.updateStyles();
    //this.$.dialog.open();
    //window.setTimeout(this.completeStartup, 3000);
  },
  completeStartup: function() {
    //this.$.dialog.close();
    app.route = 'home';
    document.querySelector('#paperDrawerPanel').forceNarrow = false;
    // var mainToolbar = document.querySelector('#mainToolbar');
    // mainToolbar.customStyle['--paper-toolbar-background'] =
    // 'var(--home-bg-image,--primary-background-color)';//'blue';
    // mainToolbar.updateStyles();

    this.fire('splash-completed');// {event:x}
  },
  properties: {
    items: {
      type: Array,
      notify: true
    },
    lastError: {
      type: String,
      notify: true
    },
    foo: {
      type: String,
      value: 't5-splash',
      notify: true
    }
  }
});
