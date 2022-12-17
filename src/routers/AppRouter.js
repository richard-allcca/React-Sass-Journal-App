import React from "react";
import {
   BrowserRouter as Router,
   Redirect,
   Route,
   Switch,
} from "react-router-dom";

// import { BrowserRouter, Route } from "react-router-dom";
import JournalScreen from "../components/journal/JournalScreen";
import AuthRouter from "./AuthRouter";

const AppRouter = () => {
   return (
      <Router>
         <Switch>
            <Route path="/auth" component={AuthRouter} />
            <Route exact path="/" component={JournalScreen} />
            <Redirect to="/auth/login" />
         </Switch>
      </Router>
   );
};

export default AppRouter;
