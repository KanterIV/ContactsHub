import styled from 'styled-components';

export const StyledContactForm = styled.div`
  height: 366px;
  padding: 26px 18px;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  background-color: var(--grey-modal);

  @media screen and (min-width: 1440px) {
    width: 400px;
  }

  .contact-form-title {
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    line-height: 1.07;
    letter-spacing: -0.02em;
    color: var(--primary-black);
    margin-bottom: 16px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  .input-wrapper {
    position: relative;
    margin-bottom: 18px;

    &:last-of-type {
      margin-bottom: 32px;
    }
  }

  .input {
    width: 100%;
    padding: 16px 18px;
    border: 1px solid var(--input-border-color);
    border-radius: 15px;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:focus {
      outline: none;
      border-color: var(--logo-accent);
    }

    &::placeholder {
      font-size: 14px;
      line-height: 1.37;
      color: inherit;

      @media screen and (min-width: 768px) {
        font-size: 16px;
      }
    }
    &.error-input {
      border-color: var(--error-color);
    }
  }

  .error {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 4px;
    bottom: 0;
    left: 0;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: 0.01em;
    transform: translate(0, 100%);
    color: var(--error-color);

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;
