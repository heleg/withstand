import tseslint from "typescript-eslint";

export default tseslint.config(
  tseslint.configs.base,

  {
    files: ["**/*.ts"],
    rules: {
      "curly": 2,
      "eqeqeq": 2,
      "no-console": 2,
      "no-var": 2,
      "prefer-const": 2,
    },
  },
);
