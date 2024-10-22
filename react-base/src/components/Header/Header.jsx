import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => (
  <Top>
    <div id="navbar">
      <div id="linkIbmec">
        <Link to="https://www.ibmec.br/" aria-label="IBMEC website">
          <img src="imagens/logo_ibmec.png" alt="Logo IBMEC" />
        </Link>
      </div>
      <div id="navegacao">
        <Link to="/" aria-label="Home">Home</Link>
        <Link to="/sobrenos" aria-label="Sobre Nos">Sobre Nos</Link>
      </div>
    </div>
   
    <div id="projetosLink" style={{ 
      textAlign: "center", 
      position: "relative", 
      top: "117px",
      marginRight: "2000px", 
      fontSize: 24
    }}>
      <Link to="/fotos" style={{ color: "rgb(0, 37, 85)", display: "block" }}>Projetos</Link>
    </div>
  </Top>
);

export default Header;











                              




