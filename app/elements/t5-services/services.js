(function() {
  Polymer({
    is: 't5-services',

    properties: {
      items: {
        type: Array,
        notify: true
      },
      lastError: {
        type: Object,
        notify: true
      },
      loading: {
        type: Boolean,
        notify: true
      }
    },
    ready: function() {
      // this.$.getServices.generateRequest();
    },
    _complete: function() {
      console.log('complete');
    },
    handleResponse: function(response) {
      console.log('RECEIVED json', response);
    }
  });
})();
