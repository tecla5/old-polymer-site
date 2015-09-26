Express server
==============

### Install

`npm install`

### Running

```
npm start
```

### Data Driven Elements

The server acts like a simple Content Management System (CMS) to generate JSON data for each page. The data can be managed in the `server/pages` `index.js` files and via the Markdown files in each `txt` folder per page.

When data had been modified, generate JSON for static pages, by starting server:

```
npm start
```

Then for the pages that you want to re-generate JSON data, open in the page in the browser.

-	localhost:8080/pages/about
-	localhost:8080/pages/home
-	localhost:8080/pages/partners
-	localhost:8080/pages/portfolio
-	localhost:8080/pages/services
-	localhost:8080/pages/team

Click *Raw JSON* and copy/paste to the right `.json` file in `app/data` or use `write=true` as in `localhost:8080/pages/about?write=true`. Then the data will be written the `.json` file automatically ;)

Later we might use [MSON](https://github.com/apiaryio/mson)

### Feeding pages with JSON data

Now link the json in your element, such as the `about` page:

```html
<iron-ajax
  auto
  url="/data/about.json"
  handle-as="json"
  last-response="{{items}}"
  last-error="{{lastError}}"
</iron-ajax>
```

In your Polymer script add properties for `items` and `lastError`:

```js
properties: {
  items: {
    type: Array,
    notify: true
  },
  lastError: {
    type: String,
    notify: true
  }
}
```

Then add an iterator to use and display the json data:

```html
<template is="dom-repeat" items="{{items}}">
  <ui-section image="{{item.image}}" caption="{{item.caption}}" markdown="{{item.content}}"/>
</template>
```

Static Analysis and tests
-------------------------

```
npm test
```
