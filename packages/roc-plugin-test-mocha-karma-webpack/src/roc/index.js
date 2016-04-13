import {
    isString,
    isObject,
    isBoolean
} from 'roc/validators';

import config from '../config/roc.config.js';
import meta from '../config/roc.config.meta.js';

import test from '../actions/test';
import builder from '../actions/builder';
import createKarmaConfig from '../karma';

import { name, version } from './util';

export default {
    name,
    version,
    dependencies: {
        'roc-package-webpack-web': '^1.0.0-alpha'
    },
    plugins: [require.resolve('roc-abstract-plugin-test')],

    config,
    meta,
    actions: {
        mochaKarma: {
            hook: 'run-test-command',
            description: 'Adds support for running tests with Karma using Webpack.',
            action: () => test
        },
        mochaKarmaWebpack: {
            extension: 'roc-plugin-test-mocha-karma-webpack',
            hook: 'build-webpack',
            description: 'Adds Webpack configuration specific for tests.',
            action: () => builder
        },
        karma: {
            hook: 'build-karma-config',
            description: 'Builds the default Karma configuration',
            action: () => createKarmaConfig
        }
    },
    hooks: {
        'build-webpack': {
            description: 'Used to create the final Webpack configuration object for tests.',
            initialValue: {},
            returns: isObject(),
            arguments: [{
                name: 'target',
                validation: isString,
                description: 'The target for which the Webpack configuration should be build for.'
            }]
        },
        'build-karma-config': {
            description: 'Used to create the final Karma configuration for tests.',
            initialValue: {},
            returns: isObject(),
            arguments: [{
                name: 'grep',
                validation: isString,
                description: 'RegExp that will be compiled by Mocha and limit what tests that should run.'
            }, {
                name: 'watch',
                validation: isBoolean,
                description: 'If watch mode should be enabled.'
            }, {
                name: 'webpackConfig',
                validation: isObject(),
                description: 'Webpack configuration to use.'
            }]
        }
    }
};
