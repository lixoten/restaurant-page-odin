project-folder/
│
├── README.md
│
├── src/
│   ├── index.html
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── script.js
│
├── assets/
│   └── images/
│       └── logo.png
│
└── dist/
    └── index.html

=====================================================
`npm init`
`npm install webpack webpack-cli --save-dev`

`npm install --save-dev html-webpack-plugin`
`npm install --save-dev css-loader`
`npm install --save-dev mini-css-extract-plugin`
`npm install --save-dev file-loader`

* Things to do 
  * Make sure to remove
    * ---script tag
    * ---css tag ------ DEPENDS on how we want to implement
  * add index.js
  * modify applicable files for image imports
    * do not forget index.html if any images are used
  * update .gitignore file if needed


================================================================================
================================================================================
================================================================================
================================================================================
### Note:  It can generate an HTML file for you, or you can provide your own template. we use template
npm install webpack webpack-cli --save-dev

```javascript
const path = require('path');

module.exports = {
  mode: "development",
  //entry: './path/to/my/entry/file.js',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    //filename: 'my-first-webpack.bundle.js'
    filename: 'main.js',
  },
  // optional helps with debugging as in making line numnbers match  
  devtool: "source-map",
  // module: {
  //   rules: [
  //     {
  //       test: /\.txt$/,
  //       use: 'raw-loader'
  //     }
  //   ]
  // }
};
```



================================================================================
================================================================================
================================================================================
================================================================================
### Note:  It can generate an HTML file for you, or you can provide your own template. we use template
npm install --save-dev html-webpack-plugin

`const HtmlWebpackPlugin = require('html-webpack-plugin');`
```javascript

module.exports = {
  // ...
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
      minify: false
    }),
  ],
  // ...
};
```



================================================================================
================================================================================
================================================================================
================================================================================
### Note: This allows you to import CSS files directly in your JavaScript files.
npm install --save-dev css-loader
in your main entry js u will need
`import './styles.css';`

```javascript
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
    ],
  },
  // ...
};
```

================================================================================
================================================================================
================================================================================
================================================================================
### Note: extracts CSS into separate files. It is useful for when you want to separate your CSS styles from your JavaScript bundles
npm install --save-dev mini-css-extract-plugin

`const MiniCssExtractPlugin = require('mini-css-extract-plugin');`

```javascript
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  // ...
};
```



================================================================================
================================================================================
================================================================================
================================================================================
### Note:  import files directly in your JavaScript files
npm install --save-dev file-loader
example:
```javascript
import image1 from './assets/images/bolinho.jpg';
import image2 from './assets/images/farofa.jpg';

const item1 = menuItem(image1, "Bolinho de Bacalahu", "$3.00 Each");
const item2 = menuItem(image2, "Farofa Dish", "$12.00");
//or 
<img src=image1 alt="poop">
```



```javascript
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            },
          },
        ],
      },
    ],
  },
  // ...
};
```