module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prefer-default-export': 'off',
    'prefer-destructuring' :"off",
    // 'import/extensions': 'off',
    "import/no-unresolved": "off",
    'import/prefer-default-export': 'off',
    'no-param-reassign': ['error', { props: false }],
    // maximum line length
    'max-len': [1, {
      code: 80,
      tabWidth: 2,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true
    }],
    'no-return-await': 'off',
    'comma-dangle': ['error', {
      arrays: 'never',
      objects: 'ignore',
      imports: 'never',
      exports: 'never',
      functions: 'never'
    }],
    "consistent-return": [0],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
