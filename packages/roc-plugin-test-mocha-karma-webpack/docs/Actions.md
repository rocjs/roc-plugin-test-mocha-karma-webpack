# Actions for `roc-plugin-test-mocha-karma-webpack`

## Actions
* [roc-plugin-test-mocha-karma-webpack](#roc-plugin-test-mocha-karma-webpack)
  * [karma](#karma)
  * [mochaKarma](#mochaKarma)
  * [mochaKarmaWebpack](#mochaKarmaWebpack)

## roc-plugin-test-mocha-karma-webpack

### karma

Builds the default Karma configuration

__Connects to extension:__ Not specified  
__Connects to hook:__ `build-karma-config`  

### mochaKarma

Adds support for running tests with Karma using Webpack.

__Connects to extension:__ Not specified  
__Connects to hook:__ `run-test-command`  

### mochaKarmaWebpack

Adds Webpack configuration specific for tests.

__Connects to extension:__ `roc-plugin-test-mocha-karma-webpack`  
__Connects to hook:__ `build-webpack`  
