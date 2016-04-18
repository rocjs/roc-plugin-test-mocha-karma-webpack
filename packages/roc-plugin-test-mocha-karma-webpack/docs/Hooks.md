# Hooks for `roc-plugin-test-mocha-karma-webpack`

## Hooks
* [roc-abstract-plugin-test](#roc-abstract-plugin-test)
  * [run-test-command](#run-test-command)
* [roc-plugin-test-mocha-karma-webpack](#roc-plugin-test-mocha-karma-webpack)
  * [build-karma-config](#build-karma-config)
  * [build-webpack](#build-webpack)

## roc-abstract-plugin-test

### run-test-command

Use to add things that should react to the build command being called.

__Initial value:__ _Nothing_  
__Expected return value:__ _Nothing_

## roc-plugin-test-mocha-karma-webpack

### build-karma-config

Used to create the final Karma configuration for tests.

__Initial value:__ `{}`  
__Expected return value:__ `{}`

#### Arguments

| Name          | Description                                                                 | Type      |
| ------------- | --------------------------------------------------------------------------- | --------- |
| grep          | RegExp that will be compiled by Mocha and limit what tests that should run. | `String`  |
| watch         | If watch mode should be enabled.                                            | `Boolean` |
| webpackConfig | Webpack configuration to use.                                               | `{}`      |

### build-webpack

Used to create the final Webpack configuration object for tests.

__Initial value:__ `{}`  
__Expected return value:__ `{}`

#### Arguments

| Name   | Description                                                         | Type     |
| ------ | ------------------------------------------------------------------- | -------- |
| target | The target for which the Webpack configuration should be build for. | `String` |
