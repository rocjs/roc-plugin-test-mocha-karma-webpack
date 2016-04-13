import { join } from 'path';

export default ({ settings, previousValue: rocBuilder }) => () => () => {
    let {
        buildConfig,
        builder,
        info
    } = rocBuilder;

    buildConfig.devtool = 'inline-source-map';
    buildConfig.entry = {};
    buildConfig.output = {};

    // Remove normal babel-loader
    buildConfig.module.loaders = buildConfig.module.loaders.filter((loader) => loader.id !== 'babel');

    buildConfig.module.loaders.push({
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
            /tests/
        ]
    });

    buildConfig.module.preLoaders.push({
        test: /\.js$/,
        loader: require.resolve('isparta-loader'),
        exclude: [
            /node_modules/,
            /tests/,
            /karma/,
            /src\/vendor/
        ]
    });

    buildConfig.resolve.alias = {
        ...buildConfig.resolve.alias,
        src: join(process.cwd(), settings.test.src.path)
    };

    buildConfig.resolve.fallback.push(join(__dirname, '..', '..', 'node_modules'));

    buildConfig.plugins.push(
        new builder.DefinePlugin({
            __PATH_TESTS__: JSON.stringify(join(process.cwd(), settings.test.tests.path)),
            __PATTERN_TESTS__: settings.test.tests.pattern,
            __PATH_SRC__: JSON.stringify(join(process.cwd(), settings.test.src.path)),
            __PATTERN_SRC__: settings.test.src.pattern
        })
    );

    return {
        buildConfig,
        builder,
        info
    };
};
