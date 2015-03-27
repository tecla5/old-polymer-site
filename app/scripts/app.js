(function(document) {
  'use strict';

  document.addEventListener('polymer-ready', function() {
    // Perform some behaviour
    console.log('Polymer is ready to rock!');



  });





var DEFAULT_ROUTE = 'home';

var template = document.querySelector('#t');
var ajax, pages, scaffold, menu;
var cache = {};



//contact-received
//contact-failure
template.pages = [
    //url:'http://www.html5rocks.com/en/tutorials/webcomponents/shadowdom/'
    {name: 'Home', hash: 'home', url:'home.html' },
/*    {name: 'Services', hash: 'services', url: 'services.html'},
    {name: 'About Us', hash: 'about', url: 'about-us.html'},
    {name: 'Contact Us', hash: 'contact', url: 'contact-us.html'},
*/    {name: 'Blog', hash: 'blog', url: '//blog.tecla5.com'}

  ];

template.addEventListener('template-bound', function(e) {
  scaffold = document.querySelector('#scaffold');
  ajax = document.querySelector('#ajax');
  pages = document.querySelector('#pages');
  menu = document.querySelector('#menu');
  var keys = document.querySelector('#keys');

  // Allow selecting pages by num keypad. Dynamically add
  // [1, template.pages.length] to key mappings.
  var keysToAdd = Array.apply(null, template.pages).map(function(x, i) {
    return i + 1;
  }).reduce(function(x, y) {
    return x + ' ' + y;
  });
  keys.keys += ' ' + keysToAdd;

  this.route = this.route || DEFAULT_ROUTE; // Select initial route.
  menu.selected = DEFAULT_ROUTE;
});

template.keyHandler = function(e, detail, sender) {
  // Select page by num key.
  var num = parseInt(detail.key);
  if (!isNaN(num) && num <= this.pages.length) {
    pages.selectIndex(num - 1);
    return;
  }

  switch (detail.key) {
    case 'left':
    case 'up':
      pages.selectPrevious();
      break;
    case 'right':
    case 'down':
      pages.selectNext();
      break;
    case 'space':
      detail.shift ? pages.selectPrevious() : pages.selectNext();
      break;
  }
};

template.menuItemSelected = function(e, detail, sender) {
  if (detail.isSelected) {

    // Need to wait one rAF so <core-ajax> has it's URL set.
    this.async(function() {
      if (!cache[ajax.url]) {
        ajax.go();
      }
      /*
      else {
        this.injectBoundHTML(cache[ajax.url], pages.selectedItem.firstElementChild);
      }*/

      scaffold.closeDrawer();
    });

  }
};

template.ajaxLoad = function(e, detail, sender) {
  e.preventDefault(); // prevent link navigation.
};

template.onResponse = function(e, detail, sender) {

  if("http://blog.tecla5.com/"  === detail.response.URL){
    var html = detail.response.querySelector('.post-list');

    // Fix up link paths to not be local.
    [].forEach.call(html.querySelectorAll('a'), function(img) {
      img.setAttribute('href', img.href);
    });

  } else {
    var html = detail.response.body;
  }
  cache[ajax.url] = html.innerHTML; // Primitive caching by URL.

  // production problem fix
  if(pages.selectedItem === null){
    pages.selected = 0;
    pages.selectedItem = pages.childNodes[1];
  }
  this.injectBoundHTML(cache[ajax.url], pages.selectedItem.firstElementChild);
  
};

  
})(wrap(document));
