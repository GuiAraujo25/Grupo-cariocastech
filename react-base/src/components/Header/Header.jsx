import { Link } from "react-router-dom";
import styled from 'styled-components';

// Estilizando o Top
const Top = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between; // Para manter espaço entre a logo e os links
  padding: 10px;
  background-color: #f7f7f7; // Cor de fundo, ajuste conforme necessário
`;

// Estilizando a Logo
const Logo = styled.img`
  width: 100px; // Ajuste o tamanho conforme necessário
  height: auto;
  margin-right: 20px; // Espaço entre a logo e os links
`;

// Estilizando os Links
const NavLink = styled(Link)`
  margin-left: 20px; // Espaço entre os links
`;

const Header = () => (
  <Top>
    <Logo src={`${process.env.PUBLIC_URL}/images/logo-ibmec.png`} alt="Logo IBMEC" />
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/fotos">Fotos</NavLink>
      <NavLink to="/Sobre-nos">Sobre nós</NavLink>
      <NavLink to="/Projetos">Projetos</NavLink>
      <NavLink to="/Idioma">Idiomas</NavLink>

      {window.sessionStorage.getItem('accessToken') ? (
        <NavLink to="/logout">Logout</NavLink>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </nav>
  </Top>
);

export default Header;








