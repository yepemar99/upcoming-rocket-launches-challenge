import React from "react";
import styled from "styled-components";
import Overlay from "../components/Overlay/Overlay";

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutS backgound_image="/img/img.png">
      <Overlay>{children}</Overlay>
    </LayoutS>
  );
};

export default Layout;

const LayoutS = styled.div<{ backgound_image: string }>`
  background-image: url(${(props) => props.backgound_image});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
`;
