import {
  Container, DropdownBody, MenuItem,
  Menu, Input, Label, Toggle, BodyContainer
} from "./styles";

import { DropdownProps } from "./types";


const Dropdown = ({ items = [] }: DropdownProps) => {
  return (
    <Container>
      <Input>
        <Label>
          Company
        </Label>
        <Toggle />
      </Input>
      <BodyContainer>
        <DropdownBody>
          <Menu>
            {items.map(a => <MenuItem>{a.title}</MenuItem>)}
          </Menu>
        </DropdownBody>
      </BodyContainer>
    </Container>
  );
}

export default Dropdown;