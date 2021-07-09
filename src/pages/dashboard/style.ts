import { EAFNOSUPPORT } from 'constants';
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 48px;
  color: #f0f0f0;
  max-width: 450px;
  line-height: 56px;
  margin: 80px auto;
`;

export const Form = styled.form`
margin-top: 40px;
max-width: 700px;
display: flex;
margin: auto;
border: solid 0.5px black;
border-radius:6px;

input {
  flex: 1;
  height: 50px;
  padding: 0 24px;
  border: 0;
  border-radius: 5px 0 0 5px;
  color: #3a3a3a;
  font-size: 16px;
}

  &::placeholder {
    color: #a8a8b3;
  }
  

button {
  width: 210px;
  height: 50px;
  background: #1C1C1C;
  border-radius: 0 5px 5px 0;
  border: 0;
  color: #fff;
  font-weight: bold;    
}
`;

export const Cont = styled.div`
    width: 850px;
    margin: 50px auto;
    min-height: 100px;
`;

export const TituloCampos = styled.p`
  text-align: center;
  font-weight: bold;
  color: black;
  display: flex;
  justify-content: center;
  font-size: 25px;

  #titulo {
    font-weight: bold;
    font-size: 30px;
  }
`;

export const Campo = styled.div`
    width: 353px;
    color: black;
    margin: 10px 35px 10px 35px;
    background: #d9d9d9;
    display: inline-block;
    border-radius: 10px; 
    padding-top: 1px;
    p {
      margin: 5px 15px;
      font-size: 20px;
      font-weight: initial  ;
      span {
        color: #363636;
        font-weight: bold;
      };
    };
`;

export const Irmaos = styled.a`
    width:40%
    height: 40px;
    p{
      margin: 2px 15px;
      font-size: 20px;
      float:left;
      span {
        color: #363636;
      }
    }
    #uf {
      margin-left:90px;
    }
`;


