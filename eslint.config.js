import eslintJs from "@eslint/js";
import tsEslint from "typescript-eslint";
import vueParser from "vue-eslint-parser";
import pluginVue from "eslint-plugin-vue";
/** @type { import("eslint").Linter.Config[] } */
export default [
  {
    //---- GLOBAL IGNORES
    // note folders can only be ignored at the global level, per-cfg you must do: '**/dist/**/*'
    ignores: ["**/dist/", "**/vendor/"],
  },
  ...tsEslint.configs.recommended,
  // chosen vue defaults
  ...pluginVue.configs["flat/essential"],
  // general defaults
  eslintJs.configs["recommended"],
  // general
  {
    files: ["**/*.{js,ts,jsx,tsx,vue}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      //不准使用var
      "no-var": "error",
      // 关闭名称校验
      "vue/multi-word-component-names": "off",
      //未使用变量警告
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "no-unused-vars": [
        "warn",
        {
          args: "all",
          caughtErrors: "none",
          ignoreRestSiblings: true,
          vars: "all",
          // 忽略以 _ 开头的变量
          // 符合规则的参数名将会忽略
          argsIgnorePattern: "^_|(rule|value|i|to|from)$",
        },
      ],
      // console 警告
      "no-console": "warn",
    },
  },

  // chosen typescript defaults - could not get this working
  // ...tsEslint.configs['recommended'],
  // typescript
  {
    files: ["**/*.{ts,tsx,vue}"],
    languageOptions: {
      parser: tsEslint.parser,
    },
  },
  // vue
  {
    files: ["**/*.vue"],
    rules:{
      'vue/attribute-hyphenation': ['error', 'always'], // 确保使用短横线风格
    },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsEslint.parser, // parse TS inside VUE
      },
    },
  },
];
