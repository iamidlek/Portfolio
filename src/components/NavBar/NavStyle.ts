import styled from "styled-components";

export const NavBar = styled.nav`
  width: 240px;
  height: 100vh;
  margin: 0 auto 0 0;
  background: ${(props) => props.theme.colors.gradientBackground};
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding-top: 80px;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100px;
    padding-top: 160px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 80px;
    flex-direction: row;
    background: ${(props) => props.theme.colors.gradientBackground2};
    padding-top: 0px;
  }
`;

export const ProfileImageBox = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 40px;
  div {
    width: 100%;
    height: 100%;
    border: 2px solid #fff;
    border-radius: 50%;
    overflow: hidden;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    height: 100px;
    padding: 20px;
    margin-bottom: 30px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80px;
    height: 80px;
    margin-bottom: 0;
  }
`;
