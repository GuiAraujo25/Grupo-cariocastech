import React, { useEffect, useState } from "react";
import Base from "./Base";
import Azul from "../components/Azul/azul";
import { useParams } from "react-router-dom";

const Detalhes = () => {
  const { id } = useParams();  // Acessando o parâmetro 'id' da URL
  const [detalhes, setDetalhes] = useState(null);

  useEffect(() => {
    // Aqui você pode fazer uma requisição para buscar os detalhes com base no 'id'
    // Por exemplo, uma chamada para API ou buscar no estado global.
    console.log("ID recebido:", id);

    // Simulando a recuperação de dados com base no 'id'
    setDetalhes(`Detalhes do item com id: ${id}`);
  }, [id]);  // A dependência 'id' faz o efeito ser chamado novamente sempre que o 'id' mudar.

  return (
    <Base>
      <Azul 
        name={id}
        texto="Um próximo passo pra historia do nosso gigante tricolor ..."
        imagem= {`${process.env.PUBLIC_URL}imagens/projetoflu.jpg`} 
      />
      <Azul />
    </Base>
  );
}

export default Detalhes;


// vou ter q puxer o prejetos