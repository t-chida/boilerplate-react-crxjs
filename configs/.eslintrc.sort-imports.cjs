module.exports = {
  extends: ['plugin:perfectionist/recommended-natural'],
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['perfectionist'],
  rules: {
    'perfectionist/sort-array-includes': 'error',
    'perfectionist/sort-enums': 'error',
    'perfectionist/sort-exports': 'error',
    'perfectionist/sort-imports': [
      'error',
      {
        'custom-groups': {
          type: {
            react: 'react',
          },
          value: {
            react: ['react', 'react-*'],
          },
        },
        groups: [
          'type',
          ['builtin', 'react', 'external'],
          'internal-type',
          'internal',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          ['side-effect', 'style', 'object', 'unknown'],
        ],
        'internal-pattern': ['@src/**', '@assets/**', '@pages/**'],
        'newlines-between': 'always',
        order: 'asc',
        type: 'natural',
      },
    ],
    'perfectionist/sort-jsx-props': [
      'error',
      {
        'custom-groups': {
          callback: 'on*',
          sx: 'sx',
        },
        groups: ['sx', 'multiline', 'unknown', 'shorthand', 'callback'],
      },
    ],
    'perfectionist/sort-maps': 'error',
    'perfectionist/sort-named-exports': 'error',
    'perfectionist/sort-named-imports': 'error',
    'perfectionist/sort-objects': 'off',
    'perfectionist/sort-union-types': 'error',
  },
};
