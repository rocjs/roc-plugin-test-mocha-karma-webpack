# Commands for `roc-plugin-test-mocha-karma-webpack`

## General Information
All commands can be called with some additional options as can be seen below.

### General options

| Name            | Description                                                                                                   | Required |
| --------------- | ------------------------------------------------------------------------------------------------------------- | -------- |
| -c, --config    | Path to configuration file, will default to roc.config.js in current working directory.                       | No       |
| -d, --directory | Path to working directory, will default to the current working directory. Can be either absolute or relative. | No       |
| -h, --help      | Output usage information.                                                                                     | No       |
| -V, --verbose   | Enable verbose mode.                                                                                          | No       |
| -v, --version   | Output version number.                                                                                        | No       |

## Commands
* [test](#test)

## test
__Runs tests on the current project.__

```
roc-plugin-test-mocha-karma-webpack test [targets]
```

### Arguments

| Name        | Description                                                                              | Required | Type            | Default |
| ----------- | ---------------------------------------------------------------------------------------- | -------- | --------------- | ------- |
| targets     | The targets the project should be tested for, overrides the settings if provided         | No       | `Context based` |         |

### Command options

| Name        | Description                                                                              | Required | Type            | Default |
| ----------- | ---------------------------------------------------------------------------------------- | -------- | --------------- | ------- |
| -g, --grep  | Will only run tests that match the given pattern. Will be compiled to a RegExp by Mocha. | No       | `String`        |         |
| -w, --watch | If the tests should run in watch mode.                                                   | No       | `Boolean`       | `false` |

### Settings options
* [build](/packages/roc-plugin-test-mocha-karma-webpack/docs/Settings.md#build)
* [test](/packages/roc-plugin-test-mocha-karma-webpack/docs/Settings.md#test)
