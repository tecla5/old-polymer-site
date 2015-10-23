(function() {
  Polymer({
    is: 't5-blog',

    handleResponse: function(e) {
      console.log('handleResponse', e);
      var article = e.detail.response.querySelector('.post');
      console.log('handleResponse', article);

      //article.querySelector('.byline').remove();

      // Fix up image paths to not be local.
      [].forEach.call(article.querySelectorAll('img'), function(img) {
        img.setAttribute('src', img.src);
      });

      var html = article.innerHTML;

      //cache[ajax.url] = html; // Primitive caching by URL.
      //this.injectBoundHTML(html, this.$.blog);
      
      this.$.blog.innerHTML = html;

    }

  });

})();
