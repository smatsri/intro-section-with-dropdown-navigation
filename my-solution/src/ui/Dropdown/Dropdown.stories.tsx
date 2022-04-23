import { ComponentMeta, ComponentStory } from "@storybook/react";
import UI from "../UI";
import Dropdown from "./Dropdown"
import { Item } from "./types";

type DropdownProps = typeof Dropdown
const meta: ComponentMeta<DropdownProps> = {
  title: "Dropdown"
}

export default meta;

const items :Item[]= [
  {
    value:"1",
    title:"History"    
  },
  {
    value:"2",
    title:"Our Team"    
  },
  {
    value:"3",
    title:"Blog"    
  }
]

const Template: ComponentStory<DropdownProps> =
  (args) => {
    return (
      <UI>
        <Dropdown {...args} />
      </UI>
    )
  };

export const Default = Template.bind({})
Default.args = {
  items
}