import React from 'react';
import './App.css';
import Login from './Components/Innerdoc/js/Login';
import Signup from './Components/Innerdoc/js/Signup';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Indentlogin from './Indentlogin';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={["/", "/signup"]} exact component={Signup}></Route>
          <Route path="/login" exact component={Login}></Route>
        </Switch>
      </Router>  
       {/* <Indentlogin/> */}
    </div>

  );
}

export default App;
