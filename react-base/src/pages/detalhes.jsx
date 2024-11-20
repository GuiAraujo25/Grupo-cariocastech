import React, { useEffect, useState } from "react";
import Base from "./Base"; // Componente Base
import Azul from "../components/Azul/azul"; // Seção azul superior
import { useParams } from "react-router-dom";
import projetos from "../data/projetos.json";
import styled from "styled-components";

// Novo estilo para a seção de conteúdo abaixo
const ConteudoExtra = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto; /* Centraliza o conteúdo */
  font-family: Arial, sans-serif;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
  }

  li {
    margin-bottom: 10px;
  }
`;

const Detalhes = () => {
  const { id } = useParams();
  const [detalhes, setDetalhes] = useState(null);

  useEffect(() => {
    const projeto = projetos.find((item) => item.id === parseInt(id));
    setDetalhes(projeto);
  }, [id]);

  if (!detalhes) {
    return <p>Carregando informações do projeto...</p>;
  }

  // Função para substituir placeholders por elementos JSX
  const renderTextoComMarcadores = (texto) => {
    if (!texto) return "Informações não disponíveis.";
    return texto.split("[TITULO]").map((parte, index) =>
      index === 0 ? (
        parte
      ) : (
        <>
          <strong>{detalhes.titulo}</strong>
          {parte}
        </>
      )
    );
  };

  return (
    <Base>
      {/* Seção Azul Superior */}
      <Azul
        name={detalhes.titulo}
        texto={renderTextoComMarcadores(detalhes.texto)} // Processa a descrição com placeholders
        imagem={detalhes.imagem}
      />

      {/* Nova Seção para o Conteúdo Extra */}
      <ConteudoExtra>
        <h2>Sobre o Projeto</h2>
        <p>{renderTextoComMarcadores(detalhes.conteudo)}</p>

        <h2>Detalhes do Projeto</h2>
        <ul>
          <li>Início: {detalhes.inicio}</li>
          <li>Duração: {detalhes.duracao}</li>
          <li>Equipe envolvida: {detalhes.equipe}</li>
          <li>Local: {detalhes.local}</li>
        </ul>

        <p>
          Caso tenha dúvidas ou queira contribuir para o projeto, entre em
          contato conosco por meio dos canais oficiais.
        </p>
      </ConteudoExtra>
    </Base>
  );
};

export default Detalhes;
