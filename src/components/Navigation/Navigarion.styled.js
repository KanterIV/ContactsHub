import styled from 'styled-components';

export const StyledHeader = styled.header`
  .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 16px;
    padding-top: 16px;
    padding-bottom: 16px;

    font-weight: 600;
    font-size: 16px;
    line-height: 1.2;
    letter-spacing: 0;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media screen and (min-width: 768px) {
      padding-top: 24px;
      padding-bottom: 24px;
      font-size: 22px;
    }
  }

  .logo-svg {
    width: 36px;
    height: 36px;

    @media screen and (min-width: 768px) {
      width: 40px;
      height: 40px;
    }

    &:hover,
    &:focus {
      scale: 1.05;
    }
  }
`;
