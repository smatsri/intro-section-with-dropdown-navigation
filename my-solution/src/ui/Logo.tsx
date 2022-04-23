import styled from "styled-components";
import logo from "./assets/images/logo.svg"

const StyledLogo = styled.div``

type LogoProps = {
  title?: string
}

const Logo = ({ title }: LogoProps) => {
  console.log(title);
  return (
    <StyledLogo>
      <img src={logo} title={title} />
    </StyledLogo>
  );
}

export default Logo;