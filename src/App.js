import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import './App.css';

// Importing the pages
// import Layout from './components/layouts/Layout'; // I do not need the layout for now
import PageNotFound from './components/pages/404-page';
import ShowColor from './components/pages/ShowColor';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ShowColor />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
