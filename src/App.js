import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar  from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {  

  return (  
      <GithubState>
        <AlertState>    
          <Router>
            <div className="App">
              <Navbar  />
              <div className="container">
                <Alert />
                <Routes>
                  <Route exact path='/' element={
                    <Home />
                  } />
                  <Route exact path='/about' element={ 
                    <Fragment>
                      <About />
                    </Fragment>
                    } />
                    <Route exact path='/user/login:' render={(props) => {
                      return (
                        <Fragment>
                          <User {...props} />
                        </Fragment>
                      )}} />
                </Routes>                   
              </div>
            </div>
          </Router>
        </AlertState>
      </GithubState>  
  );
}

export default App;
