module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["google", "prettier", "eslint:recommneded"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: { "no-unused-vars": "off" },
};
