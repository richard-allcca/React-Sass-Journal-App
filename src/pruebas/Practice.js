import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import Admin from "./Admin";
import Perfil from "./Perfil";

const Practice = () => {
  return (
    <div>
      <Router>
        <aside>
          <section className="">
            <div className="">
              <NavLink exact to="/home" activeClassName="active">
                Administration
              </NavLink>
            </div>
            <div className="">
              <NavLink exact to="/userLogged" activeClassName="active">
                Perfil Usuario
              </NavLink>
            </div>
          </section>
        </aside>

        <Switch>
          <Route path="/home" component={Admin} />
          <Route path="/userLogged" component={Perfil} />
        </Switch>
      </Router>
    </div>
  );
};

export default Practice;
