import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 20, text: "Open Source Projects" },
  { number: 1000, text: "Students" },
  { number: 1900, text: "Github Followers" },
  { number: 5000, text: "Github Stars" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {/* {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))} */}
      <Box>
        <BoxNum>Ithena</BoxNum>
        <BoxText>Web Development Intern(November(2022) - October(2023))</BoxText>
      </Box>
      <Box>
        <BoxNum>Universiry Of Ibadan (Nigeria)</BoxNum>
        <BoxText>Started Studying Computer Science(September(2023) - till date)</BoxText>
      </Box>
    </Boxes>
  </Section>
);

export default Acomplishments;
