Polymer({
  is: 'portfolio-inprogress',

  behaviors: [
    Polymer.NeonAnimationRunnerBehavior,
    Polymer.NeonSharedElementAnimatableBehavior
  ],

  properties: {
    // START ANIMATIONS
    animationConfig: {
      value() {
        return {
          'entry': [{
            name: 'fade-in-animation',
            node: this
          }, {
            name: 'transform-animation',
            transformFrom: 'translateX(-100vh)',
            node: this
          }],
          'exit': [{
            name: 'hero-animation',
            id: 'hero',
            fromPage: this
          }, {
            name: 'fade-out-animation',
            node: this
          }]
        };
      }
    }
    // END ANIMATIONS
  },
  attached() {
    this.$.myproducts.generateRequest();
  },

  handleResponse() {
    //console.log(`handleResponse ${e.detail.response}`);
    //console.log(this.$.myproducts.lastResponse);

  }

});
