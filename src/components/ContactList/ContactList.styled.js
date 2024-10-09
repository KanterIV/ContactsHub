import styled from 'styled-components';

export const StyledContactsList = styled.ul`
  width: 100%;
  height: 200px;
  padding: 18px 18px;
  overflow-y: auto;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  background-color: var(--grey-modal);

  @media screen and (max-width: 1439px) {
    max-height: 250px;
  }

  @media screen and (min-width: 1440px) {
    width: 768px;
    height: 365px;
  }

  .title-nothing {
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    line-height: 1.07;
    letter-spacing: -0.02em;
    color: var(--primary-black);
  }

  li:nth-child(odd) {
    background-color: var(--secondary-wite);
  }
`;
