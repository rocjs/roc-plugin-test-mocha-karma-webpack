export roc from './roc';

/*

"test:karma": "NODE_ENV=test karma start karma/karma.fast.js",
    "test:karma:live": "NODE_ENV=test karma start karma/karma.fast.js --auto-watch --no-single-run",
    "test:karma:client": "NODE_ENV=test karma start karma/karma.fast.client.js",
    "test:node": "npm run test:node:server && npm run test:node:shared",
    "test:node:coverage": "NODE_ENV=test && mkdir -p build/test-reports/node && babel-node node_modules/.bin/isparta cover --config .istanbul-node.yml node_modules/.bin/_mocha -- $(find tests/shared -name '*.test.js' && find tests/server -name '*.test.js')",
    "test:node:live": "npm run test:node:server -- -w & npm run test:node:shared -- -w",
    "test:node:server": "NODE_ENV=test mocha $(find tests/server -name '*.test.js') --compilers js:babel/register",
    "test:node:shared": "NODE_ENV=test mocha $(find tests/shared -name '*.test.js') --compilers js:babel/register",
    */
