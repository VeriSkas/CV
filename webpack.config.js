const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    alias: {
      pages: path.resolve(__dirname, 'src/pages/'),
      uiComponents: path.resolve(__dirname, 'src/components/UI/'),
      myComponents: path.resolve(__dirname, 'src/components/'),
      constants: path.resolve(__dirname, 'src/constants/'),
      styles: path.resolve(__dirname, 'src/constants/styles/'),
      queries: path.resolve(__dirname, 'src/apollo/queries/'),
      apollo: path.resolve(__dirname, 'src/apollo/'),
      hooks: path.resolve(__dirname, 'src/hooks/'),
      utils: path.resolve(__dirname, 'src/utils/'),
      i18n: path.resolve(__dirname, 'src/i18n/'),
      interfaces: path.resolve(__dirname, 'src/types/interfaces/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        use: 'ts-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
    }),
  ],
};
