import React from "react";
import styled from "styled-components";

interface IProps {
  title: string;
  fontSize?: string;
  fontSizeMobile?: string;
  textAlign?: string;
}

const Title: React.FC<IProps> = ({
  title,
  fontSize,
  fontSizeMobile,
  textAlign,
}) => {
  return (
    <TitleS
      fontSizeMobile={fontSizeMobile ? fontSizeMobile : "2.5rem"}
      fontSize={fontSize ? fontSize : "5rem"}
      textAlign={textAlign ? textAlign : "center"}
    >
      <h1>{title}</h1>
    </TitleS>
  );
};

export default Title;

const TitleS = styled.div<{
  fontSize: string;
  fontSizeMobile: string;
  textAlign: string;
}>`
  text-align: ${(props) => props.textAlign};
  padding: 0 10px;
  h1 {
    color: var(--white);
    font-size: ${(props) => props.fontSize};
    margin: 10px 0;
    text-transform: capitalize;
  }
  @media (max-width: 600px) {
    h1 {
      font-size: ${(props) => props.fontSizeMobile};
    }
  }
`;
