import React from 'react';
import { CartaoContainer, Imagem, Titulo, Cargo, Texto, Botao } from './Style';

const Cartao = ({ nome, cargo, descricao, imagem, link, showBotao, showDescricao }) => {
    console.log("Descrição:", descricao);
  return (
    <CartaoContainer>
      <Imagem src={imagem} alt={nome} />
      <Titulo>{nome}</Titulo>
      <Cargo>{cargo}</Cargo>

      {/* Exibe a descrição apenas quando showDescricao for true */}
      {showDescricao && <Texto>{descricao}</Texto>}

      {/* Exibe o botão "Saiba Mais" quando showBotao for true */}
      {showBotao && (
        <Botao>
          <a href={link}>Saiba Mais</a>
        </Botao>
      )}
    </CartaoContainer>
  );
}

export default Cartao;



