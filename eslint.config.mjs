import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  {
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'comma-dangle': [
        'error',
        {
          arrays: 'always',
          objects: 'always',
          imports: 'always',
          exports: 'always',
          functions: 'always',
        },
      ],
    },
  },
  eslintConfigPrettier,
]
