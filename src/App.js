import React from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Page from './pages'
import configureStore from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import './assets/css/main.css'

const {store , persistor} = configureStore()

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Router>
            <Route exact path="/" component={Page.LoginPage} />
            <Route path="/collection" component={Page.CollectionPage} />
            <Route path="/note/:id" component={Page.NotePage} />
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
