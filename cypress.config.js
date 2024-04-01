import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    specPattern: ['**/**/*.cy.{js,ts,jsx,tsx}'],
    viewportWidth: 393,
    viewportHeight: 727,
  },
});
