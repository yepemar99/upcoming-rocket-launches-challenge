import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { Store } from "redux";
import configureStore, { IApplicationState } from "./store";
import App from "./App";

interface IProps {
  store: Store<IApplicationState>;
}

const Root: React.FC<IProps> = (props) => {
  return (
    <Provider store={props.store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root store={configureStore()} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
