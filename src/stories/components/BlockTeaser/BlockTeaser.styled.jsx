import styled from "styled-components";

export const StyledBlockTeaser = styled.div`
  display: flex;
  flex-direction: row;

  .teaser {
    height: 300px;
    width: 100%;
  }

  .teaser-card {
    background-color: #ececec;

    div {
      margin: 20px;
    }
  }

  .teaser-image {
    background-image: url(${({ image: { link } }) => link});
    background-size: cover;
  }
`;
