import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from "./Header"

type HeaderProps = typeof Header
const meta: ComponentMeta<HeaderProps> = {
  title: "Header"
}

export default meta;

const Template: ComponentStory<HeaderProps> =
  (args) => {
    return <Header {...args} />
  };

export const Default = Template.bind({})