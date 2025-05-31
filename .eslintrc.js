export default {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:prettier/recommended', // enables eslint-plugin-prettier and disables conflicting rules
    ],
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': 'error',
    },
  };
  