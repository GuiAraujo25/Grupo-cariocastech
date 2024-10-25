import { Link } from "react-router-dom";
import { TopPart } from "./style";

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