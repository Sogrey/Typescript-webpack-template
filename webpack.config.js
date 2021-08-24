const path = require('path')
 
module.exports = {
    entry: './src/index.ts', // 源入口
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader', 
            exclude: /node_modules/  // 排除
        }]
    },
    output: { // 打包输出
        filename: 'bundle.js',  // 输出文件
        path: path.resolve(__dirname, 'dist') // 输出目录
    }
}