import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  ...compat.config({
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          paths: ['src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    ignorePatterns: ['.next', 'eslint.config.mjs'],
    plugins: ['simple-import-sort', 'unicorn', 'check-file'],
    extends: [
      'next',
      'prettier',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:storybook/recommended',
    ],
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          // 'PascalCase' for react component
          format: ['camelCase', 'PascalCase'],
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: ['default', 'variable'],
          modifiers: ['exported'],
          format: ['PascalCase', 'camelCase'],
        },
      ],
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
        },
      ],
      'check-file/folder-naming-convention': [
        'error',
        {
          'src/app/**/': 'NEXT_JS_APP_ROUTER_CASE',
          'src/components/**/': 'PASCAL_CASE',
        },
      ],
    },
  }),
];

export default eslintConfig;
