import React from "react";
import styled from "styled-components";
import Title from "../commons/Title/Title";

interface IProps {
  title: string;
}

const TopLaunch: React.FC<IProps> = ({ title }) => {
  return (
    <HeaderS>
      <Title
        textAlign="start"
        fontSizeMobile="1.5rem"
        title={title}
        fontSize="3rem"
      />
      <div>
        <ImgS className="logoHeader">
          <img src="/header.png" alt="Logo" />
        </ImgS>
      </div>
    </HeaderS>
  );
};

export default TopLaunch;

const HeaderS = styled.div`
  width: 100%;
  padding: 0px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    padding: 0px 0px;
  }
`;

const ImgS = styled.div`
  width: 150px;
  height: 150px;
  @media (max-width: 600px) {
    width: 100px;
    height: 100px;
  }
`;
