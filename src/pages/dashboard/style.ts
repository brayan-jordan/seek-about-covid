import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #f0f0f0;
  max-width: 450px;
  line-height: 56px;
  margin: 80px auto;
`;

export const Form = styled.form<FormProps>`
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

  border: 2px solid #fff;
  ${props => props.hasError && css`
    border-color: #C53030;
  ` }
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

  transition: 0.2s;

  &:hover {
    background: ${shade(0.3, '#595959')};
  }
}
`;

export const Cont = styled.div`
    width: 850px;
    margin: 40px auto;
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
    width: 380px;
    color: black;
    margin: 10px 22.5px 10px 22.5px;
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

    transition: 0.2s;

    &:hover {
      transform: translate(10px);
    }

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

export const Error = styled.div`
    color:white;
    font-size: 20px;
    text-align: center;
`;


