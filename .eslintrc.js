module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
  },
  "extends": [
    "google",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
  },
  "plugins": [
    "@typescript-eslint",
    "cypress",
  ],
  "rules": {
    "quotes": ["error", "double"],
    "cypress/no-assigning-return-values": "error",
    "cypress/no-unnecessary-waiting": "error",
    "cypress/assertion-before-screenshot": "warn",
    "cypress/no-force": "warn",
    "linebreak-style": 0,
    "no-unused-vars": "warn",
    "require-jsdoc": "warn",
    "max-len": ["error", {"code": 120}],
  },
};
