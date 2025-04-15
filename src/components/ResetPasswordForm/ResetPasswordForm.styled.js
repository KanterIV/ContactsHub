import styled from 'styled-components';

export const StyledResetPasswordForm = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
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
`;
