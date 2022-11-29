module.exports = {
  parser: "vue-eslint-parser",
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint"],
  extends: ["plugin:vue/vue3-recommended"],
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    withDefaults: "readonly",
  },
  rules: {
    "no-debugger": "error",
    "no-var": "error",
    indent: ["error", 2, { SwitchCase: 1 }],
    "prefer-const": "error",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        disallowTypeAnnotations: false,
      },
    ],
    "vue/first-attribute-linebreak": [
      "error",
      {
        singleline: "beside",
        multiline: "beside",
      },
    ],
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: {
          max: 10,
        },
        multiline: {
          max: 10,
        },
      },
    ],
    "vue/singleline-html-element-content-newline": "off",
    "no-undef": "off",
    "vue/require-default-prop": "off",
    "vue/multi-word-component-names": "off",
    semi: [2, "always"],
  },
};
