import React, { useState } from "react";
import { skilldata, skillCategory } from "../../public/skilldata";
import RadialBar from "../components/Chart/RadialBar";
import { Grid } from "../components/Layout/Grid";
import { ContentPageContainer } from "../components/Layout/HomePageStyle";
import { AnimatePresence } from "framer-motion";
import { Text, TitleBox } from "../components/Home/ContextStyle";
import { Button } from "../components/Layout/Btn";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

const variants = {
  invisible: {
    x: 500,
    opacity: 0,
    scale: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: { x: -500, opacity: 0, scale: 0, transition: { duration: 1 } },
};

const Skill = () => {
  const [visible, setVisible] = useState(1);
  const nextPlease = () => setVisible((prev) => (prev === 5 ? 5 : prev + 1));
  const prevPlease = () => setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  return (
    <ContentPageContainer maxWidth={1024}>
      <TitleBox>
        <Text>{skillCategory[visible]}</Text>
      </TitleBox>
      <AnimatePresence>
        {[1, 2, 3, 4, 5].map((tab) =>
          tab === visible ? (
            <Grid
              variants={variants}
              initial="invisible"
              animate="visible"
              exit="exit"
              key={tab}
            >
              {skilldata[tab].map((skill) => (
                <RadialBar key={skill.name} {...skill} />
              ))}
            </Grid>
          ) : null
        )}
      </AnimatePresence>
      <Button onClick={prevPlease} disabled={1 === visible}>
        <BsFillCaretLeftFill style={{ color: "rgba(81,90,218,1)" }} />
        prev
      </Button>
      <Button onClick={nextPlease} right disabled={5 === visible}>
        next
        <BsFillCaretRightFill style={{ color: "rgba(81,90,218,1)" }} />
      </Button>
    </ContentPageContainer>
  );
};

export default Skill;
