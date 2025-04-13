import styled from 'styled-components';

export const StyledProfilePage = styled.div`
  /* .wrapper {
    display: flex;
    flex-direction: column;
    gap: 26px;

    @media screen and (min-width: 1440px) {
      flex-direction: row-reverse;
    }
  } */

  .avatar-input {
    display: none;
  }
  .upload-button {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    display: flex;
    border: 1px dashed #c9d0d8;
    border-style: dashed;
    border-width: 2px;
    border-color: #c9d0d8;
    border-spacing: 40px;
    align-items: center;
    justify-content: center;
  }

  .avatar-img {
    width: 88px;
    height: 88px;
    border-radius: 50%;
  }
  .inputs-group {
    display: flex;
    flex-direction: column;
    gap: 20px;
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
