(function() {
  Polymer({
    is: 't5-team',

    properties: {
      items: {
        type: Array,
        obj: Object,
        notify: true
      },
      lastError: {
        type: String,
        notify: true
      }

    },
    generateEmailLink: function(email){
      return 'mailto:' + email;
    },
    keys: function(obj){
      return Object.keys(obj);
    },
  });
})();
