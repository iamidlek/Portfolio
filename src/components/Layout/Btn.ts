import styled from "styled-components";

export const Button = styled.button<{ right?: boolean }>`
  width: 100px;
  height: 60px;
  font-size: 24px;
  border: none;
  /* background: transparent; */
  position: absolute;
  cursor: pointer;
  top: 520px;
  left: ${(props) => (props.right ? "62%" : "28%")};
  background: linear-gradient(
    156deg,
    rgba(141, 116, 235, 1) 0%,
    rgba(98, 139, 191, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  svg {
    position: relative;
    top: 5px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    top: 104px;
    left: ${(props) => (props.right ? "60vw" : "40vw")};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    top: 50px;
    left: ${(props) => (props.right ? "56vw" : "18vw")};
  }
`;
