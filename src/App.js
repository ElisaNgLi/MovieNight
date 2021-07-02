import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Header from "../src/components/Style/Header";
import Footer from "../src/components/Style/Footer";
import AboutUs from "../src/components/AboutUs/AboutUs";
import Terms from "../src/components/Terms/Terms";
import Registration from "../src/components/Registration/Registration";
import Login from "./components/Registration/Login";
import ForgotPassword from "./components/Registration/ForgotPassword";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forgotpassword">
            <ForgotPassword />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
