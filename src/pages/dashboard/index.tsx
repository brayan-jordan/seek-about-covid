import React, { useState, FormEvent } from 'react';
import api from '../../services/api';
import { Title, Form, Cont, Campo, TituloCampos, Irmaos, Error } from './style';
interface Repository {
  cidade: string,
  logradouro: string,
  bairro: string,
  cep: string,
  estado: string
}
const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const[inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);
  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
      event.preventDefault();
      if(!newRepo){
        setInputError("Digite um CEP para pesquisar");
        return;
      }

    try{
      const response = await api.get<Repository>(`cep/${newRepo}`);
      const repository = response.data;
      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    }catch(err){
        setInputError('CEP não encontrado ou inexistnte')
    }
  }
  return (
    <>
      <Title>Consulta por CNPJ</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
        value={newRepo}
        onChange={e => setNewRepo(e.target.value)}
        placeholder="Digite o CEP"></input>
        <button type="submit">Consultar</button>
       </Form>

       {inputError && <Error>{inputError}</Error>}

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
