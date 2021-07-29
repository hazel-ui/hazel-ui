module.exports = {
  root: true, // https://eslint.org/docs/user-guide/configuring/configuration-files#cascading-and-hierarchy
  parser: "@typescript-eslint/parser",
  parserOptions: {
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  plugins: [
    "@typescript-eslint", // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md
    "eslint-comments", // https://mysticatea.github.io/eslint-plugin-eslint-comments/
    "import", // https://github.com/benmosher/eslint-plugin-import#rules
    "jest", // https://github.com/jest-community/eslint-plugin-jest
    "jest-formatting", // https://www.npmjs.com/package/eslint-plugin-jest-formatting
    "unicorn", // https://github.com/sindresorhus/eslint-plugin-unicorn
  ],
  extends: [
    // https://github.com/iamturns/create-exposed-app/blob/master/.eslintrc.js
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:eslint-comments/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:jest-formatting/strict",
    "plugin:unicorn/recommended",
  ],
  rules: {
    /***********************************************************
     * 1. ESLint rules
     ***********************************************************/

    /**
     * @see https://eslint.org/docs/rules/no-magic-numbers
     * @description Give meaningful names to constant numbers.
     */
    "no-magic-numbers": ["warn", { ignore: [-1, 0, 1, 2, 60, 1000] }],

    /**
     * @see https://eslint.org/docs/rules/curly
     * @description Use curly braces in multiline conditionals.
     */
    curly: ["error", "multi-line"],

    /**
     * @see https://eslint.org/docs/rules/padding-line-between-statements
     * @description Add padding lines for better readability.
     */
    "padding-line-between-statements": [
      "warn",
      { blankLine: "always", prev: "block-like", next: "return" },
      { blankLine: "always", prev: "multiline-const", next: "multiline-const" },
    ],

    /********************************************************************
     * 2. typescript-eslint rules
     ********************************************************************/

    /**
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
     * @description Naming conventions for TypeScript.
     */
    "@typescript-eslint/naming-convention": [
      "warn",
      // Booleans should have a prefix.
      {
        selector: ["variable", "parameter", "property"],
        types: ["boolean"],
        format: ["StrictPascalCase"],
        prefix: ["is", "should", "has", "can", "did", "will"],
      },
      // Variables should be camelCase; UPPER_CASE for constants, PascalCase for JSX.
      {
        selector: "variable",
        format: ["strictCamelCase", "UPPER_CASE", "StrictPascalCase"],
      },
      // Utility functions are camelCase, components are PascalCase.
      {
        selector: "function",
        format: ["camelCase", "PascalCase"],
      },
      // Anything "type like", including interfaces, type aliases, and enums.
      {
        selector: "typeLike",
        format: ["StrictPascalCase"],
      },
      // Enum members are PascalCase for object keys and UPPER_CASE for constants.
      {
        selector: "enumMember",
        format: ["StrictPascalCase", "UPPER_CASE"],
      },
    ],

    /**
     * @see https://github.com/airbnb/javascript/tree/master/react#quotes
     * @description Use double quotes everywhere for consistency.
     */
    "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }],

    /*****************************************************************
     * 3. plugin rules
     *****************************************************************/

    /**
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
     * @description Group imports by type for better readability: external, absolute, relative
     */
    "import/order": [
      "warn",
      {
        groups: [["builtin", "external"], "internal", ["parent", "sibling"]],
        pathGroups: [
          { pattern: "src/**", group: "internal", position: "before" },
          { pattern: "client/**", group: "internal" },
        ],
        pathGroupsExcludedImportTypes: ["builtin", "parent", "sibling"],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: false },
      },
    ],

    /**
     * @see https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
     * @description Prefer named exports.
     */
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",

    /**
     * @see https://github.com/airbnb/javascript/issues/2334
     * @description React default import is not needed in new JSX transform.
     */
    "react/react-in-jsx-scope": "off",

    /**
     * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md
     * @description Discourage abbreviations except commonly known ones.
     */
    "unicorn/prevent-abbreviations": [
      "error",
      {
        replacements: {
          args: false,
          props: false,
        },
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.js"],
      rules: {
        /**
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
         * @description Allow `require()` imports.
         */
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["**/__tests__/*"],
      plugins: ["jest"],
      rules: {
        /**
         * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
         * @description Allow unbound methods in `expect` calls for tests. Useful when mocking browser APIs.
         */
        "@typescript-eslint/unbound-method": "off",
        "jest/unbound-method": "error",
      },
    },
    {
      files: ["**/*.stories.*"],
      rules: {
        /**
         * @see https://storybook.js.org/docs/react/api/csf#default-export
         * @description Allow default export in stories.
         */
        "import/no-default-export": "off",
        /**
         * @see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js
         * @description Allow importing devDependencies in stories.
         */
        "import/no-extraneous-dependencies": [
          "error",
          { devDependencies: true, optionalDependencies: false },
        ],
      },
    },
  ],
  env: {
    /**
     * @see https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments
     * @description Predefined global variables.
     */
    browser: true,
    node: true,
    jest: true,
  },
};
