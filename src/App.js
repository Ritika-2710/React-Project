import React from 'react';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Innerdoc/Signup';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={["/", "/signup"]} exact component={Signup}></Route>
          <Route path="/login" exact component={Login}></Route>
        </Switch>
      </Router>  
    </div>

  );
}

export default App;
