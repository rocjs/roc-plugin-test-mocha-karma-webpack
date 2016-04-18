import { Server } from 'karma';
import { appendSettings } from 'roc';

import { invokeHook } from '../roc/util';

export default () => (targets, { options: { grep, watch } }) => () => {
    if (targets.find((target) => target === 'web')) {
        appendSettings({ build: { mode: 'test'}});
        // Create Webpack configuration that is to be used in a browser.
        const rocBuilder = invokeHook('build-webpack', 'web');

        const karmaConfig = invokeHook('build-karma-config',
            grep,
            watch,
            rocBuilder.buildConfig
        );

        // TODO: Solve this workaround. If we don't listen for SIGPIPE and the
        // SIGPIPE times out, it will return an exit code 141.
        // This only happens on Linux and seems to be related to Socket.io not closing down.
        // See issue #2 for more information about this.
        process.on('SIGPIPE', () => {});

        new Server(karmaConfig, (exitCode) => {
            /* eslint-disable no-process-exit */
            process.exit(exitCode);
            /* eslint-enable */
        }).start();
    }
};
