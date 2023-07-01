import React from "react";
import { StyledHeading, Container } from "./styles";
import { Link } from "react-router-dom";

const Navabar = () => {
  return (
    <Container>
      <Link to="/">
        <StyledHeading>Verge</StyledHeading>
      </Link>
      <div>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/Reservation">Reservation</Link>
        <Link to="/login">Login</Link>
      </div>
    </Container>
  );
};

export default Navabar;
