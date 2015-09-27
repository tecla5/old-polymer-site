![](./app/favicon.ico)

Tecla5 site
-----------

> Site for tecla5 group

online [tecla5](http://www.tecla5.com)

### Included out of the box:

-	[Polymer](http://polymer-project.org), [Paper](https://elements.polymer-project.org/browse?package=paper-elements), [Iron](https://elements.polymer-project.org/browse?package=iron-elements) and [Neon](https://elements.polymer-project.org/browse?package=neon-elements) elements
-	[Material Design](http://www.google.com/design/spec/material-design/introduction.html) layout
-	Routing with [Page.js](https://visionmedia.github.io/page.js/)
-	Unit testing with [Web Component Tester](https://github.com/Polymer/web-component-tester)
-	Optional offline setup through [Platinum](https://elements.polymer-project.org/browse?package=platinum-elements) Service Worker elements
-	End-to-end Build Tooling (including [Vulcanize](https://github.com/Polymer/vulcanize)\)

Getting Started
---------------

to edit as developer:

1.	Get a copy of the code.
2.	Install the dependencies if you don't already have them.
3.	Modify the application to your liking.
4.	Deploy your production code.

### Get the code

[Download](https://github.com/tecla5/site) and use branch you want to work. /releases/latest

### Install dependencies

#### NVM

github [nvm](https://github.com/creationix/nvm)

Install Node 4+ via nvm

```sh
nvm ls-remote
nvm install 4.1.1
nvm use 4.1.1
nvm alias default 4.1.1
nvm ls
```

#### Quick-start (for experienced users)

With Node.js installed, run the following one liner from the root of your Polymer Starter Kit download:

```sh
npm install -g gulp bower && npm install && bower install
```

#### Prerequisites (for everyone)

The full starter kit requires the following major dependencies:

-	Node.js, used to run JavaScript tools from the command line.
-	npm, the node package manager, installed with Node.js and used to install Node.js packages.
-	gulp, a Node.js-based build tool.
-	bower, a Node.js-based package manager used to install front-end packages (like Polymer).

**To install dependencies:**

1) Check your Node.js version.

```sh
node --version
```

The version should be at or above 0.12.x.

2) If you don't have Node.js installed, or you have a lower version, go to [nodejs.org](https://nodejs.org) and click on the big green Install button.

3) Install `gulp` and `bower` globally.

```sh
npm install -g gulp bower
```

This lets you run `gulp` and `bower` from the command line.

4) Install the starter kit's local `npm` and `bower` dependencies.

```sh
cd polymer-starter-kit && npm install && bower install
```

This installs the element sets (Paper, Iron, Platinum) and tools the starter kit requires to build and serve apps.

### Development workflow

#### Manage element imports

Manage imports via `.yml` files, that list elements to import

-	`app/elements/imports/`
-	`app/elements/app.yml`

```sh
npm run elements
```

This will generate `import-elements.html` and `app-elements` in `app/elements`. These files will be auto-imported by `elements/elements.html` which is imported by `index.html`.

All imports are auto-configured!

#### Serve / watch

```sh
gulp serve
```

This outputs an IP address you can use to locally test and another that can be used on devices connected to your network.

#### Run tests

```sh
gulp test:local
```

This runs the unit tests defined in the `app/test` directory through [web-component-tester](https://github.com/Polymer/web-component-tester).

#### Build & Vulcanize

```sh
gulp
```

Build and optimize the current project, ready for deployment. This includes linting as well as vulcanization, image, script, stylesheet and HTML optimization and minification.

-	Application Theming
-	Unit Testing
-	Dependency Management
-	Service Worker

Application Theming & Styling
-----------------------------

Polymer 1.0 introduces a shim for CSS custom properties. We take advantage of this in `app/styles/app-theme.html` to provide theming for your application. You can also find our presets for Material Design breakpoints in this file.

[Read more](https://www.polymer-project.org/1.0/docs/devguide/styling.html) about CSS custom properties.

### Styling

1.	***main.css*** - to define styles that can be applied outside of Polymer's custom CSS properties implementation. Some of the use-cases include defining styles that you want to be applied for a splash screen, styles for your application 'shell' before it gets upgraded using Polymer or critical style blocks that you want parsed before your elements are.
2.	***app-theme.html*** - to provide theming for your application. You can also find our presets for Material Design breakpoints in this file.
3.	***shared-styles.html*** - to shared styles between elements and index.html.
4.	***element styles only*** - styles specific to element. These styles should be inside the `<style></style>` inside `template`.

collaborations
==============

[jeagle](http://mu.jeagle.es/groupjs/)

[pugle](http://pugle.net/)

[ibearts](http://ibearts.com/)

TODO:
-----

-	add images
-	add services page
