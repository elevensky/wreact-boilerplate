/**
  http://eslint.cn/docs/user-guide/configuring
  0|off 关闭、1|warn 开启警告级别、2|error 开启错误级别
*/

module.exports = {
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "extends": ["airbnb", "prettier"],
  "plugins": ["prettier"],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "parser": "babel-eslint",
  "rules": {
    "prettier/prettier": ["error"],
    "class-methods-use-this": 0,
    "import/no-named-as-default": 0,
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [".js", ".jsx"]
      }
    ]
  }
}
