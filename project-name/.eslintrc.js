module.exports = {
  globals: {
    __PUBLIC_PATH__: true
  },
  parser: "vue-eslint-parser",
  /* 优先级低于parse的语法解析配置 */
  parserOptions: {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      tsx: true,
      jsx: true
    }
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ["vue", "prettier", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/triple-slash-reference": 0,
    "react/prop-types": 0,
    "prefer-rest-params": 1,
    "no-var": 1,
    "vue/multi-word-component-names": 0
  }
};
