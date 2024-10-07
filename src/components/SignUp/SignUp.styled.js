import styled from 'styled-components';

export const StyledSignUpContainer = styled.div`
  .signup-container {
    width: 100%;
    padding: 0;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }

  .register-form-container {
    border-radius: 25px 25px 0 0;
    background-color: var(--grey-modal);

    @media screen and (max-width: 767px) {
      padding: 32px 16px 0px 16px;
    }

    @media screen and (min-width: 768px) {
      padding: 48px 64px;
      border-radius: 25px;
      margin-top: 80px;
    }

    @media screen and (min-width: 1440px) {
      width: 628px;
      margin-top: 0;
    }
  }
  .register-form-title {
    font-weight: 600;
    font-size: 30px;
    line-height: 1.07;
    letter-spacing: -0.02em;
    color: var(--primary-black);
    margin-bottom: 16px;
  }

  .register-form-text {
    font-size: 16px;
    line-height: 1.5;
    color: var(--black-for-text);
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

  .password-input-wrapper {
    svg {
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
      transform: translate(-90%, 86%);

      width: 20px;
      height: 20px;
    }

    .error-svg {
      position: static;
      transform: translate(0, 0);
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

  .login-link {
    display: inline-block;
    width: 100%;
    margin-bottom: 57px;
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: rgba(18, 20, 23, 0.5);
  }
`;
