module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 2020, sourceType: 'module', ecmaFeatures: { jsx: true } },
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    // Component naming convention (PascalCase)
    'react/jsx-pascal-case': ['error', { allowAllCaps: true }],
    // Enforce explicit function return types
    '@typescript-eslint/explicit-function-return-type': 'warn',
    // Enforce naming conventions
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'variableLike',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
  },
  settings: { react: { version: 'detect' } },
};
