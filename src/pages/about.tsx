import { NextPage } from "next";
import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { ContentPageContainer } from "../components/Layout/HomePageStyle";
import styled from "styled-components";

export const PdfBox = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const About: NextPage = () => {
  return (
    <ContentPageContainer maxWidth={1024}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.9.359/build/pdf.worker.js">
        <PdfBox>
          <Viewer fileUrl="./resume1.pdf" />
        </PdfBox>
      </Worker>
    </ContentPageContainer>
  );
};

export default About;
