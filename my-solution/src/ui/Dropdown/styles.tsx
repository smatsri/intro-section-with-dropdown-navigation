import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const ArrowUp = (
  <svg
    width="10"
    height="6"
    xmlns="http://www.w3.org/2000/svg">
    <path stroke-width="1.5" fill="none" d="m1 5 4-4 4 4" />
  </svg>
)
const ArrowDown = (
  <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
    <path stroke-width="1.5" fill="none" d="m1 1 4 4 4-4" />
  </svg>
)

export const Container = styled.div`
position:relative;
`;

export const BodyContainer = styled.div`
  position: relative;
`

export const DropdownBody = styled.div`
display: flex;
width: fit-content;
padding: 10px;
box-shadow: 0px 0px 26px 0px rgb(0 0 0 / 20%);
border-radius: 10px;
position: absolute;
top:10px;
`;

export const Menu = styled.ul`
padding:4px 0;
`;

const textHover = css`
&:hover {
  color: ${({ theme }: any) => theme.colors.almostBlack};
}
`

export const MenuItem = styled.li`
font-size:16px;
padding:4px 20px;
display:flex;
vertical-align:middle;
cursor: pointer;
user-select: none;
${textHover}
`;

export const Input = styled.div`
display:flex;
align-items:center;
cursor: pointer;
user-select: none;
width: fit-content;
${textHover}
stroke:${({ theme }: any) => theme.colors.mediumGray};
&:hover {
  stroke: ${({ theme }: any) => theme.colors.almostBlack};
}
`

const ToggleWrapper = styled.span`

`

export const Label = styled.div`
  margin-right: 10px;
`

export const Toggle = ({ up = false }) => {
  const [el, setEl] = useState(ArrowUp)
  useEffect(() => {
    if (up) {
      setEl(ArrowUp)
    } else {
      setEl(ArrowDown)
    }
  }, [up])

  return <ToggleWrapper>{el}</ToggleWrapper> ;
}
