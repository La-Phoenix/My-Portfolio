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
          I am a growing Web Developer who began my journey in 2020. I have experience with technologies like React.js, TypeScript, Nest, Angular, Node.js, Express.js, and MongoDB. I have also worked with  DevExtreme, Angular Material, Bootstrap, Material UI, EJS (Embedded JavaScript), and PostgreSQL. Currently, I am expanding my skills by learning DevOps.
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
