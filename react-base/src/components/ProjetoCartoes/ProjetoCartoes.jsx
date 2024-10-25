import React from "react";
import Cartao from "../Cartao/Cartao";
import { Div } from "./style";

function ProjetoCartoes() {
    const listcartoes = [
        { titulo: "Projeto 1", texto: "curso... ",imagem: "imagens/projeto.png", butao: "Saiba Mais"},
        { titulo: "Projeto 2", texto: "curso... ",imagem: "imagens/projeto.png", butao: "Saiba Mais"},
        { titulo: "Projeto 3", texto: "curso... ",imagem: "imagens/projeto.png", butao: "Saiba Mais"},
        { titulo: "Projeto 4", texto: "curso... ",imagem: "imagens/projeto.png", butao: "Saiba Mais"},
        { titulo: "Projeto 5", texto: "curso... ",imagem: "imagens/projeto.png", butao: "Saiba Mais"},
    ]

    return (
        <Div>
            
            {listcartoes.map((item, index) => (
                <Cartao key={index} titulo={item.titulo} texto={item.texto} imagem={item.imagem} butao={item.butao} />
            ))}
        
        </Div>
      )
        
}

export default ProjetoCartoes