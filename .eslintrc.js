module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  parser: "@babel/eslint-parser",
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": [
      "error",
      {
        args: "none",
      },
    ],
  },
};
