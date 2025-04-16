import styled from 'styled-components';

export const StyledResetPasswordForm = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .pasword-form-title {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.07;
    letter-spacing: -0.02em;
    color: var(--primary-black);
    margin-bottom: 16px;
  }

  .password-input-wrapper {
    position: relative;
  }

  .password-input {
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
      color: rgb(84, 84, 84);
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
