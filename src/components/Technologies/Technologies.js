import React from "react";
import {
  DiAngularSimple,
  DiExtjs,
  DiFirebase,
  DiMongodb,
  DiNodejs,
  DiPostgresql,
  DiReact,
  DiZend,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Front-End to Back-End.
    </SectionText>
    <List>
      <ListItem>
        <div style={{ display: "flex" }}>
          <DiReact size="3rem" />
          <p style={{ fontSize: "2.4rem" }}>/</p>
          <DiAngularSimple size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, Angular and Nextjs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejs size="5rem" />
        <ListContainer>
          <ListTitle>Backend-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js using Express.js, Nestjs
            And ASP.NET
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <div style={{ display: "flex" }}>
          <DiMongodb size="3rem" />
          <p style={{ fontSize: "2.4rem" }}>/</p>
          <DiPostgresql size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with <br />
            MongoDB(NoSQL) and PostgreSQL(SQL)
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
