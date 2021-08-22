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
     * Use curly braces in multiline conditionals.
     * @see https://eslint.org/docs/rules/curly
     */
    curly: ["error", "multi-line"],

    /**
     * Large files should be split into smaller modules.
     * @see https://eslint.org/docs/rules/max-lines
     */
    "max-lines": "warn",

    /**
     * Disallow type conversion with short notations that are hard to read
     * @see https://eslint.org/docs/rules/no-implicit-coercion
     */
    "no-implicit-coercion": "warn",

    /**
     * Add padding lines for better readability.
     * @see https://eslint.org/docs/rules/padding-line-between-statements
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
     * Naming conventions for TypeScript.
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
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
     * Give meaningful names to constant numbers.
     * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
     */
    "@typescript-eslint/no-magic-numbers": [
      "warn",
      {
        ignore: [-1, 0, 1, 2, 60, 1000],
        ignoreArrayIndexes: true,
        ignoreEnums: true,
      },
    ],

    /**
     * Use double quotes everywhere for consistency.
     * @see https://github.com/airbnb/javascript/tree/master/react#quotes
     */
    "@typescript-eslint/quotes": ["error", "double", { avoidEscape: true }],

    /*****************************************************************
     * 3. plugin rules
     *****************************************************************/

    /**
     * Group imports by type for better readability: external, absolute, relative
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
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
     * Prefer named exports.
     * @see https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
     */
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",

    /**
     * React default import is not needed in new JSX transform.
     * @see https://github.com/airbnb/javascript/issues/2334
     */
    "react/react-in-jsx-scope": "off",

    /**
     * File names can follow different case styles for naming to differentiate
     * types & components (PascalCase) from functions (camelCase).
     * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
     */
    "unicorn/filename-case": "off",

    /**
     * Discourage abbreviations except commonly known ones.
     * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md
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
         * Allow `require()` imports.
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
         */
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["**/__tests__/*"],
      plugins: ["jest"],
      rules: {
        /**
         * Allow unbound methods in `expect` calls for tests. Useful when mocking browser APIs.
         * @see https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
         */
        "@typescript-eslint/unbound-method": "off",
        "jest/unbound-method": "error",
      },
    },
    {
      files: ["**/*.stories.*"],
      rules: {
        /**
         * Allow default export in stories.
         * @see https://storybook.js.org/docs/react/api/csf#default-export
         */
        "import/no-default-export": "off",
        /**
         * Allow importing devDependencies in stories.
         * @see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js
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
     * Predefined global variables.
     * @see https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments
     */
    browser: true,
    node: true,
    jest: true,
  },
};
