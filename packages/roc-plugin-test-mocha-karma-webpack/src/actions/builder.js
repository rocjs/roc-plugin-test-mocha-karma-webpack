import { join } from 'path';
import micromatch from 'micromatch';

export default ({ settings, previousValue: rocBuilder }) => (target, coverage) => () => {
    let {
        buildConfig,
        builder,
        info
    } = rocBuilder;

    buildConfig.devtool = 'inline-source-map';
    buildConfig.entry = {};
    buildConfig.output = {};

    if (coverage) {
        buildConfig.babel = {
            ...buildConfig.babel,
            env: {
                test: {
                    plugins: [ [
                        require.resolve('babel-plugin-__coverage__'),
                        {
                            only: settings.test.web.src.path + '/**/*.js'
                        }
                    ] ]
                }
            }
        };
    }

    buildConfig.resolve.alias = {
        ...buildConfig.resolve.alias,
        src: join(process.cwd(), settings.test.web.src.path)
    };

    buildConfig.resolve.fallback.push(join(__dirname, '..', '..', 'node_modules'));

    buildConfig.plugins.push(
        new builder.DefinePlugin({
            __PATH_TESTS__: JSON.stringify(join(process.cwd(), settings.test.web.tests.path)),
            __PATTERN_TESTS__: getRegexp(settings.test.web.tests.pattern),
            __PATH_SRC__: JSON.stringify(join(process.cwd(), settings.test.web.src.path)),
            __PATTERN_SRC__: getRegexp(settings.test.web.src.pattern)
        })
    );

    return {
        buildConfig,
        builder,
        info
    };
};

function getRegexp(regexp) {
    if (regexp instanceof RegExp) {
        return regexp;
    }

    return micromatch.makeRe('./' + regexp);
}
