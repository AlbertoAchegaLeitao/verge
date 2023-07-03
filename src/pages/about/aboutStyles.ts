import styled from "styled-components";

export const AboutContainer = styled.div``;

export const AboutSummary = styled.div`
  background-color: #252b37;
`;

export const SummaryH2 = styled.h2`
  font-family: "Roboto Mono", sans-serif;
  color: #ffffff;
  text-align: center;
  font-size: 2rem;
  padding: 5rem 20rem;

  @media (max-width: 730px) {
    font-size: 1.5rem;
    padding: 2rem 5rem;
  }
  @media (max-width: 450px) {
    font-size: 1.2rem;
    padding: 2rem 2rem;
  }
`;

export const SummaryP = styled.p`
  font-family: "Roboto Mono", sans-serif;
  color: #ffffff;
  text-align: center;
  font-size: 1.5rem;
  padding: 5rem 20rem;

  @media (max-width: 730px) {
    font-size: 1.2rem;
    padding: 2rem 5rem;
  }
  @media (max-width: 450px) {
    font-size: 1rem;
    padding: 2rem 2rem;
  }
`;
export const VideoContainer = styled.div`
  padding: 5rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7e2a6;
`;

export const Video = styled.video`
  width: 40%;
  height: auto;
  display: block;
`;
