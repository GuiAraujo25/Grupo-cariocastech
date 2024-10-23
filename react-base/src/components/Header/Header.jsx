import { Link } from "react-router-dom";
import styled from "styled-components";

const Top = styled.header`
  background-color: #ffffff; /* Cor do fundo branco */
  display: flex;
  justify-content: center; /* Centraliza os itens horizontalmente */
  align-items: center; /* Centraliza verticalmente os itens */
  padding: 10px 20px; /* Espaço geral ao redor */
  padding-left: 140px; /* Espaço extra para o logo à esquerda */
  position: relative; /* Para manter o logo e a navegação no layout correto */
  width: 100vw; /* Ocupa toda a largura da tela */
  min-height: 80px; /* Define uma altura mínima */
  box-sizing: border-box; /* Inclui o padding no tamanho total */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra abaixo do header */
`;

const Logo = styled.img`
  width: 100px; /* Ajuste o tamanho conforme necessário */
  height: auto;
  cursor: pointer;
  position: absolute;
  left: 20px; /* Mantém o logotipo à esquerda */
  top: 50%; /* Centraliza verticalmente */
  transform: translateY(-50%); /* Centraliza corretamente */
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #002855; /* Cor do texto dos links (azul escuro) */
  background-color: transparent;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1); /* Efeito hover (cinza claro) */
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center; /* Centraliza os links */
  gap: 20px; /* Espaçamento entre os links */
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
  </Top>
);

export default Header;
