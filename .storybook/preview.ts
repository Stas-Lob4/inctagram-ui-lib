import type { Preview } from '@storybook/react'

import '../src/styles/index.scss';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    docs: {
      controls: { sort: 'requiredFirst' },
      toc: true
    },
    backgrounds: {
      default: 'background',
      values: [
        {
          name: 'background',
          value: '#0D0D0D',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview;
