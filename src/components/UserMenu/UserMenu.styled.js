import styled from 'styled-components';

export const StyledUserMenu = styled.div`
  display: flex;
  align-items: center;

  .avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;

    @media screen and (min-width: 768px) {
      width: 48px;
      height: 48px;
    }
  }

  .user-name {
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0;
    margin-right: 16px;

    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  /* .logout-btn {
    color: black;
    border: 1px solid black;
    display: inline-block;
    padding: 10px;
    font-size: 15px;
    text-decoration: none;
    margin-right: 20px;
    border-radius: 10px;

    transition: all 0.3s;
  } */
`;
