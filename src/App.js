import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar  from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import axios from 'axios';
import GithubState from './context/github/GithubState';
import './App.css';

const App = () => {  
  const [alert, setAlert] = useState(null);

  // Set Alert
  const showAlert = (msg, type) => {
    setAlert({msg, type});

    setTimeout(() => setAlert(null), 5000);
  };

  return (  
      <GithubState>    
        <Router>
          <div className="App">
            <Navbar  />
            <div className="container">
              <Alert alert={alert} />
              <Routes>
                <Route exact path='/' element={
                        <Fragment>
                          <Search setAlert={showAlert} />
                          <Users />
                        </Fragment>
                 } />
                 <Route exact path='/about' element={ 
                   <Fragment>
                     <About />
                   </Fragment>
                  } />
                  <Route exact path='/user/bradtraversy' render={(props) => {
                    return (
                      <Fragment>
                        <User {...props} />
                      </Fragment>
                    )}} />
              </Routes>                   
            </div>
          </div>
        </Router>
      </GithubState>  
  );
}

export default App;
