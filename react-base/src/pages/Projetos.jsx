import Cartao from "../components/Cartao/Cartao";
import ListContainer from "../components/ListContainer/ListContainer";
import Base from "./Base";
import dados_projetos from "../data/projetos.json"

const dados = dados_projetos

const Projetos = () => (
    <Base>
       <ListContainer>
       {
           dados.map( (ele, i) => (
                   <Cartao
                       key={i}
                       titulo={ele.nome_projeto}
                       texto={ele.titulo}
                    />
           ))
       }
       </ListContainer>
    </Base>
);

export default Projetos;
    
