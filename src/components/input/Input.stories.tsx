import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";
import { InputContainerProps } from "../../props/InputProps";
import { Input } from "./Input";

export default {
  title: "Components/Input",
  component: Input.Container,
  args: {
    children: (
      <>
        <Input.Icon>
          <Envelope />
        </Input.Icon>
        <Input.Component placeholder="Type here!" />
      </>
    ),
  },
  argTypes: {},
} as Meta<InputContainerProps>;

export const Default: StoryObj<InputContainerProps> = {};

export const WithoutIcon: StoryObj<InputContainerProps> = {
  args: {
    children: <Input.Component placeholder="Type here!" />,
  },
};
