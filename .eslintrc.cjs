module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        'array-bracket-spacing': 'warn',
        'comma-dangle': ['error', 'always-multiline'],
        'dot-location': ['error', 'property'],
        'func-call-spacing': 'warn',
        'implicit-arrow-linebreak': 'warn',
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'key-spacing': 'warn',
        'keyword-spacing': 'warn',
        'new-parens': ['error', 'never'],
        'no-extra-parens': ['error', 'all', { 'returnAssign': false }],
        'no-multi-spaces': 'error',
        'no-multiple-empty-lines': 'error',
        'no-tabs': 'error',
        'no-trailing-spaces': 'error',
        'no-whitespace-before-property': 'error',
        'object-curly-spacing': ['error', 'always'],
        'operator-linebreak': ['error', 'before'],
        'padded-blocks': ['error', 'never'],
        'quotes': ['error', 'single'],
        'rest-spread-spacing': 'error',
        'semi': 'error',
        'semi-spacing': 'error',
        'semi-style': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'switch-colon-spacing': 'error',
        'template-curly-spacing': 'error',
        'template-tag-spacing': 'error',
    }
}
