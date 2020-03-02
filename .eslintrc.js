module.exports = {
  env: {
    browser: true,
    es6: true
  },
  // parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'react/jsx-fragments': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',

    'no-unused-expressions': ['error', {allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true}],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    'react/forbid-prop-types': [0, {forbid: ['any']}],
    'react/prop-types': 0
  },
  env: {
    jest: true,
    browser: true,
    node: true
  }
}
