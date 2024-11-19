import React, { useState, useEffect } from 'react';
import Cartao from '../Cartao/Cartao';
import { Div, Container2, Container } from './Style';
import Select from 'react-select';
import projetos from "../../data/projetos.json"
import Cartao2 from '../Cartao2/Cartao2';

const options1 = [
  { value: 'React', label: 'React' },
  { value: 'Figma', label: 'Figma' },
  { value: 'Python', label: 'Python' },
  { value: 'Assembly', label: 'Assembly' },
];
const options2 = [
  { value: 'Ibmec Barra', label: 'Ibmec Barra' },
  { value: 'Ibmec Centro', label: 'Ibmec Centro' },
  { value: 'Ibmec BH', label: 'Ibmec BH' },
];
const options4 = [
  { value: '2022.1', label: '2022.1' },
  { value: '2022.2', label: '2022.2' },
  { value: '2023.1', label: '2023.1' },
  { value: '2023.2', label: '2023.2' },
  { value: '2024.1', label: '2024.1' },
  { value: '2024.2', label: '2024.2' },
];

function ProjetoCartoes() {
  const [dados, setDados] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [filtroTecnologia, setFiltroTecnologia] = useState(null);
  const [filtroUnidade, setFiltroUnidade] = useState(null);
  const [filtroPeriodo, setFiltroPeriodo] = useState(null);

  const listcartoes = projetos

  const handlePesquisa = (e) => {
    setPesquisa(e.target.value);
    const filtro = e.target.value.toLowerCase();
    const filtrados = listcartoes.filter((item) =>
      item.titulo.toLowerCase().includes(filtro) ||
      item.texto.toLowerCase().includes(filtro)
    );
    setDados(filtrados);
  };

  const handleLimparFiltros = () => {
    setPesquisa("");
    setFiltroTecnologia(null);
    setFiltroUnidade(null);
    setFiltroPeriodo(null);
    setDados(listcartoes);  // Restaura a lista completa
  };

  useEffect(() => {
    setDados(listcartoes);
  }, []);

  return (
    <>
      <Container>
        <Select
          options={options1}
          placeholder="Tecnologia"
          value={filtroTecnologia}
          onChange={setFiltroTecnologia}
          id="select"
        />
        <Select
          options={options2}
          placeholder="Unidade"
          value={filtroUnidade}
          onChange={setFiltroUnidade}
          id="select"
        />
        <Select
          options={options4}
          placeholder="Período"
          value={filtroPeriodo}
          onChange={setFiltroPeriodo}
          id="select"
        />
        <button onClick={handleLimparFiltros} className="limpar-filtros">Limpar</button>
      </Container>
      
      <Container2>
        <h1>Projetos</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Pesquise por título ou descrição"
            value={pesquisa}
            onChange={handlePesquisa}
          />
        </div>
      </Container2>

      <Div>
        {dados.map((item, index) => (
          <Cartao
            key={index} 
            titulo={item.titulo}  
            texto={item.texto} 
            imagem={item.imagem} 
            botao={item.botao} 
            id={item.id}
            showBotao={true}
            showDescricao={true}
          />
        ))}
      </Div>
    </>
  );
}

export default ProjetoCartoes;
