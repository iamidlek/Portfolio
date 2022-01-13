import { motion } from "framer-motion";
import styled from "styled-components";

export const BigSquareVariants = {
  start: {
    opacity: 0,
    y: 15,
    rotateZ: 0,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
      duration: 2,
    },
  },
  active: {
    scale: [1, 1.5, 1],
    rotateZ: [0, 360, 0],
    transition: {
      repeat: Infinity,
      duration: 4,
    },
  },
};

export const BigSquare = styled(motion.div)`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 200px;
  right: 30%;
  border-radius: 30px;
  background: linear-gradient(
    156deg,
    rgba(141, 116, 235, 1) 0%,
    rgba(98, 139, 191, 1) 100%
  );
  @media ${(props) => props.theme.breakpoints.md} {
    right: 10vw;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    right: 5vw;
  }
`;

export const Card = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 300px;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    height: 400px;
  }
`;

export const Thumbnail = styled(motion.img)`
  display: block;
  width: 300px;
  height: 240px;
  margin-right: 24px;
  flex-shrink: 0;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 180px;
    height: 150px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 0 auto;
  }
`;

export const Description = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 240px;

  @media ${(props) => props.theme.breakpoints.md} {
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    align-items: center;
  }
`;

export const BadgeBox = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 330px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    justify-content: center;
  }
`;

export const Badge = styled(motion.span)`
  text-align: center;
  height: 26px;
  line-height: 1.4;
  padding: 0 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  border-radius: 15px;
  background: linear-gradient(
    108deg,
    rgba(149, 121, 255, 1) 0%,
    rgba(138, 166, 200, 1) 100%
  );
  color: ${(props) => props.theme.colors.primary1};
`;

export const Detail = styled(motion.div)`
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 330px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 300px;
  }
`;
