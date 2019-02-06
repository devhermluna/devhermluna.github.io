module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true
  },
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "rules": {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-filename-extension": [
      1,
      { "extensions": [".js", ".jsx"] }
    ],
		"import/no-extraneous-dependencies": "off",
    "comma-dangle": ["error", "never"],
    "no-confusing-arrow": [
      "error",
      { "allowParens": true }
    ],
    "no-shadow": "off",
    "no-param-reassign": 0,
    "no-underscore-dangle": 0,
    "no-unused-expressions": 0
  }
};