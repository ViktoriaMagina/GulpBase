module.exports = {
    mode: 'none',
    entry: {
        index: './src/scripts/index.js',  //При необходимости вы можете добавить новую точку входа
        second: './src/scripts/second.js',
    },
    output: {
      filename: '[name].js',
      clean: true,
    },
    module: {
      rules: [
        {
            test: /\.js/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }
      ],
    },
  };