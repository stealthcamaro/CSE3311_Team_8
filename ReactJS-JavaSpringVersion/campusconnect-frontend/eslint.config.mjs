import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      sourceType: "module",
      globals: globals.browser
    },
    settings: {
      react: {
        version: "detect" // Automatically detects the React version
      }
    }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended
];
