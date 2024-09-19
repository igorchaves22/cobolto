import jsEslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginImportHelpers from "eslint-plugin-import-helpers";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tsEslint from "typescript-eslint";

export default [
    jsEslint.configs.recommended,
    ...tsEslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        files: ["**/*.{js,ts,jsx,tsx}"],
        ignores: ["node_modules"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: globals.browser
        },
        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            "import-helpers": pluginImportHelpers
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            indent: ["error", 4],
            "linebreak-style": ["error", "unix"],
            quotes: ["error", "double"],
            semi: ["error", "always"],
            "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
            "import-helpers/order-imports": [
                "warn",
                {
                    newlinesBetween: "never",
                    groups: ["module", "/^~/", ["parent", "sibling", "index"]],
                    alphabetize: { order: "asc", ignoreCase: true }
                }
            ],
            "prettier/prettier": "error",
            "react/react-in-jsx-scope": "off",
            "@typescript-eslint/no-empty-object-type": "off"
        }
    },
    eslintConfigPrettier,
    eslintPluginPrettierRecommended
];
