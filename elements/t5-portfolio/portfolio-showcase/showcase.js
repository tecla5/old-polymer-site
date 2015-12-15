Polymer({
  is: 'portfolio-showcase',

  behaviors: [
    Polymer.NeonAnimationRunnerBehavior,
    Polymer.NeonSharedElementAnimatableBehavior
  ],

  properties: {
    product: {
      observer: '_productChanged'
    },

    sharedElements: {
      value: function() {
        return {
          'hero': this.$.productCard
        };
      }
    },

    // DEBUT : CONFIGURATIONS DES ANIMATIONS
    animationConfig: {
      value: function() {
        return {
          'entry': [{
            name: 'hero-animation',
            id: 'hero',
            toPage: this
          }, {
            name: 'fade-in-animation',
            node: this
          }],

          'exit': [{
            name: 'fade-out-animation',
            node: this
          }, {
            name: 'scale-down-animation',
            node: this
          }]
        };
      }
    }
    // FIN : CONFIGURATIONS DES ANIMATIONS
  },
  // FIN : PROPRIETES

  _closeCard: function() {
    this.fire('changePage', 'finished');
  },

  _productChanged: function(data) {
    console.log('ghola', this.$.header);
    this.$.header.style.backgroundImage = 'url(' + data.header + ')';
  }
});
