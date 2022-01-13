import styled from "styled-components";
import { motion } from "framer-motion";

export const variants = {
  invisible: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: { opacity: 0, scale: 0, transition: { duration: 1 } },
};

export const Grid = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 24px auto;
  position: absolute;
  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
    margin: 20px auto;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 26px;
    max-width: 350px;
    margin: 26px auto;
    margin-left: 16px;
  }
`;

export const CardGrid = styled(motion.div)`
  width: 84%;
  max-height: 70vh;
  overflow-y: auto;
  display: grid;
  grid-template-rows: auto;
  gap: 26px;
  margin: 0px auto 50px;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: -30px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 50px;
  }
`;
