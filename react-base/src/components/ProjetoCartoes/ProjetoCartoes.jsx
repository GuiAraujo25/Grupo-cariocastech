import React from "react";
import Cartao from "../Cartao/Cartao";
import { Div } from "./style";

function ProjetoCartoes() {
    const listcartoes = [
        { titulo: "Projeto reforma laranjeiras", texto: "curso... ", imagem: "imagens/projetoflu.jpg", botao: "Saiba Mais", link: "http://localhost:3000/#/detalhes" },
        { titulo: "Projeto Bola de ouro no Brasil", texto: "curso... ", imagem: "imagens/projetoouro.jpg", botao: "Saiba Mais", link: "http://localhost:3000/#/detalhes" },
        { titulo: "Projeto Formula 1 nas escolas de todo o país", texto: "curso... ", imagem: "imagens/f1.jpg", botao: "Saiba Mais", link: "http://localhost:3000/#/detalhes" },
        { titulo: "Projeto criação novo Orkut", texto: "curso... ", imagem: "imagens/projetoorkut.jpg", botao: "Saiba Mais", link: "http://localhost:3000/#/detalhes" },
    ];

    return (
        <Div>
            {listcartoes.map((item, index) => (
                <Cartao key={index} titulo={item.titulo} texto={item.texto} imagem={item.imagem} botao={item.botao} link={item.link} />
            ))}
        </Div>
    );
}

export default ProjetoCartoes;
