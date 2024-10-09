import styled from 'styled-components';

export const StyledFilterInput = styled.input`
  width: 100%;
  padding: 12px 24px;

  border: 1px solid var(--input-border-color);
  border-radius: 8px;

  @media screen and (max-width: 767px) {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 768px) {
    margin-right: 20px;
  }

  &:focus {
    outline: 0;
    border-color: var(--logo-accent);
    box-shadow: 0 0 0 0.25rem rgba(240, 213, 7, 0.25);
  }
`;
