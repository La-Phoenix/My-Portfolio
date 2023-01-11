import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
// Add this in your component file
require("react-dom");
window.React2 = require("react");
console.log(window.React1 === window.React2);

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          color: "white",
          marginBottom: "20px",
        }}
      >
        <DiCssdeck size="3rem" />
        <Span>Portfolio</Span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <NavLink href="#projects">Projects</NavLink>
      </li>
      <li>
        <NavLink href="#tech">Technologies</NavLink>
      </li>
      <li>
        <NavLink href="#about">About</NavLink>
      </li>
      <li>
        <NavLink href="#contact">Contact</NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/La-Phoenix">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/samuel-okundalaiye">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      {/* <SocialIcons>
        <AiFillInstagram size="3rem" />
      </SocialIcons> */}
    </Div3>
  </Container>
);

export default Header;
