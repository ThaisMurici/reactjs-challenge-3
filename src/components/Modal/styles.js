import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: white;
  width: 300px;
  padding: 20px;
  border-radius: 3px;

  p {
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  input {
    margin-bottom: 8px;
    height: 40px;
    border-radius: 3px;
    border: 1px solid #ddd;
    padding: 0px 10px;
    font-size: 14px;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.align};
`;

export const Button = styled.button`
  width: 125px;
  background-color: ${props => props.color};
  color: white;
  border-radius: 3px;
  padding: 8px;
  font-weight: bold;
  border-color: transparent;
  font-size: 16px;
`;
