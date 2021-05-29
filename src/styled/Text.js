import styled from "styled-components";

const Text = styled.h1`
  @media screen and (max-width: 500px) {
    font-size: 2rem;
    word-break: break-all;
    text-align: center;
  }
  @media screen and (max-width: 450px) {
    font-size: 1.2rem;
    word-break: break-all;
    text-align: center;
  }
`;
export default Text;
