import React from "react";
import styled from "styled-components";

const Overlay: React.FC = ({ children }) => {
  return <OverlayS>{children}</OverlayS>;
};

export default Overlay;

const OverlayS = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 20px;
`;
