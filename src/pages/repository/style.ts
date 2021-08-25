import styled, { css } from 'styled-components';

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
