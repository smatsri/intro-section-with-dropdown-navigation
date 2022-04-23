import { ComponentMeta, ComponentStory } from "@storybook/react";
import Logo from "./Logo"
import UI from "./UI";

type LogoProps = typeof Logo
const meta: ComponentMeta<LogoProps> = {
  title: "Logo"
}

export default meta;

const Template: ComponentStory<LogoProps> =
  (args) => {
    return (
      <UI>
        <Logo {...args} />
      </UI>
    )
  };

export const Default = Template.bind({})
Default.args = {
  title: "my site"
}
