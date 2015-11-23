
'use strict';

Polymer({
  is: 'ui-section',

  properties: {
    imgSrc: {
      type: String,
      // when `image` changes `computeSrc` is called once
      // and the value it returns is stored as `imgSrc`
      computed: 'computeSrc(image)'
    },
    image: {
      type: String
    },
    caption: {
      type: String
    },
    markdown: {
      type: String
    }
  },
  computeSrc: function(image) {
    return '/images/' + image ;
  }
});
