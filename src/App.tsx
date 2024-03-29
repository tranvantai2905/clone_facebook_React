import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routers from "./router";
import { withLoggedIn } from "./router/ProtectedRouter";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <Routes>
        {routers.map((route, index) => {
          const Layout = route.layout || Fragment;
          const Element = route.needLogin
            ? withLoggedIn(route.element)
            : route.element;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Element />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
