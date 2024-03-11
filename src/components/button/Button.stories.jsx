import React from "react"
import Button from "./Button"

const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    variant: "contained",
    children: "Click me",
  },
}

export default meta

export const DefaultButton = {
  render: args => <Button {...args} />,
}
