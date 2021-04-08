const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const TerserPlugin = require('terser-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

const env = process.env.NODE_ENV
const DOC = env === 'doc'
const RELEASE = env === 'production'

// 开发：main.js 打包入口 widgets/index.js

module.exports = {
  entry: {
    main: RELEASE ? './src/widget.js' : './src/main.js'
  },
  mode: RELEASE ? 'production' : 'development',
  output: {
    path: DOC ? path.resolve(__dirname, './docs') : path.resolve(__dirname, './dist'),
    publicPath: DOC ? '' : '/dist/',
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            // less: [
            //   'vue-style-loader',
            //   'css-loader',
            //   'less-loader'
            // ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(svg|eot|ttf|woff|woff2)(\?.*)?(#.*)?$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.runtime.esm.js',
      '@': resolve('src')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    disableHostCheck: true,
    historyApiFallback: true,
    // noInfo: true,
    overlay: true,
    port: 8090
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  performance: {
    hints: 'warning'
  },
  devtool: 'cheap-module-eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = false
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ])
  module.exports.optimization = {
    minimize: true,
    // minimizer: [
    //   new TerserPlugin({
    //     parallel: true,
    //     extractComments: false,
    //     terserOptions: {
    //       output: {
    //         comments: false
    //       }
    //     }
    //   })
    // ]
  }
}
