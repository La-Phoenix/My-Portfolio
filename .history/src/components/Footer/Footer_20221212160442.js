import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+234-905-138-6625">+234-905-138-6625</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:samuelokundalaiye@gmail.com">connect</LinkItem>
        </LinkColumn>
        <SocialIconsContainer>
          <CompanyContainer></CompanyContainer>
          <SocialIcons href="https://github.com/La-Phoenix">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="www.linkedin.com/in/samuel-okundalaiye">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialIconsContainer>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
