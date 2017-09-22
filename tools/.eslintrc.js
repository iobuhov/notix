module.exports = {
  extends: 'airbnb-base',
  rules: {
    'import/newline-after-import': [0],
    'import/no-extraneous-dependencies': [0],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'ignore'
    }]
  }
};
