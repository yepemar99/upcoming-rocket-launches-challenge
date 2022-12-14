import React from "react";
import styled from "styled-components";
interface IProps {
  loading: boolean;
  color?: string;
}
interface ILoader {
  color?: string;
}
const withLoader =
  <P extends object>(
    Component: React.ComponentType<P>
  ): React.FunctionComponent<P & IProps> =>
  ({ loading, color, ...props }: IProps) =>
    loading ? (
      <Loader color={color}>
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Loader>
    ) : (
      <Component {...(props as P)} />
    );
export default withLoader;

const Loader = styled.div<ILoader>`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    margin: auto;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 5px solid
      ${(props) => (props.color ? props.color : " var(--primary)")};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${(props) => (props.color ? props.color : " var(--primary)")}
      transparent transparent transparent;
    z-index: 1000;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
