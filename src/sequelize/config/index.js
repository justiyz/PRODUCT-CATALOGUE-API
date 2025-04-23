
const {devEnv, prodEnv, testEnv} = require('./env/index');

const {PRODUCTCATALOGUE_NODE_ENV} = process.env;
const config = PRODUCTCATALOGUE_NODE_ENV === 'development' ? devEnv
    : PRODUCTCATALOGUE_NODE_ENV === 'production' ? prodEnv
        : testEnv;

module.exports = config;
