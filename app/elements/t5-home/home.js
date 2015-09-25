(function() {
  Polymer({
    is: 't5-home',
    properties: {
      item: {
        type: Object,
        // when `items` changes `computeItem` is called once
        // and the value it returns is stored as `item`
        computed: 'computeItem(items)'
      },
      items: {
        type: Array,
        notify: true
      },
      lastError: {
        type: String,
        notify: true
      }
    },
    computeImg: function(items) {
      return items[0];
    }
  });
})();
