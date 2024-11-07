import React from "react";
import Base from "./Base";
import Azul from "../components/Azul/azul";

const Detalhes = () => {
  return (
    <Base>
      <Azul 
        name="Projeto reforma laranjeiras"
        texto="Um próximo passo pra historia do nosso gigante tricolor"
        imagem= {`${process.env.PUBLIC_URL}/imagens/projetoflu.jpg`} 
      />
      <Azul />
    </Base>
  );
}

export default Detalhes;