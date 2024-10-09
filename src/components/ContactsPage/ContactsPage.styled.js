import styled from 'styled-components';

export const StyledContactsPage = styled.div`
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 26px;

    @media screen and (min-width: 1440px) {
      flex-direction: row-reverse;
    }
  }
`;
