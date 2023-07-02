import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 5rem 5rem;
  background-color: #faf6ec;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(300px, 1fr)
  ); /* Change this line */
  grid-gap: 50px;

  @media (max-width: 512px) {
    padding: 5rem 2rem;
  }
  @media (max-width: 300px) {
    padding: 5rem 0.2rem;
  }
`;

export const Contacts = styled.div``;
export const Location = styled.div``;

export const CH2 = styled.h2`
  font-size: 40px;
  font-weight: lighter;
  font-family: "Roboto Mono", sans-serif;
`;
export const HR = styled.hr`
  width: 300px;

  @media (max-width: 400px) {
    width: 200px;
  }
`;

export const CH3 = styled.h3`
  font-size: 20px;
  font-weight: 300;
  font-family: "Roboto Mono", sans-serif;
`;

export const CPar = styled.p`
  font-size: 20px;
  font-family: "Roboto Mono", sans-serif;
`;
