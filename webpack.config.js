const path = require(`path`);

module.exports = {
    mode: `development`,
    entry: `./src/main.js`,
    output: {
        filename: `bundle.js`,
        path: path.join(__dirname, `dist`)
    },
    devtool: `source-map`,
    devServer: {
        contentBase: path.join(__dirname, `dist`),
        publicPath: `http://localhost:8080/`,
        compress: true,
        watchContentBase: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
