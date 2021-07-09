import React, { useState, FormEvent } from 'react';
import api from '../../services/api';
import { Title, Form, Cont, Campo, TituloCampos, Irmaos } from './style';

interface Repository {
  cidade: string,
  logradouro: string,
  bairro: string,
  cep: string,
  estado: string
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
      event.preventDefault();

      const response = await api.get<Repository>(`cep/${newRepo}`);
      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
  }
  return (
    <>
      <Title>Consulta por CNPJ</Title>
      <Form onSubmit={handleAddRepository}>
        <input
        value={newRepo}
        onChange={e => setNewRepo(e.target.value)}
        placeholder="Digite o CEP"></input>
        <button type="submit">Consultar</button>
      </Form>
      <Cont>
      {repositories.map(repository => (
        <Campo>
          <>
            <TituloCampos><a><span id="titulo">{repository.cidade}</span></a></TituloCampos>
              <p><span>RUA: </span>{repository.logradouro}</p>
              <p><span>BAIRRO: </span>{repository.bairro}</p>
              <Irmaos><p><span>CEP: </span>{repository.cep}</p></Irmaos>
              <Irmaos><p id="uf"><span>UF: </span>{repository.estado}</p></Irmaos>
              
          </>
          </Campo>
        ))}
      </Cont>
    </>
  );
};

export default Dashboard;
