import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Course from './Course';
import Schedule from './Schedule';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: "http://localhost/dancefloor/web/graphql"
});

const Main = () => (
  <ApolloProvider client={client}>
    {/*<App/>*/}
    {/*
      <hr/>
    <Course />
      */}
     <Schedule />
  </ApolloProvider>
)

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
