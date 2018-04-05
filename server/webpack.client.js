const path = require('path');

module.exports = {
    // Tell webpack the root file of server app
    entry: './src/client/client.js',
    // Tell webpack where to save finished bundle file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    // Tell webpack to run babel on every file it finds
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        [
                            'env',
                            {
                                targets: {
                                    browsers: ['last 2 versions']
                                }
                            }
                        ]
                    ]
                }
            }
        ]
    }
};