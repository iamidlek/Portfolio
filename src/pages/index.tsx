import type { NextPage } from "next";
import Image from "next/image";
import Context from "../components/Home/Context";
import { BigSquare, BigSquareVariants } from "../components/Layout/Deco";
import {
  BoxVariants,
  ContentPageContainer,
  ProfileFrame,
} from "../components/Layout/HomePageStyle";
import myimg from "/public/mypic.jpg";

const Home: NextPage = () => {
  return (
    <ContentPageContainer maxWidth={800}>
      <BigSquare
        variants={BigSquareVariants}
        initial="start"
        animate="end"
        whileHover="active"
      />
      <ProfileFrame
        variants={BoxVariants}
        initial="start"
        animate="end"
        whileHover="active"
      >
        <Image src={myimg} alt="profile image" width={320} height={320} />
      </ProfileFrame>
      <Context />
    </ContentPageContainer>
  );
};

export default Home;
