import styled from "styled-components";

export const MainStyled = styled.div`
  &.main-wrap {
    background-color: red;

    // main-wrap 자식들의 style은 여기서
    .main-title {
      font-size: 20px;
      color: blue;
      &:hover {
        color: green;
      }
    }

    @media (max-width: 1024px) {
      background-color: black;

      .main-title {
        font-size: 12px;
      }
    }
  }
`;
