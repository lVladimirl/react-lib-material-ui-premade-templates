import "./App.css";

import { Switch, Route, Link } from "react-router-dom";
import LoginPage1 from "./Pages/LoginPage1";
import RegisterPage1 from "./Pages/RegisterPage1";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Switch>
          <Route exact path="/">
            <Link to="/loginPage1"> Login Page version 1 </Link>
          </Route>
          <Route path="/loginPage1">
            <LoginPage1/>
          </Route>
          <Route path="/registerPage1">
            <RegisterPage1/>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
