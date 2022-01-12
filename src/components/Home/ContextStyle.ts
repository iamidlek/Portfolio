import styled from "styled-components";
import { motion } from "framer-motion";

export const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 10vw;
  top: 50vh;
  padding-left: 26px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);

  @media ${(props) => props.theme.breakpoints.md} {
    left: 12vw;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 360px;
    padding-left: 16px;
    left: 3vw;
  }
`;

export const Text = styled(motion.div)<{ size: number }>`
  height: 40px;
  font-size: ${(props) => props.size}px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    156deg,
    rgba(141, 116, 235, 1) 0%,
    rgba(98, 139, 191, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const TitleBox = styled(motion.div)`
  height: 140px;
  padding-top: 120px;
  padding-left: 50px;
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 40px;
    padding-top: 20px;
  }
`;

export const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      delay: 2,
      duration: 1,
      bounce: 0.5,
      delayChildren: 2.5, // 자식 요소 딜레이
      staggerChildren: 0.3, // 다음 컴포넌트 딜레이
    },
  },
};

export const contextVariants = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  },
};
