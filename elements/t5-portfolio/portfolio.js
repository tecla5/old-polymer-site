(function() {
  Polymer({
    is: 't5-portfolio',

    properties: {
      items: {
        type: Array,
        notify: true
      },
      lastError: {
        type: String,
        notify: true
      }
    }
  });
})();
