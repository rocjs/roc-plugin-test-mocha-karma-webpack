# Settings for `roc-plugin-test-mocha-karma-webpack`

## Test
Settings related to testing

| Name    | Description                                                                                                                                      | Path               | CLI option           | Default     | Type       | Required |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ | -------------------- | ----------- | ---------- | -------- |
| entry   | The entry point that Webpack should be using for the tests, will not be needed to be changed in most situations.                                 | test.entry         | --test-entry         | `null`      | `Filepath` | No       |

### Src

| Name    | Description                                                                                                                                      | Path               | CLI option           | Default     | Type       | Required |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ | -------------------- | ----------- | ---------- | -------- |
| path    | A path for which the src files are located, will be used if no custom entry point is defined. Will be used to get correct code coverage.         | test.src.path      | --test-src-path      | `"src"`     | `Filepath` | No       |
| pattern | A regex pattern for which the src files must match, will be used if no custom entry point is defined. Will be used to get correct code coverage. | test.src.pattern   | --test-src-pattern   | `/\.js$/`   | `RegExp`   | No       |

### Tests

| Name    | Description                                                                                                                                      | Path               | CLI option           | Default     | Type       | Required |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ | -------------------- | ----------- | ---------- | -------- |
| path    | A path for which the test files are located, will be used if no custom entry point is defined.                                                   | test.tests.path    | --test-tests-path    | `"tests"`   | `Filepath` | No       |
| pattern | A regex pattern for which the test files must match, will be used if no custom entry point is defined.                                           | test.tests.pattern | --test-tests-pattern | `/\.test$/` | `RegExp`   | No       |
