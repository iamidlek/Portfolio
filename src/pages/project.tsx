import React from "react";
import { Text, TitleBox } from "../components/Home/ContextStyle";
import {
  Badge,
  BadgeBox,
  Card,
  Description,
  Detail,
  Thumbnail,
} from "../components/Layout/Deco";
import { CardGrid } from "../components/Layout/Grid";
import { ContentPageContainer } from "../components/Layout/HomePageStyle";
import { projects } from "../../public/projectdata";
import { IoLogoOctocat, IoLink } from "react-icons/io5";

const project = () => {
  return (
    <ContentPageContainer maxWidth={1024}>
      <TitleBox>
        <Text size={26}>Project</Text>
      </TitleBox>
      <CardGrid>
        {projects.map((item) => (
          <Card key={item.title}>
            <Thumbnail src={item.url} alt={item.title} />
            <Description>
              <BadgeBox>
                <Text size={18}>{item.date}</Text>
                <a
                  href={item.github}
                  title="GitHub"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "inherit" }}
                >
                  <IoLogoOctocat
                    style={{ fontSize: "22px", marginLeft: "20px" }}
                  />
                </a>
                {item.link && (
                  <a
                    href={item.link}
                    title="Link"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "inherit" }}
                  >
                    <IoLink style={{ fontSize: "22px", marginLeft: "20px" }} />
                  </a>
                )}
              </BadgeBox>
              <Text size={24}>{item.title}</Text>
              <BadgeBox>
                {item.badges.map((b, i) => (
                  <Badge key={i}>{b}</Badge>
                ))}
              </BadgeBox>
              <Detail dangerouslySetInnerHTML={{ __html: item.detail }} />
            </Description>
          </Card>
        ))}
      </CardGrid>
    </ContentPageContainer>
  );
};

export default project;
