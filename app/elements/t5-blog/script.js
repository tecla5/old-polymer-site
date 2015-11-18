'use strict';

Polymer({
  is: 't5-blog',

  ready() {
    this.$.myblog.generateRequest();
  },

  handleResponse(e, from1, to) {
    var article = e.detail.response.querySelector(from1);

    //article.querySelector('.byline').remove();
    // Fix up image paths to not be local.
    [].forEach.call(article.querySelectorAll('img'), (img) => {
      img.setAttribute('src', img.src);
    });
    // fix links
    [].forEach.call(article.querySelectorAll('a'), (a) => {
      a.setAttribute('href', a.href);
    });

    //cache[ajax.url] = html; // Primitive caching by URL.
    //this.injectBoundHTML(html, this.$.blog);
    to.innerHTML = article.innerHTML;
    return article;
  },

  handlePostResponse(e) {
    this.handleResponse(e, '.post', this.$.post);
  },

  handleBlogResponse(e) {
    var html = this.handleResponse(e, '.post-list', this.$.blog);

    this.$.mypost.url = html.querySelector('a').href;
    this.$.mypost.generateRequest();

  },
  openBlog() {
    var link = 'http://blog.tecla5.com/';
    window.open(link);
  }

});
