import styled from "styled-components";

const Container = styled.div`
  width: 18em;
  height: 18em;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Titulo = styled.h3`
    text-decoration: underline;
    
`;



const Texto = styled.p`
    padding: 0 .5em;

`;


export {Container, Titulo, Texto};
  



