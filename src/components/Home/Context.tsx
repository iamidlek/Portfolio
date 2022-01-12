import React from "react";
import { Box, boxVariants, contextVariants, Text } from "./ContextStyle";

const Context = () => {
  return (
    <Box variants={boxVariants} initial="start" animate="end">
      <Text size={24} variants={contextVariants}>
        안녕하세요!
      </Text>
      <Text size={24} variants={contextVariants}>
        하루 하루 꾸준히 성장하는
      </Text>
      <Text size={24} variants={contextVariants}>
        프론트엔드 개발자 유형철 입니다
      </Text>
    </Box>
  );
};

export default Context;
