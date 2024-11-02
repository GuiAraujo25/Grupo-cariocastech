import { Link } from "react-router-dom";
import styled from "styled-components";

const Top = styled.header`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  padding-left: 140px; 
  position: relative;
  width: 100vw;
  min-height: 80px;
  box-sizing: border-box;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  cursor: pointer;
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #002855;
  background-color: transparent;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const LanguageButton = styled.button`
  position: absolute;
  right: 20px; /* Alinha à direita */
  top: 50%; /* Centraliza verticalmente */
  transform: translateY(-50%); /* Centraliza corretamente */
  background-color: transparent;
  border: 1px solid #002855; /* Borda azul escuro */
  color: #002855; /* Texto azul escuro */
  padding: 5px 10px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1); /* Efeito hover */
  }
`;

const Header = () => (
  <Top>
    <a href="https://www.ibmec.br/" aria-label="IBMEC website">
      <Logo src="/imagens/Logo-ibmec.png" alt="Logo IBMEC" />
    </a>
    <Nav>
      <NavLink to="/" aria-label="Home">Home</NavLink>
      <NavLink to="/sobrenos" aria-label="Sobre Nos">Sobre Nos</NavLink>
      <NavLink to="/Projetos" aria-label="Projetos">Projetos</NavLink>
    </Nav>
    <LanguageButton aria-label="Change language">trocar idioma</LanguageButton>
  </Top>
);

export default Header;
