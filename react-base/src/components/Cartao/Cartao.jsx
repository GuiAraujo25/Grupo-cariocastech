import { Container } from "./Style";
import React from "react";


const Cartao = ( props ) => {
   return (

    <Container>
        <div id='div1'>
            <h2 id='titulo'>{props.titulo}</h2>
            <img src={props.imagem} id='imagem'></img>
            <p id='texto'>{props.texto}</p>
            <button> 
                <a id='butao'>{props.butao}</a>
            </button>
        </div>
    </Container>
 )
}
export default Cartao;