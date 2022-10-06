import { ComponentStory, ComponentMeta } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import Toggle from "components/Toggle/Toggle";
import { Accordion } from "./Accordion";

export default {
  title: "components/Accordion",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Toggle.Accordion>
    <Accordion {...args} />
  </Toggle.Accordion>
);

export const Primary = Template.bind({});
Primary.args = {
  options: ["option one", "option two"],
};
Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const toggleButton = canvas.getByRole("button", { name: /open/i });
  await userEvent.click(toggleButton);
  const optionOne = canvas.queryByText(/option one/i);
  expect(optionOne).toBeInTheDocument();
  await userEvent.click(toggleButton);
  expect(optionOne).not.toBeInTheDocument();
  await userEvent.click(toggleButton);
};
