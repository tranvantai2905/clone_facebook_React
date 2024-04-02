import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import routers from "./router";
import { withLoggedIn, withoutLoggedIn } from "./router/ProtectedRouter";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        {routers.map((route, index) => {
          const Layout = route.layout || Fragment;
          const Element = route.needLogin
            ? withLoggedIn(route.element)
            : withoutLoggedIn(route.element);
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
