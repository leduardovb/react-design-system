import { Meta, StoryObj } from "@storybook/react";
import { ButtonProps } from "../../props/ButtonProps";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Click me",
  },
  argTypes: {},
} as Meta<ButtonProps>;

export const Default: StoryObj = {};
