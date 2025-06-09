module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:prettier/recommended' // 启用 eslint-plugin-prettier 和 eslint-config-prettier
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // 你可以在这里覆盖或添加规则
    // 例如关闭某些 node 规则：
    // 'node/no-unsupported-features/es-syntax': 'off',
  },
};