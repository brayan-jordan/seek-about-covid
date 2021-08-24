import React, { useState, useEffect, FormEvent } from 'react';
import api from '../../services/api';
import { Title, Form, Cont, Campo, TituloCampos, Irmaos, Error } from './style';
import { Link } from 'react-router-dom';

interface Estado {
  uf: string;
}
interface Repository {
  uf: string,
  cases: BigInt,
  deaths: BigInt,
  suspects: BigInt,
  state: Estado,
  refuses: BigInt
}
const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const[inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepository = localStorage.getItem('@CepExplorer:repositories', );

    if(storageRepository){
      return JSON.parse(storageRepository)
    }
    return [];

  });

  useEffect(() => {
    localStorage.setItem(
      '@CepExplorer:repositories',
      JSON.stringify(repositories)
    )
  }, [repositories]);
  
  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
      event.preventDefault();
      if(!newRepo){
        setInputError("Digite a sigla de um estado:");
        return;
      }

    try{
      const response = await api.get<Repository>(`uf/${newRepo}`);
      const repository = response.data;
      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    }catch(err){
        setInputError('UF Nao encontrada')
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
        <Link to={`/repository/${repository.uf}`}>
          <Campo>
            <>
              <TituloCampos><a><span id="titulo">{repository.uf}</span></a></TituloCampos>
                <p><span>CASOS: </span>{repository.cases}</p>
                <p><span>SUSPEITOS: </span>{repository.suspects}</p>
                <Irmaos><p><span>NEGATIVOS: </span>{repository.refuses}</p></Irmaos>
                <Irmaos><p id="uf"><span>MORTES: </span>{repository.deaths}</p></Irmaos>
            </>
            </Campo>
          </Link>
        ))}
      </Cont>
    </>
  );
};

export default Dashboard;
