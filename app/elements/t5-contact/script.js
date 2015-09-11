
(function() {
  Polymer({
    is: 't5-contact',

    properties: {
      action: {
        type: String,
        value: '/__/forms/contact'
      },
    }


  });

})();

/*jshint unused:false*/
/*jshint latedef:false*/
function clickHandler(event) {
  console.log('clickHandler', event);

  //Polymer.dom(event).localTarget.parentElement
  var form = document.getElementById('form');
  form.submit();

}
