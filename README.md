PlayKit JS Plugin Generator
==
The `PlayKit JS Plugin Generator` creates the files and folders needed to create a conventional plugin. It includes a test environment so that you can easily see your changes as you develop your plugin. It even generates the final plugin files that you can use when you are ready to release it.

`PlayKit JS Plugin Generator` uses the `playkit-js` repos conventions:
* Written in `ECMAScript6`.
* Statically analysed using `Flow` .
* Transpiled in `ECMAScript5` using `Babel`.
* Bundled using `Webpack`.
* Runs tests using `Karma` & `Mocha`.
* Using `Yarn` as a package manager for your code.
* Using `standard-version` to release and automate versions releases.


## Table of Contents
 
- [Folder Structure](#folder-structure)
- [Setup Your Environment](#setup-your-environment)
- [Generate Your Plugin Files](#generate-your-plugin-files)
- [Common Questions](#common-questions)
  - [How to run the plugin tests?](#how-to-run-the-plugin-tests?)
  - [How to check for flow errors?](#how-to-check-for-flow-errors?)
  - [How to check for eslint errors?](#how-to-check-for-eslint-errors?)
  - [How to build my project?](#how-to-build-my-project?)
  - [Where do I adding tests to my plugin?](#where-do-i-adding-tests-to-my-plugin?)
  - [How can I debug and integrates my plugin with the player?](#how-can-i-debugging-and-integrates-my-plugin-with-the-player?)
  
## Folder Structure
`PlayKit JS Plugin Generator` generates the following project structure:

	- src
		- index.html
		- index.js
		- plugin.js
	- test
		- setup
			- karma.js
			- load-specs.js
			- prepare-test-environment.js
		- src
			- plugin.spec.js
		- .eslintrc.json
	- .babelrc
	- .editorconfig
	- .eslintrc.json
	- .flowconfig
	- .gitignore
	- .travis.yml
	- karma.conf.js
	- package.json
	- README.md
	- webpack.config.js

## Setup Your Environment
1. Create a local folder on your computer. For this example, we will create one named ***playkit-js-my-plugin***. This is where the generator files and your plugin files will go.
2. Install [Yeoman](http://yeoman.io) and `generator-playkit-js-plugin` using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).
```bash
npm install -g yo
npm install -g generator-playkit-js-plugin
```
3. Install [Yarn](https://yarnpkg.com/lang/en/docs/install/) globally on your machine.

## Generate Your Plugin Files
1. Open the Terminal app in the folder you created in a previous step. For this example, open the Terminal app in the ***playkit-js-my-plugin*** folder.
2. In the Terminal app, run the following command:
```bash
yo playkit-js-plugin
```
3.  You will see the following output:
 ```bash
Dans-MacBook-Pro:playkit-js-my-plugin dan.ziv$ yo playkit-js-plugin
? Your plugin name? (my-plugin-name) 
```
4. Enter a comma separated plugin name. For example, if you want to call your plugin class MyPlugin, enter my-plugin.
Finally click Enter. 
```bash
Dans-MacBook-Pro:playkit-js-my-plugin dan.ziv$ yo playkit-js-plugin
? Your plugin name? my-plugin
   create package.json
   create .babelrc
   create .editorconfig
   create .eslintrc.json
   create .flowconfig
   create .gitignore
   create karma.conf.js
   create .travis.yml
   create test/setup/karma.js
   create test/setup/load-specs.js
   create test/setup/prepare-test-environment.js
   create test/.eslintrc.json
   create README.md
   create webpack.config.js
   create src/my-plugin.js
   create src/index.js
   create test/src/my-plugin.spec.js
   yarn install v1.3.2
   info No lockfile found.
   [1/4] 🔍  Resolving packages...
```
`Yarn` installation of project dependencies will start automatically. 

**Now your environment is ready to go and you can start develop your plugin!**

## Common Questions
### How to run the plugin tests?
In terminal app, under your project path, run the following command:
```bash
yarn run test
```
> Note that if you're using an IDE such as WebStorm or VSCode you can simply run this scripts via there.
#
### How to check for flow errors?
In terminal app, under your project path, run the following command:
```bash
yarn run flow
```
### How to check for eslint errors?
In terminal app, under your project path, run the following command:
```bash
yarn run eslint
```
#
### How to build my project?
In terminal app, under your project path, run the following command:
```bash
yarn run build
```
### Where do I adding tests to my plugin?
In the ***test/src/plugin.spec.js*** file.

Of course you can add and use any other files that you wish.
> Note that depends on our Karma config the test files should postfix with .*spec* so that Karma will include them when running the tests.
#
### How can I debug and integrates my plugin with the player?
1. Build your project as explained above (Observe a ***/dist*** folder has been created in your project).
2. Open the ***src/index.html*** file.
3. In ***index.html***, add  a script tag referring to your player library.
```html
...
<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <script src="PATH/TO/PLAYER/LIB/FILENAME.js"></script>
  <script src="./playkit-my-plugin.js"></script>
</head>
....
```
4. In terminal app, under your project path, run the following command:
```bash
yarn run dev
```
5. Observe on which port the webpack-dev-server is opened (usually on 8080).
6. Open browser on ***localhost:XXXX*** 

### What if my player script file is locally?
 If your player file is locally on your machine, you'll need to manipulate and edit the ***webpack.config.js*** file.

1. Copy & paste your player file to wherever you want in your project. Let's say we paste it under ***/src*** folder.
2. In ***index.html***, add  a script tag referring to your player library. Set the path as `src='./FILENAME.js'`.
```html
...
<head>
  <meta charset="UTF-8">
  <title>Title</title>
  <script src="./FILENAME.js"></script>
  <script src="./playkit-my-plugin.js"></script>
</head>
....
```
3. Go to ***webpack.config.js*** file, and observe the following code in line 16:
```js
if (PROD) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({sourceMap: true}));
} else {
  plugins.push(new CopyWebpackPlugin([{
    from: '',
    to: '.'
  }]));
}
```
Change it to:
```js

if (PROD) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({sourceMap: true}));
} else {
  plugins.push(new CopyWebpackPlugin([{
    from: '../src/FILENAME.js',
    to: '.'
  }]));
}
```
4. In terminal app, under your project path, run the following command:
```bash
yarn run dev
```
5. Observe on which port the webpack-dev-server is opened (usually on 8080).
6. Open browser on ***localhost:XXXX***
