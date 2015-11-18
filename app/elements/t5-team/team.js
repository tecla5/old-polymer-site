'use strict';

Polymer({
  is: 't5-team',

  properties: {
    items: {
      type: Array,
      notify: true
    },
    lastError: {
      type: String,
      notify: true
    }
  },
  generateEmailLink(email) {
    return 'mailto:' + email;
  }
});
