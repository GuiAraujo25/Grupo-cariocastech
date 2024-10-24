import React from "react";
import Cartao from "../Cartao/Cartao";
import { Div } from "./style";

function ProjetoCartoes() {
    const listcartoes = [
        { titulo: "Projeto 1", texto: "Sobre " },
        { titulo: "Projeto 2", texto: "Sobre " },
        { titulo: "Projeto 3", texto: "Sobre " },
        { titulo: "Projeto 4", texto: "Sobre " },
        { titulo: "Projeto 5", texto: "Sobre " },
    ]

    return (
        <Div>
            
            {listcartoes.map((item, index) => (
                <Cartao key={index} titulo={item.titulo} texto={item.texto} />
            ))}
        
        </Div>
      )
        
}

export default ProjetoCartoes