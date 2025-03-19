import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { Img, ImgDiv, LeftSection } from "./HeroStyles";
import { ABOUTME } from "../../constants/constants";

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
          {ABOUTME}
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
