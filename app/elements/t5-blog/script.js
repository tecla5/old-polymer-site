(function() {
  Polymer({
    is: 't5-blog',

    ready: function(){
      this.$.myblog.generateRequest();
    },



    handleResponse: function(e,from1, to) {
      var article = e.detail.response.querySelector(from1);

      //article.querySelector('.byline').remove();
      // Fix up image paths to not be local.
      [].forEach.call(article.querySelectorAll('img'), function(img) {
        img.setAttribute('src',img.src);
      });
      // fix links
      [].forEach.call(article.querySelectorAll('a'), function(a) {
        a.setAttribute('href', a.href);
      });

      //cache[ajax.url] = html; // Primitive caching by URL.
      //this.injectBoundHTML(html, this.$.blog);
      to.innerHTML = article.innerHTML;
      return article;
    },

    handlePostResponse: function(e) {
      this.handleResponse(e,'.post',this.$.post);
    },

    handleBlogResponse: function(e) {
      var html = this.handleResponse(e,'.post-list',this.$.blog);

      this.$.mypost.url = html.querySelector('a').href;
      this.$.mypost.generateRequest();

    }


  });

})();
