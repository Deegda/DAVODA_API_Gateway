'use strict';

module.exports = {
    apps: [
        {
            name: 'DAVODA_API_Gateway',
            script: 'dist/main.js',
            env: {
                REPOSITORY: '/home/ubuntu/DAVIDA_API_Gateway'
            }
        }
    ]
};
