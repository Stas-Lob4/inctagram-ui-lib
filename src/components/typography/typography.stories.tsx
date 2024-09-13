import { Meta, StoryObj } from '@storybook/react'
import {Typography} from "@/components";

const meta: Meta<typeof Typography.Bold14> = {
  title: 'Primitive/Typography',
  component: Typography.Bold14,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'color',
      description: 'Sets the text color',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    children: {
      control: 'text',
      description: 'The text content',
    },
    className: {
      control: 'text',
      description: 'Custom CSS class',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
}

export default meta
type Story = StoryObj<typeof Typography.Bold14>

export const Bold14: Story = {
  render: args => <Typography.Bold14 {...args} />,
  args: {
    children: 'Bold 14px Text',
    color: '#fff',
  },
}

export const Bold16: Story = {
  render: args => <Typography.Bold16 {...args} />,
  args: {
    children: 'Bold 16px Text',
    color: '#fff',
  },
}

export const H1: Story = {
  render: args => <Typography.H1 {...args} />,
  args: {
    children: 'Heading 1',
    color: '#ff6347',
  },
}

export const H2: Story = {
  render: args => <Typography.H2 {...args} />,
  args: {
    children: 'Heading 2',
    color: '#4682b4',
  },
}

export const H3: Story = {
  render: args => <Typography.H3 {...args} />,
  args: {
    children: 'Heading 3',
    color: '#fff',
  },
}

export const Large: Story = {
  render: args => <Typography.Large {...args} />,
  args: {
    children: 'Large Paragraph',
    color: '#fff',
  },
}

export const Medium14: Story = {
  render: args => <Typography.Medium14 {...args} />,
  args: {
    children: 'Medium 14px Text',
    color: '#fff',
  },
}

export const Regular12: Story = {
  render: args => <Typography.Regular12 {...args} />,
  args: {
    children: 'Regular 12px Text',
    color: '#fff',
  },
}

export const Regular14: Story = {
  render: args => <Typography.Regular14 {...args} />,
  args: {
    children: 'Regular 14px Text',
    color: '#fff',
  },
}

export const Regular16: Story = {
  render: args => <Typography.Regular16 {...args} />,
  args: {
    children: 'Regular 16px Text',
    color: '#fff',
  },
}

export const RegularLink: Story = {
  render: args => <Typography.RegularLink {...args} />,
  args: {
    children: 'Regular Link',
    href: '#',
    color: '#fff',
  },
  argTypes: {
    href: {
      control: 'text',
      description: 'URL for the link',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#' },
      },
    },
  },
}

export const Semibold12: Story = {
  render: args => <Typography.Semibold12 {...args} />,
  args: {
    children: 'Semibold 12px Text',
    color: '#fff',
  },
}

export const SmallLink: Story = {
  render: args => <Typography.SmallLink {...args} />,
  args: {
    children: 'Small Link',
    href: '#',
    color: '#fff',
  },
  argTypes: {
    href: {
      control: 'text',
      description: 'URL for the link',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#' },
      },
    },
  },
}

export const smallText: Story = {
  render: args => <Typography.SmallText {...args} />,
  args: {
    children: 'Small text',
    color: '#fff',
  },
}
