import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { client } from './graphql'
import { ApolloProvider } from '@apollo/react-hooks'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
