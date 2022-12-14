import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const Img = styled.img`
  width: 40%;
  height: 40%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 50%;
`;
export const ImgDiv = styled.div`
  width: 100%;
  height: 40%;
  background-color: green;
  display: flex;
  justify-content: center;
`;
