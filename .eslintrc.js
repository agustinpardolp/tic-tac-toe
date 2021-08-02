module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['wolox-react', '@wolox/eslint-config-typescript'],
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      { printWidth: 110, singleQuote: true, trailingComma: 'none', arrowParens: 'avoid' }
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase']
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase']
      },
      {
        selector: 'parameter',
        format: ['camelCase', 'PascalCase']
      },
      {
        selector: 'property',
        format: ['camelCase', 'PascalCase']
      },
      {
        selector: ['function', 'typeLike'],
        format: ['PascalCase', 'camelCase']
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE']
      }
    ],
    'import/no-cycle': [2, { ignoreExternal: true }]
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/']
      },
      typescript: { alwaysTryTypes: true }
    }
  }
};
