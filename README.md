# Code for a post For codegaze.github.io

This repository was created from another [Axel Rauschmayer's repository](https://github.com/rauschma/webpack-babel-demo/) to help a blog post I did about creating an ES6 module.

Installation:

In the folder you downloaded this repository:

```
npm install
```

There are three ways in which you can build and run the web app:

* Build once:
    * `npm run build`
    * Open `build/index.html`
* Watch files continuously, rebuild incrementally, whenever one of them changes:
    * `npm run watch`
    * Open `build/index.html`, manually reload page in browser whenever there was a change
* Hot reloading via webpack dev server:
    * `npm start`
    * Go to `http://localhost:8080/`, page reloads automatically when there are changes
