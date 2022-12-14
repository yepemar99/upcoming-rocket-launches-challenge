import React from "react";
import styled from "styled-components";
import Title from "../commons/Title/Title";
interface IProps {
  start: string;
  end: string;
}

const Windows: React.FC<IProps> = ({ start, end }) => {
  const startDate = new Date(start);
  const endtDate = new Date(end);
  const options: any = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    hour12: "false",
  };

  return (
    <WindowsS>
      <ImgS className="logo">
        <img src="/sist.png" alt="Logo" />
      </ImgS>
      <div>
        {" "}
        <div className="with-mt with-mb">
          <Title
            fontSize="2rem"
            fontSizeMobile="1.2rem"
            title={`Window Start : ${startDate.toLocaleString("en", options)}`}
          />
        </div>
        <div className="with-mb">
          <Title
            fontSize="2rem"
            fontSizeMobile="1.2rem"
            title={`Window Start : ${endtDate.toLocaleString("en", options)}`}
          />
        </div>
      </div>
      <ImgS className="logo">
        <img src="/rocket.png" alt="Logo" />
      </ImgS>
    </WindowsS>
  );
};

export default Windows;

const WindowsS = styled.div`
  color: white;
  width: 100%;
  display: flex;

  align-items: center;
  justify-content: center;
  padding: 16px 0px;
  .logo {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const ImgS = styled.div`
  margin: 0px 20px;
  width: 100px;
  min-width: 100px;
  height: 100px;
  min-height: 100px;

  @media (max-width: 600px) {
    width: 80px;
    min-width: 80px;
    height: 80px;
    min-height: 80px;
  }
`;
