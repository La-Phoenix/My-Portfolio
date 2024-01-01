import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { Img, ImgDiv, LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <div>
    <Section row nopadding>
      <LeftSection>
        <ImgDiv>
          <Img src="/images/laphoenix.jpg" />
        </ImgDiv>
        <SectionTitle main center>
          Hi, I am <br />
          Samuel Okundalaiye
        </SectionTitle>
        <SectionText>
          I am a growing Web Developer with two years hands-on experience in
          React.js, Angular, Node.js, Express.js, MongoDB. I have also worked with, Typescript, DevExtreme, Angular Material, Bootstrap, Material UI
          , EJS(Embedded JavaScript), and PostgreSQL.
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
