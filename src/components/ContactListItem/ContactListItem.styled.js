import styled from 'styled-components';

export const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 8px;
  padding: 12px 12px;

  .name-container {
    display: flex;
    align-items: center;
    gap: 12px;

    width: 100px;

    @media screen and (min-width: 768px) {
      width: 200px;
    }

    p {
      width: 80px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      @media screen and (min-width: 768px) {
        width: 180px;
      }
    }

    svg {
      width: 16px;
      height: 16px;

      path {
        stroke: var(--logo-accent);
      }
    }
  }

  .number-container {
    display: flex;
    align-items: center;
    gap: 10px;

    width: 200px;

    @media screen and (min-width: 768px) {
      width: 250px;
    }

    svg {
      width: 18px;
      height: 20px;

      path {
        fill: var(--logo-accent);
      }
    }
  }

  .list-item-btn {
    width: 16px;
    height: 16px;
    background-color: transparent;
    border: none;

    svg {
      width: 16px;
      height: 16px;

      path {
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
      }

      &:hover {
        path {
          stroke: var(--logo-accent);
        }
      }
    }
  }
`;
