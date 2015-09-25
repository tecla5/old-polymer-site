Express server
==============

Running
-------

```
npm start
```

Generate JSON for static pages:

-	localhost:8080/pages/about
-	localhost:8080/pages/services

Click *Raw JSON*, go to http://jsonlint.com/ and Validate, then copy/paste formatted JSON to a .json file in `app/data`.

```html
<iron-ajax
  auto
  url="/data/about.json"
  handle-as="json"
  last-response="{{items}}"
  last-error="{{lastError}}"
</iron-ajax>
```

In your Polymer script:

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

Static Analysis and tests
-------------------------

```
npm test
```
