import React, { useState, FormEvent } from 'react';
import { Title, Form, Cont } from './style';

const Dashboard: React.FC = () => {
  return (
    <>
      <Title>Consulta por CNPJ</Title>
      <Form>
        <input placeholder="Digite o CNPJ"></input>
        <button type="submit">Consultar</button>
      </Form>
      <Cont>
        <div>
          <strong>NOME</strong>
          <p>Atividade Pricipal</p>
          <p>email</p>
          <p>uf</p>
          <p>municipio</p>
          <p>CNPJ</p>
        </div>
        <div>
          <strong>nome</strong>
          <p>Atividade Pricipal</p>
          <p>email</p>
          <p>uf</p>
          <p>municipio</p>
          <p>CNPJ</p>
        </div>
        <div>
          <strong>nome</strong>
          <p>Atividade Pricipal</p>
          <p>email</p>
          <p>uf</p>
          <p>municipio</p>
          <p>CNPJ</p>
        </div>
        <div>
          <strong>nome</strong>
          <p>Atividade Pricipal</p>
          <p>email</p>
          <p>uf</p>
          <p>municipio</p>
          <p>CNPJ</p>
        </div>
        
      </Cont>
    </>
  );
};

export default Dashboard;
