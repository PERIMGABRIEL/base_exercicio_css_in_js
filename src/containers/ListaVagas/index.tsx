import { useState } from 'react';
import FormVagas from '../../components/FormVagas';
import Vaga from '../../components/Vaga';
import { VagasList } from './ListaVagasStyled'; // Importando o Styled Component

// Definindo a tipagem do tipo 'Vaga'
type VagaType = {
  id: string;
  titulo: string;
  localizacao: string;
  nivel: string;
  modalidade: string;
  salarioMin: number;
  salarioMax: number;
  requisitos: string[];
};

const vagas: VagaType[] = [
  {
    id: '1',
    titulo: 'Desenvolvedor front-end',
    localizacao: 'remoto',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 3000,
    salarioMax: 4500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
  },
  {
    id: '2',
    titulo: 'Desenvolvedor NodeJS',
    localizacao: 'remoto',
    nivel: 'pleno',
    modalidade: 'pj',
    salarioMin: 5000,
    salarioMax: 6500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
  },
  // ... outas vagas
];

const ListaVagas = () => {
  const [filtro, setFiltro] = useState<string>(''); // Tipando o filtro como string

  // Usando includes e toLocaleLowerCase corretamente
  const vagasFiltradas = vagas.filter((vaga) =>
    vaga.titulo.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
  );

  return (
    <div>
      <FormVagas aoPesquisar={(termo: string) => setFiltro(termo)} />
      <VagasList>
        {vagasFiltradas.map((vaga) => (
          <Vaga
            key={vaga.id}
            titulo={vaga.titulo}
            localizacao={vaga.localizacao}
            nivel={vaga.nivel}
            modalidade={vaga.modalidade}
            salarioMin={vaga.salarioMin}
            salarioMax={vaga.salarioMax}
            requisitos={vaga.requisitos}
          />
        ))}
      </VagasList>
    </div>
  );
};

export default ListaVagas;
