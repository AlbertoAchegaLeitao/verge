// styles.js
import styled from "styled-components";

import { Link } from "react-router-dom";

interface NavbarProps {
  backgroundImage: string; // Add the backgroundImage prop to the interface
}

export const Navbar = styled.nav<NavbarProps>`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background-image: ${(props) => props.backgroundImage};
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 511px) {
    background-position: center;
    width: 100vw; /* Set width to 100% of the viewport width */
  }
`;

export const Logo = styled(Link)`
  padding: 2rem 0;
  text-decoration: none;
  color: #ffffff;
  font-size: 8rem;
  font-weight: 700;
  font-family: "Dancing Script", sans-serif;

  @media (max-width: 600px) {
    font-size: 5rem;
  }

`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  padding: 0 1rem 2rem 0;
  font-size: 1.5rem;
  font-family: "Roboto Mono", sans-serif;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const Container = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const HeroContainer = styled.div`
  padding: 0 10rem 2rem 10rem;
`;

export const Hero = styled.div`
  color: #ffffff;
  font-family: "Roboto Mono", sans-serif;
  font-size: 3rem;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.4);

  @media (max-width: 800px) {
    font-size: 2rem;
  }
`;

export const fillUpAnimation = `
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0;
  background-color: #ffffff;
  transition: height 0.3s ease;
  
`;

export const Btn = styled.button`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: inline-block;
  padding: 10px 20px;
  border: 5px solid #ffffff;
  background-color: transparent;
  text-decoration: none;
  color: #ffffff;
  font-size: 25px;
  font-family: "Roboto Mono", sans-serif;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &::before,
  &::after {
    ${fillUpAnimation}
  }

  &:hover::before,
  &:hover::after {
    height: 100%;
  }
  &:hover {
    color: #000000;
  }
`;
