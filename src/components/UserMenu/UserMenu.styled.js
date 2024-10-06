import styled from 'styled-components';

export const StyledUserMenu = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  .user-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    border: none;
    background-color: transparent;
  }
  .user-name {
    @media screen and (max-width: 767px) {
      display: none;
    }

    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0;
    margin-right: 16px;
  }

  .avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;

    @media screen and (min-width: 768px) {
      width: 48px;
      height: 48px;
    }
  }

  .dropdown-icon {
    width: 10px;
    height: 10px;
  }
`;
