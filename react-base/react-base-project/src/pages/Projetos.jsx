import Cartao from "../components/Cartao/Cartao";
import ListContainer from "../components/ListContainer/ListContainer";
import Base from "./Base";

const dados = [
    {
        titulo:"Cariocastech.",
        texto:"Alunos da matéria de Front-end do professor Eduardo Mangeli e Estudantes do segundo período da Ibmec barra nos cursos de: Ciencias de dados, engenharia de software e engenharia da computação."
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