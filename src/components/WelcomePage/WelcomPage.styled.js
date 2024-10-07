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
`;
