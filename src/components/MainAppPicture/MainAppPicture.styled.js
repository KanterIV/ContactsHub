import styled from 'styled-components';

export const StyledAppPicture = styled.img`
  width: 246px;

  @media screen and (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 12px;
  }

  @media screen and (min-width: 768px) {
    width: 320px;
  }

  @media screen and (min-width: 1440px) {
    width: 498px;
  }

  &.register-img {
    @media screen and (min-width: 768px) and (max-width: 1439px) {
      display: none;
    }

    @media screen and(min-width: 1440px) {
      height: 475px;
    }
  }

  &.login-img {
    @media screen and (min-width: 768px) and (max-width: 1439px) {
      display: none;
    }

    @media screen and(min-width: 1440px) {
      height: 475px;
    }
  }
`;
