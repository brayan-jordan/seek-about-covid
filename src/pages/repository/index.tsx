import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import api from '../../services/api';
import { TituloCampos } from '../dashboard/style';
import {Campo, Irmaos} from './style'

interface RepositoryParams {
    repository: string;
}

interface Estado {
    uf: string;
}

interface Repositorio {
  uf: string,
  cases: BigInt,
  deaths: BigInt,
  suspects: BigInt,
  state: Estado,
  refuses: BigInt
}

const Repository: React.FC = () => {
    const [repository, setRepository] = useState<Repositorio | null>(null);
    const { params } = useRouteMatch<RepositoryParams>();
  
    useEffect(() => {
      api.get(`uf/${params.repository}`).then((response) => {
        setRepository(response.data);
      });
  
     
    }, [params.repository]);

    return (
        <>
            <Campo>
            <>
              <TituloCampos><a><span id="titulo">{repository?.uf}</span></a></TituloCampos>
                <p><span>CASOS: </span>{repository?.cases}</p>
                <p><span>SUSPEITOS: </span>{repository?.suspects}</p>
                <p><span>NEGATIVOS: </span>{repository?.refuses}</p>
                <p><span>MORTES: </span>{repository?.deaths}</p>
            </>
            </Campo>
        </>
    )}

export default Repository;
