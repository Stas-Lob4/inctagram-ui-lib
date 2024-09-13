import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions"
  ],
  docs: {
    autodocs: 'tag',
  },
  framework: {
    "name": "@storybook/react-vite",
    "options": {}
  },
  stories: ['../**/*.mdx', '../**/*.stories.@(js|jsx|mjs|ts|tsx)']
};

export default config;