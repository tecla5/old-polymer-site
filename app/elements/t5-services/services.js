Polymer({
  is: 't5-services',

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
