// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import {
  EmailField,
  Form,
  PasswordField,
  TextAreaField,
  TextField,
} from '@redwoodjs/forms'

const meta: Meta = {
  title: 'Forms',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj

export const TextInput: Story = {
  render: () => (
    <Form>
      <TextField name="test" />
    </Form>
  ),
}

export const EmailInput: Story = {
  render: () => (
    <Form>
      <EmailField name="email" />
    </Form>
  ),
}

export const TextareaInput: Story = {
  render: () => (
    <Form>
      <TextAreaField name="textarea" />
    </Form>
  ),
}

export const PasswordInput: Story = {
  render: () => (
    <Form>
      <PasswordField name="password" />
    </Form>
  ),
}
