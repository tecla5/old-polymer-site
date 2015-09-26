Express server
==============

### Install

`npm install`

### Running

```
npm start
```

### Data Driven Elements

Generate JSON for static pages:

-	localhost:8080/pages/home
-	localhost:8080/pages/about
-	localhost:8080/pages/services
-	localhost:8080/pages/team

Click *Raw JSON* and copy/paste to a `.json` file in `app/data`.

Altrnatively use `write=true` as in `localhost:8080/pages/about?write=true`. Then it will write the json file automatically ;)

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
