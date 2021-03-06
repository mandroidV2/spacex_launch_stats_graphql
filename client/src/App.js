import React from 'react';
import './App.css';
import logo from './logo.jpg'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
import Launches from './components/launches'
import Launch from './components/launch'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const client = new ApolloClient({
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img
            src ={logo} alt="SpaceX"
            style={{width: 300, display: 'block', margin: 'auto'}} 
          />
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
