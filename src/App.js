import React from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Page from './pages'
import store from './store'
import { Provider } from 'react-redux'
import './assets/css/main.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route exact path="/" component={Page.LoginPage} />
          <Route path="/collection" component={Page.CollectionPage} />
          <Route path="/note/:id" component={Page.NotePage} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
