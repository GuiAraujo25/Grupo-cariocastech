import Cartao from "../components/Cartao/Cartao";
import ListContainer from "../components/ListContainer/ListContainer";
import Base from "./Base";

const dados = [
   { 
    titulo:"Cariocastech",
    texto:"Alunos de front-end da faculdade ibmec"

   },
   {  
    titulo:"Cursos",
    texto:"Ciencias de dados, engenharia de software e engenharia de computação"
   },

]
const SobreNos = () => (
    <Base>
        <ListContainer>
       { 
           dados.map( (ele,i) => (
                   <Cartao 
                     key = {i}
                     titulo={ele.titulo}
                     texto={ele.texto}

                    />

           ))      


      }  
      </ListContainer>
           
    </Base>
);

export default SobreNos;
