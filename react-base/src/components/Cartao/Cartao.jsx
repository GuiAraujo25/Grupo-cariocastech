import React from "react";
import { CartaoContainer, Imagem, Titulo, Texto, Botao } from "./Style.js"; 


function Cartao({ titulo, texto, imagem, botao, link }) {
    return (
        <CartaoContainer>
            <Titulo>{titulo}</Titulo>
            <Imagem src={imagem} alt={titulo} />
            <Texto>{texto}</Texto>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <Botao>{botao}</Botao>
            </a>
        </CartaoContainer>
    );
  }
  
export default Cartao;