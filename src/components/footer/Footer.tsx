import {
  FooterContainer,
  Contacts,
  CPar,
  CH3,
  CH2,
  HR,
  Location,
} from "./footerstyles";

const Footer = () => {
  return (
    <FooterContainer>
      <Contacts>
        <CH2>Contacts</CH2>
        <HR />
        <CH3>Reservations and Information</CH3>
        <CPar>Cell: (+351) 966966966</CPar>
        <CPar>Email: reservations@gmail.com</CPar>
        <CH3>Opening Hours</CH3>
        <CPar>sunday to thursday, 11h00 - 01h00</CPar>
        <CPar>friday and saturday, 11h00 - 02h00</CPar>
      </Contacts>
      <Location>
        <CH2>Location</CH2>
        <HR />
        <CH3>Restaurant Verge Lisboa</CH3>
        <CPar>
          Hotel Tivoli Avenida da Liberdade Avenida da Liberdade, 185, 9º piso
          1260-050 Lisboa, Portugal
        </CPar>
      </Location>
    </FooterContainer>
  );
};

export default Footer;