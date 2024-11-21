import Cartao from "../components/Cartao/Cartao";
import ListContainer from "../components/ListContainer/ListContainer";
import Base from "./Base";
import dados_projetos from "../data/projetos.json"
import ProjetoCartoes from "../components/ProjetoCartoes/ProjetoCartoes";

const dados = dados_projetos

const Projetos = () => (
    <Base>
       <ListContainer>
       {
           dados.map( (item, i) => (
                   <Cartao
                    key={item.id} // Agora usa o id gerado dinamicamente
                    titulo={item.titulo}
                    texto={item.texto}
                    imagem={item.imagem}
                    botao={item.botao}
                    id={item.id} // Passa o id para a página de detalhes
                    showBotao={true}
                    showDescricao={true}
                    />
           ))
       }
       </ListContainer>
    </Base>
);

export default Projetos;
    
