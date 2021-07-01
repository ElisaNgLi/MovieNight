import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Header from "../src/components/Style/Header";
import Footer from "../src/components/Style/Footer";
import AboutUs from "../src/components/AboutUs/AboutUs";
import Terms from "../src/components/Terms/Terms";
import Registration from "../src/components/Registration/Registration";

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
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
