import { Server } from 'karma';
import { appendSettings } from 'roc';

import { invokeHook } from '../roc/util';

export default () => (targets, { options: { grep, watch } }) => () => {
    if (targets.find((target) => target === 'web')) {
        appendSettings({ build: { mode: 'test'}});
        // Create Webpack configuration that is to be used in a browser.
        const rocBuilder = invokeHook('build-webpack', 'web');

        const karmaConfig = invokeHook('build-karma-config',
            watch,
            grep,
            rocBuilder.buildConfig
        );

        new Server(karmaConfig).start();
    }
};
