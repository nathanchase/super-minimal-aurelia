# super-minimal-aurelia
A barebones Aurelia + webpack2 build with decorators and async/await support

This boilerplate is up to date as of April 13th, 2017, and incorporates the following:

* An ES6-based Aurelia implementation (rather than Typescript)
* Code-splitting by routes (using latest syntax in Aurelia's router to designate chunk creation according to files under a route)
* Use of plain CSS (rather than SASS/LESS)
* Fully working in all evergreen browsers AND Internet Explorer 11, 10, and 9!

Here's all you need to get started. 

**Step 1)** Install [npm](http://blog.npmjs.org/post/85484771375/how-to-install-npm), and then install [Yarn](https://yarnpkg.com) on your command line:

`npm install -g yarn`

**Step 2)** Install the dependencies:

`yarn`

**Step 3)** Test it out in your browser (at http://localhost:8080):

`yarn run web`

**Step 4)** _(optional)_ Build an optimized version ready to upload to a web server:

`yarn run prod`

**Step 5)** Enjoy how easy that was!

Hope this helps someone else out there!

-Nathan

--------------------------------------------------------------------

Special thanks to:

jods4

nashwaan

- based originally on https://github.com/jods4/aurelia-webpack-build
