import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import "antd/dist/antd.css";

import "./style.scss";

const About = React.lazy(() => import("./About"));
const Contact = React.lazy(() => import("./Contact"));
const Product = React.lazy(() => import("./Product"));
const Singer = React.lazy(() => import("./Singer"));

const routes = [
  { path: "/", exact: true, main: () => <Home /> },
  {
    path: "/product/:id",
    exact: true,
    main: ({ match }: { match: any }) => <Product match={match} />,
  },
  {
    path: "/singer/:id",
    exact: true,
    main: ({ match }: { match: any }) => <Singer match={match} />,
  },
  { path: "/about", exact: false, main: () => <About /> },
  { path: "/contact", exact: false, main: () => <Contact /> },
  { path: "", exact: false, main: () => <NotFound /> },
];

const App = () => {
  const showRoute = (routes: any) => {
    return routes.map((item: any, index: any) => {
      return (
        <Route
          key={index}
          path={item.path}
          exact={item.exact}
          component={item.main}
        />
      );
    });
  };

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>{showRoute(routes)}</Switch>
      </Suspense>
    </Router>
  );
};

export default App;
