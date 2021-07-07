import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
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

  &::placeholder {
    color: #a8a8b3;
  }
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
    background: black;
    width: 850px;
    margin: 50px auto;
    min-height: 100px;

    div {
        width: 395px;
        color: white;
        margin: 10px 15px 10px 15px;
        background: green;
        display: inline-block;

        
    }
`;

export const Campo = styled.div`

`;