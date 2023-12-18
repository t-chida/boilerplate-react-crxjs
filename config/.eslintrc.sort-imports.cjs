module.exports = {
  extends: ['plugin:perfectionist/recommended-natural'],
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['perfectionist'],
  // ignorePatterns: ['tsconfig.json', 'vite.config.ts'],

  rules: {
    'perfectionist/sort-array-includes': 'error',
    'perfectionist/sort-enums': 'error',
    'perfectionist/sort-exports': 'error',
    'perfectionist/sort-imports': [
      'error',
      {
        groups: [
          'type',
          ['builtin', 'external'],
          'internal-type',
          'internal',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'object',
          'unknown',
        ],
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
    'perfectionist/sort-union-types': 'error',
  },
};
