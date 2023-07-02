import React from "react";
import {
  Container,
  Navbar,
  Logo,
  StyledLink,
  Hero,
  HeroContainer,
  Btn,
} from "./styles";
import header from "../../assets/images/header.jpg";

const Navabar = () => {
  const backgroundImage = `url(${header})`;

  return (
    <Navbar backgroundImage={backgroundImage}>
      <Logo to="/">Verge</Logo>
      <Container>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/menu">Menu</StyledLink>
        <StyledLink to="/reservation">Reservation</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
      </Container>
      <HeroContainer>
        <Hero>
          Where Gastronomy and Ambiance Converge, Discover the Verge of
          Exquisite Dining.
        </Hero>
      </HeroContainer>

      <Btn>Reserve a Table</Btn>
    </Navbar>
  );
};

export default Navabar;
