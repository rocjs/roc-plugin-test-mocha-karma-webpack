export default ({ settings }) => (
    grep,
    watch,
    webpackConfig
) => () => {
    const entry = settings.test.entry || require.resolve('./utils/entry.js');

    return {
        plugins: [
            require.resolve('karma-webpack'),
            require.resolve('karma-mocha'),
            require.resolve('karma-coverage'),
            require.resolve('karma-spec-reporter'),
            require.resolve('karma-sourcemap-loader'),
            require.resolve('karma-phantomjs-launcher')
        ],

        browsers: [ 'PhantomJS' ],

        phantomjsLauncher: {
            // Have PhantomJS exit if a ResourceError is encountered (useful if karma exits without killing phantom)
            exitOnResourceError: true
        },

        singleRun: !watch,

        frameworks: [ 'mocha' ],

        files: [entry],

        preprocessors: {
            [entry]: ['webpack', 'sourcemap']
        },

        reporters: [
            'spec',
            'coverage'
        ],

        client: {
            mocha: {
                grep
            }
        },

        coverageReporter: {
            dir: 'coverage/karma',
            reporters: [
                { type: 'html', subdir: 'html' },
                { type: 'cobertura', subdir: 'cobertura' },
                { type: 'text-summary', subdir: 'summary', file: 'report.txt' }
            ]
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            noInfo: true
        },

        // Set the basePath to be where the command is running from, normally this is resolved to this file location
        basePath: process.cwd()
    };
};
