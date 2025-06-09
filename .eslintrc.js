module.exports = {
  root: true,
  extends: [
    '@tencent/eslint-config-tencent',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    // 你可以在这里覆盖或添加规则
    // 例如关闭某些 node 规则：
    // 'node/no-unsupported-features/es-syntax': 'off',
  },
};