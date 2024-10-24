import { Link } from "react-router-dom";
import { TopPart } from "./Style";

const Azul = (props) => (
  <TopPart>
    <div id="titulo">
      <p id='tituloprincipal'>
        {props.name}
      </p>
      <p id='texto'>
        {props.texto}
      </p>

    </div>
  </TopPart>
)

export default Azul;