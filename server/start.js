process.env.NODE_ENV = 'production';
require('babel-register')({
  ignore: [/(node_modules)/],
  presets: ['es2015', 'react-app']
});
require("./index");