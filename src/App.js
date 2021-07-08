import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Header from "../src/components/Style/Header";
import Footer from "../src/components/Style/Footer";
import AboutUs from "../src/components/AboutUs/AboutUs";
import Terms from "../src/components/Terms/Terms";
import Registration from "../src/components/Registration/Registration";
import Login from "./components/Registration/Login";
import ForgotPassword from "./components/Registration/ForgotPassword";
import Home from "./pages/HomePage";
import Account from "./components/Account/Account";
import ResetPassword from "./components/Account/ResetPassword";
import MovieListing from "./components/Listing/MovieList";
import TvList from "./components/Listing/TvList";
import MovieDetails from "./components/Details/MovieDetails";

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
          <Route path="/myaccount">
            <Account />
          </Route>
          <Route path="/resetpassword">
            <ResetPassword />
          </Route>
          <Route exact path="/movies">
            <MovieListing />
          </Route>
          <Route exact path="/tv">
            <TvList />
          </Route>
          <Route path="/movies/:id">
            <MovieDetails />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
