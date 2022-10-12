import { Meta, StoryObj } from "@storybook/react";
import Text from "../text/Text";
import Checkbox from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Lembrar de mim</Text>
        </div>
      );
    },
  ],
} as Meta;

export const Default: StoryObj = {};
