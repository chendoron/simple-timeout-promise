module.exports = {
    "env": {
        node: true,
        "jest/globals": true
    },
    "extends": ["plugin:jest/recommended", "plugin:prettier/recommended"],
    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType": "script",
    },
    "plugins": ["jest", "prettier"],
    "rules": {
        'no-console': 2,
        'no-debugger': 2,
        'prefer-const': 2,
        "sort-keys": "warn",

        // Jest rules
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",

        // Prettier exceptions
        'prettier/prettier': ['error', {
            semi: false,
            singleQuote: true,
            arrowParens: 'always',
        }],
    }
};