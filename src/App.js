import React from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Page from './pages'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Page.LoginPage} />
        <Route path="/collection" component={Page.CollectionPage} />
        <Route path="/note/:id" component={Page.NotePage} />
      </Router>
    </div>
  );
}

export default App;
