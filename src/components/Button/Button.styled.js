import styled from 'styled-components';

export const StyledButton = styled.button`
  display: block;
  width: 100%;
  height: 50px;
  margin-bottom: 16px;
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

  &:hover,
  &:focus {
    scale: 1.02;
  }

  &:active {
    scale: 0.98;
  }

  &.welcome-btn {
    @media screen and (min-width: 768px) {
      width: 300px;
      margin: 0 auto;
    }

    @media screen and (min-width: 1440px) {
      width: 380px;
      height: 60px;
      margin: 0;
    }
  }

  &.contact-form-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin-bottom: 0;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
