'use strict';

Polymer({
  is: 't5-about',

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
