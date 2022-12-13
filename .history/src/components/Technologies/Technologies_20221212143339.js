import React from "react";
import { DiAngularSimple, DiFirebase, DiReact, DiZend } from "react-icons/di";
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
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Front-End to Back-End.
    </SectionText>
    <List>
      <ListItem>
        <div style={{ display: "flex" }}>
          <DiReact size="3rem" />
          <p style={{ fontSize: "3rem" }}>/</p>
          <DiAngularSimple size="3rem" />
        </div>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js and Angular
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAngularSimple size="3rem" />
        <ListContainer>
          <ListTitle>Backend-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js using Express.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
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
