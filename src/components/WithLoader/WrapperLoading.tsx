import React from "react";
import withLoader from "./WithLoader";

const Wrapper: React.FC = (props) => {
  return <React.Fragment>{props.children}</React.Fragment>;
};

export default withLoader(Wrapper);
