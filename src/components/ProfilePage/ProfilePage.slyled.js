import styled from 'styled-components';

export const StyledProfilePage = styled.div`
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 26px;

    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
  }
  .avatar-wrapper {
    min-width: 200px;
  }

  .profile-header {
    margin-bottom: 6px;
    font-size: 20px;
    line-height: 1.07;
    letter-spacing: -0.02em;
    color: var(--primary-black);
  }
  .profile-user-status {
    font-size: 14px;
    color: rgb(109, 103, 119);
    margin-bottom: 20px;
  }
  .profile-user-status-value {
    font-size: 14px;
    color: var(--logo-accent);
  }
  .avatar-input {
    display: none;
  }
  .upload-button {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    display: flex;
    border: 1px dashed var(--input-border-color);
    border-style: dashed;
    border-width: 2px;
    border-color: var(--input-border-color);
    border-spacing: 40px;
    align-items: center;
    justify-content: center;
  }

  .avatar-img {
    width: 104px;
    height: 104px;
    border-radius: 50%;
  }
  .inputs-group {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }

  .user-info-title {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.07;
    letter-spacing: -0.02em;
    color: var(--primary-black);
  }
  .input-label {
    display: block;
    margin-bottom: 6px;
    font-size: 14px;
    line-height: 1.37;
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
`;
