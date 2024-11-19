import React, { useEffect, useState } from "react";
import Base from "./Base"; // Mantendo o design anterior
import Azul from "../components/Azul/azul"; // Mantendo o componente visual
import { useParams } from "react-router-dom";
import projetos from "../data/projetos.json"; // Importando o JSON de projetos

const Detalhes = () => {
  const { id } = useParams(); // Captura o ID da URL
  const [detalhes, setDetalhes] = useState(null);

  useEffect(() => {
    // Busca o projeto correspondente pelo ID
    const projeto = projetos.find((item) => item.id === parseInt(id));
    setDetalhes(projeto);
  }, [id]);

  if (!detalhes) {
    return <p>Carregando informações do projeto...</p>; // Tela de carregamento
  }

  return (
    <Base>
      <Azul
        name={detalhes.titulo} // Usa o título do projeto como nome
        texto={detalhes.texto} // Usa a descrição do projeto
        imagem={detalhes.imagem} // Usa a imagem do JSON
      />
    </Base>
  );
};

export default Detalhes;
