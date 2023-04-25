module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:svelte/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        extraFileExtensions: ['.svelte'],
        // https://github.com/typescript-eslint/typescript-eslint/issues/2094
        EXPERIMENTAL_useSourceOfProjectReferenceRedirect: true,
    },
    plugins: ['@typescript-eslint'],
    overrides: [
        {
            files: ['*.svelte'],
            parser: 'svelte-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
            },
        },
    ],
    rules: {
        'svelte/valid-compile': ['error', { ignoreWarnings: true }],
    },
};
