/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    include: ['src/**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'v8',
    },
  },
  resolve: {
    alias: {
      '~': './src',
    },
  },
});
