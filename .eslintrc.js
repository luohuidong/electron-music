module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  extends: ["airbnb-typescript"],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "linebreak-style": ["error", "unix"],
    "@typescript-eslint/indent": ["error", 2, { SwitchCase: 1 }],
  },
};
