import { ComponentMeta, ComponentStory } from "@storybook/react";
import Link from "./Link"
import UI from "./UI";

type LinkProps = typeof Link
const meta: ComponentMeta<LinkProps> = {
  title: "Link",
}

export default meta;

const Template: ComponentStory<LinkProps> =
  (args) => {
    return (
      <UI>
        <Link {...args} type="link" href="javascript:;">Login</Link>
        {" "}
        <Link {...args} type="button" active={true}>Register</Link>
      </UI>)
  };

export const Default = Template.bind({})
Default.args = {
  active: false
}

export const Active = Template.bind({})
Active.args = {
  active: true
}