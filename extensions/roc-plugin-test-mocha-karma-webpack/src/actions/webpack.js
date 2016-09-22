import { join } from 'path';

import micromatch from 'micromatch';
import webpack from 'webpack';

function getRegexp(regexp) {
    if (regexp instanceof RegExp) {
        return regexp;
    }

    return micromatch.makeRe(`./${regexp}`);
}

export default ({ context: { config: { settings } }, previousValue: webpackConfig }) => (target, coverage) => () => {
    const newWebpackConfig = { ...webpackConfig };

    newWebpackConfig.devtool = 'inline-source-map';
    newWebpackConfig.entry = {};
    newWebpackConfig.output = {};

    if (coverage) {
        newWebpackConfig.babel = {
            ...newWebpackConfig.babel,
            env: {
                test: {
                    plugins: [[
                        require.resolve('babel-plugin-__coverage__'),
                        {
                            only: `${settings.test.web.src.path}/**/*.js`,
                        },
                    ]],
                },
            },
        };
    }

    newWebpackConfig.resolve.alias = {
        ...newWebpackConfig.resolve.alias,
        src: join(process.cwd(), settings.test.web.src.path),
    };

    newWebpackConfig.plugins.push(
        new webpack.DefinePlugin({
            __PATH_TESTS__: JSON.stringify(join(process.cwd(), settings.test.web.tests.path)),
            __PATTERN_TESTS__: getRegexp(settings.test.web.tests.pattern),
            __PATH_SRC__: JSON.stringify(join(process.cwd(), settings.test.web.src.path)),
            __PATTERN_SRC__: getRegexp(settings.test.web.src.pattern),
        })
    );

    return newWebpackConfig;
};
