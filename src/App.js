import "./App.css";
import Menu from "./components/Menu/Menu";
import routes from "./routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const showContent = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route key={index} path={route.path} exact={route.exact} component={route.main} />;
      });
    }
    return <Switch>{result}</Switch>;
  };
  return (
    <Router>
      <div className="App">
        <Menu />
        <div className="container">
          <div className="row">{showContent(routes)}</div>
        </div>
      </div>
    </Router>
  );
}

export default App;
