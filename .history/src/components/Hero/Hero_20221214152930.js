import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <div>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I am <br />
          Samuel Okundalaiye
        </SectionTitle>
        <SectionText>
          I am a growing Web Developer with a year hands on experience in
          React.js, Angular, Node.js, Express.js, Angular Material, Bootstrap,
          HTML5, CSS3, JavaScript, EJS(Embedded JavaScript), PostgreSQL and
          MongoDB.
        </SectionText>
        <Button
          onClick={() =>
            (window.location = "https://www.linkedin.com/in/samuel-okundalaiye")
          }
        >
          Learn more
        </Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;
