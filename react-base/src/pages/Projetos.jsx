import Cartao from "../components/Cartao/Cartao";
import ListContainer from "../components/ListContainer/ListContainer";
import Base from "./Base";

const dados = [
    {
        titulo:"Projeto 1.",
        texto:"....."
    },
    {
        titulo:"Projeto 2.",
        texto:"....."
    },
    {
        titulo:"Projeto 3.",
        texto:"....."
    },
    {
        titulo:"Projeto 4.",
        texto:"....."
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
    
