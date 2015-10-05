(function() {
  Polymer({
    is: 't5-partners',

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
