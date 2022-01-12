import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 100%;
  margin: 0 auto 0 0;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  font-size: 20px;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: row;
    align-items: center;
  }
`;

export const MenuItem = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  @media ${(props) => props.theme.breakpoints.md} {
    height: 60px;
    padding: 20px;
    font-size: 26px;
    strong {
      display: none;
    }
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 19vw;
  }
`;

export const IconBox = styled.span`
  display: inline-block;
  width: 26px;
  height: 26px;
  vertical-align: middle;
`;
