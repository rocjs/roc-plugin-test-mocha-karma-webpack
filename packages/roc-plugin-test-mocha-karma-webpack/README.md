# roc-plugin-test-mocha-karma-webpack
Adds a way to easily test Webpack projects in Roc.

## Documentation
- [Actions](/packages/roc-plugin-test-mocha-karma-webpack/docs/Actions.md)
- [Commands](/packages/roc-plugin-test-mocha-karma-webpack/docs/Commands.md)
- [Hooks](/packages/roc-plugin-test-mocha-karma-webpack/docs/Hooks.md)
- [Settings](/packages/roc-plugin-test-mocha-karma-webpack/docs/Settings.md)

## Exports
Will give access to [expect](https://www.npmjs.com/package/expect) by default.

## Alias
Will provide an alias to make it easy to include code in the tests from the path that has been configured in `settings.test.node.src.path` using `src` as the alias.

Using this we can go from this
```js
import myFunction from '../../../src/functions/myFunction';
```
to
```js
import myFunction from 'src/functions/myFunction';
```
