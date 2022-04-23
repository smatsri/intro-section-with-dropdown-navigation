import styled, { StyledComponent, css } from "styled-components"
import classNames from "classnames"

import { ThemeProps } from "./Global"

const shared = css`

background-color: white;
border: 2px solid transparent;
padding: 8px 12px;
border-radius: 12px;
display: inline-block;

:hover {
  color: ${({ theme }: ThemeProps) => theme.colors.almostBlack};
  &.active {
    border-color: ${({ theme }: ThemeProps) => theme.colors.almostBlack};
  }
} 

&.active {
  border-color: ${({ theme }: ThemeProps) => theme.colors.mediumGray};
}

`;

const A = styled.a`${shared}`
const Button = styled.button`${shared}`

type AProps = {
  type: "link"
  href: string
}

type ButtonProps = {
  type: "button"
}

type Props = {
  children?: any
  active?: boolean
}

type LinkProps = Props & (AProps | ButtonProps)

const Link = (props: LinkProps) => {
  const cssClasses = classNames({ active: props.active })
  switch (props.type) {
    case "link":
      return <A className={cssClasses} href={props.href}>{props.children}</A>
    default:
      return <Button className={cssClasses}>{props.children}</Button>
  }
}

export default Link;