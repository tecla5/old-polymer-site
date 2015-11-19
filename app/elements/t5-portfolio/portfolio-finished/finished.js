Polymer({
  is: 'portfolio-finished',

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

  ready() {
    this.productsList = [{
      'id': 0,
      'name': 'Card 1 - Cat 1',
      'header': 'http://lorempixel.com/350/200',
      'launcher': '../../images/ic_launcher.png'
    }, {
      'id': 1,
      'name': 'Card 2 - Cat 1',
      'header': 'http://lorempixel.com/350/200',
      'launcher': '../../images/ic_launcher.png'
    }];
  },

  _repeatRender() {
    this.paperCard = Polymer.dom(this.root).querySelectorAll('paper-card');
    this.animationConfig.entry.push({
      name: 'cascaded-animation',
      animation: 'transform-animation',
      transformFrom: 'translateY(100vh)',
      nodes: this.paperCard
    });
  },

  _openCard(event) {
    if (event.target.classList.contains('paper-fab')) {
      this.fire('updateShowcase', this.productsList[event.model.__data__['item.id']]);

      this.sharedElements = {
        'hero': event.target
      };

      this.fire('changePage', 'showcase');
    }
  }

});
