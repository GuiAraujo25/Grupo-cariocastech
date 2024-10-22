import React from 'react';
import Cartao from "../components/Cartao/Cartao"; // Importa o componente Cartao
import ListContainer from "../components/ListContainer/ListContainer";
import Base from "./Base";

const dados = [
   { 
    titulo: "Cariocastech",
    texto: "Alunos de front-end da faculdade IBMEC"
   },
   {  
    titulo: "Cursos",
    texto: "Ciências de Dados, Engenharia de Software e Engenharia de Computação"
   },
];

const SobreNos = () => (
    <Base>
        <ListContainer>
            { 
                dados.map((ele, i) => (
                    <Cartao 
                        key={i}
                        titulo={ele.titulo}
                        texto={ele.texto}
                    />
                ))      
            }  
        </ListContainer>
    </Base>
);

export default SobreNos;

