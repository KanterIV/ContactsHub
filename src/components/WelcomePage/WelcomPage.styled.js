import styled from 'styled-components';

export const StyledWelcomePage = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }

  .title {
    font-weight: 500;
    font-size: 24px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    text-align: center;
    margin-bottom: 24px;

    @media screen and (min-width: 1440px) {
      text-align: left;
      font-size: 40px;
    }

    .title-accent {
      padding: 0 4px 0 4px;
      background-color: var(--logo-accent);
      border-radius: 6px;
      color: var(--secondary-wite);
    }
  }

  .welcome-text {
    margin-bottom: 24px;
    font-size: 16px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.8);

    @media screen and (min-width: 1440px) {
      font-size: 22px;
    }
  }

  .welcome-btn {
    display: block;
    width: 100%;
    height: 50px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.56;
    border: none;
    border-radius: 12px;
    background-color: var(--logo-accent);
    color: var(--primary-black);
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media screen and (min-width: 768px) {
      width: 300px;
      margin: 0 auto;
    }

    @media screen and (min-width: 1440px) {
      width: 380px;
      height: 60px;
      margin: 0;
    }

    &:hover,
    &:focus {
      scale: 1.02;
    }

    &:active {
      scale: 0.98;
    }
  }
`;
