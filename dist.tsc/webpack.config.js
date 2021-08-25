"use strict";
var path = require('path');
module.exports = {
    // entry: './src/index.ts', // 源入口
    entry: './dist.tsc/src/index.js',
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/ // 排除
            }]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist') // 输出目录
    }
};
