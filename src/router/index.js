import React, { useState, useEffect } from "react";
import { HashRouter, Route } from "react-router-dom";

const Router = () => {
  const [nav, setNav] = useState(null);

  useEffect(() => {
    updateNav();
  }, []);

  const updateNav = async () => {
    let routesList = null;
    routesList = require("./routes").routes;

    const NAVIGATIONS = await routesList();
    setNav(NAVIGATIONS);
  };

  return (
    <>
      <HashRouter basename="/">
        {nav &&
          nav.map(({ name, path, loader: { default: Component } }) => (
            <Route
              key={name}
              exact
              path={path}
              render={props => <Component {...props} />}
            />
          ))}
      </HashRouter>
    </>
  );
};

export default Router;
