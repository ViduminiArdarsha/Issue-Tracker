module.exports = {
  overrides: [
    {
      files: ["app/generated/prisma/**/*"],
      rules: {
        "@typescript-eslint/no-empty-object-type": "off",
        "@typescript-eslint/no-unused-expressions": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-this-alias": "off",
        "@typescript-eslint/no-require-imports": "off"
      }
    }
  ],
  // ... your other config
};
