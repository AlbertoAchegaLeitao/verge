import React from "react";
import { useHeroTextContext } from "./HeroContext";

import {
  Container,
  Nav,
  Logo,
  StyledLink,
  Hero,
  HeroContainer,
  Btn,
} from "./styles";
import header from "../../assets/images/header.jpg";

const Navbar = () => {
  const backgroundImage = `url(${header})`;
  const context = useHeroTextContext();
  // Check if context is null before accessing its properties
  const heroText = context?.heroText || "";
  const handleMenuClick = context?.handleMenuClick || (() => {});

  return (
    <Nav backgroundImage={backgroundImage}>
      <Logo to="/" onClick={() => handleMenuClick("home")}>
        Verge
      </Logo>
      <Container>
        <StyledLink to="/about" onClick={() => handleMenuClick("about")}>
          About
        </StyledLink>
        <StyledLink to="/menu" onClick={() => handleMenuClick("menu")}>
          Menu
        </StyledLink>
        <StyledLink
          to="/reservation"
          onClick={() => handleMenuClick("Reservation")}
        >
          Reservation
        </StyledLink>
        <StyledLink to="/login" onClick={() => handleMenuClick("Login")}>
          Login
        </StyledLink>
      </Container>
      <HeroContainer>
        <Hero>{heroText}</Hero>
      </HeroContainer>

      <Btn>Reserve a Table</Btn>
    </Nav>
  );
};

export default Navbar;
