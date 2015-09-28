(function() {
  Polymer({
    is: 't5-home',
    behaviors: [
      Polymer.NeonAnimationRunnerBehavior,
      Polymer.NeonSharedElementAnimatableBehavior
    ],
    properties: {
      // START ANIMATIONS
      animationConfig: {
        value: function(){
          return {
            'entry': [{
              name: 'fade-in-animation',
              node: this
            },{
              name: 'transform-animation',
              transformFrom: 'translateX(-100vh)',
              node: this
            }],
            'exit': [{
              name: 'hero-animation',
              id: 'hero',
              fromPage: this
            },{
              name: 'fade-out-animation',
              node: this
            }]
          };
        }
      },
      // END ANIMATIONS
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
    computeItem: function(items) {
      return items && items[0] || {};
    },
    _repeatRender: function(){
      this.paperCard = Polymer.dom(this.root).querySelectorAll('paper-card');
      this.animationConfig.entry.push({
        name: 'cascaded-animation',
        animation: 'transform-animation',
        transformFrom: 'translateY(100vh)',
        nodes: this.paperCard
      });
    },
    _openCard: function(event){
      if(event.target.classList.contains('paper-fab')) {
        this.fire('updateShowcase',this.productsList[event.model.__data__['item.id']]);
        this.sharedElements = {
          'hero': event.target
        };
        this.fire('changePage','showcase');
      }
    }    
  });
})();
