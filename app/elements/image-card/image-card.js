Polymer({
  is: 'image-card',

  properties: {
    width: {
      type: Number,
      observer: '_changeWidth',
    },
  },

  _changeWidth(data) {
    this.style.width = data + 'px';
    this.querySelector('.content').width = data + 'px';
  },

});
