export default {
    settings: {
        test: {
            web: {
                entry: '',
                tests: {
                    pattern: '**/*.test.js',
                    path: 'tests'
                },
                src: {
                    path: 'src',
                    pattern: '**/*.js'
                }
            }
        }
    }
};
