# super-minimal-aurelia
A barebones Aurelia + webpack2 build

This boilerplate is up to date as of March 5th, 2017, and incorporates the following:

* An ES6-based Aurelia implementation (rather than Typescript)
* Use of Babili (https://github.com/babel/babili) for minifying all .js files (Aurelia and views/viewmodels)
* Code-splitting by routes (using latest syntax in Aurelia's router to designate chunk creation according to files under a route)
* Use of plain CSS (rather than SASS/LESS) - (Note: I'll probably fork this to include a working PostCSS/CSSNext implementation for my own usage)

- based originally on https://github.com/jods4/aurelia-webpack-build

Hope this helps someone else out there!
