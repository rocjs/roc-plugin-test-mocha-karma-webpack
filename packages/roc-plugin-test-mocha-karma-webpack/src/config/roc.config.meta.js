import {
    isPath,
    isRegExp,
    isString,
    isBoolean
} from 'roc/validators';

export default {
    settings: {
        groups: {
            test: 'Settings related to testing'
        },
        descriptions: {
            test: {
                entry: 'The entry point that Webpack should be using for the tests, will not be needed to be ' +
                    'changed in most situations.',
                tests: {
                    pattern: 'A regex pattern for which the test files must match, will be used if no custom entry ' +
                        'point is defined.',
                    path: 'A path for which the test files are located, will be used if no custom entry ' +
                        'point is defined.'
                },
                src: {
                    pattern: 'A regex pattern for which the src files must match, will be used if no custom entry ' +
                        'point is defined. Will be used to get correct code coverage.',
                    path: 'A path for which the src files are located, will be used if no custom entry ' +
                        'point is defined. Will be used to get correct code coverage.'
                }
            }
        },
        validations: {
            build: {
                mode: /^dev|dist|test$/i
            },
            test: {
                entry: isPath,
                tests: {
                    path: isPath,
                    pattern: isRegExp
                },
                src: {
                    path: isPath,
                    pattern: isRegExp
                }
            }
        }
    },
    commands: {
        test: {
            options: [{
                name: 'grep',
                shortname: 'g',
                description: 'Will only run tests that match the given pattern. Will be compiled to a RegExp by Mocha.',
                validation: isString
            }, {
                name: 'watch',
                shortname: 'w',
                description: 'If the tests should run in watch mode.',
                default: false,
                validation: isBoolean
            }]
        }
    }
};
