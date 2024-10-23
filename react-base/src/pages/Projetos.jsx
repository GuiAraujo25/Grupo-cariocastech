import Cartao from "../components/Cartao/Cartao";
import ListContainer from "../components/ListContainer/ListContainer";
import Base from "./Base";

const dados = [
    {
        titulo:"Projeto 1.",
        texto:"a"
    },
    {
        titulo:"Projeto 2.",
        texto:"b"
    },
    {
        titulo:"Projeto 3.",
        texto:"c"
    },
    {
        titulo:"Projeto 4.",
        texto:"d"
    },
]

const Projetos = () => (
    <Base>
       <ListContainer>
       {
           dados.map( (ele, i) => (
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

export default Projetos;
    
