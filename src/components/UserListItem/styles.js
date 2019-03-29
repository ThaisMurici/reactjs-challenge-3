import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

export const UserInfo = styled.div`
  flex: 1;
  .name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .login {
    font-size: 14px;
    color: #999;
  }
`;

export const Avatar = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  margin-right: 15px;
`;

export const Button = styled.button`
  width: 40px;
  height: 30px;
  border: none;
  margin-right: ${props => (props.type === 'danger' ? '10px' : '0px')};

  &:hover {
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .icon {
    color: ${props => (props.type === 'danger' ? '#E53935' : '#666')};
    font-size: 18px;

    &:hover {
      color: ${props => (props.type === 'danger' ? '#B71C1C' : '#444')};
    }
  }
`;
