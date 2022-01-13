import styled from "styled-components";
import { motion } from "framer-motion";

export const HomePage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow-x: hidden;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
  }
`;

export const ContentPageContainer = styled.div<{ maxWidth: number }>`
  max-width: ${(props) => props.maxWidth + "px"};
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.nomal};
  font-weight: 500;
  position: relative;
`;

export const BoxVariants = {
  start: {
    opacity: 0,
    y: 15,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
    },
  },
  active: {
    scale: [1, 1.1, 1],
    transition: {
      repeat: Infinity,
      duration: 4,
    },
  },
};

export const ProfileFrame = styled(motion.div)`
  max-width: 280px;
  max-height: 280px;
  border-radius: 30px;
  overflow: hidden;
  border: 5px solid ${(props) => props.theme.colors.background1};
  position: absolute;
  top: 50px;
  left: 6vw;
  @media ${(props) => props.theme.breakpoints.md} {
    left: 12vw;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    left: 3vw;
    bottom: 6vw;
  }
`;
