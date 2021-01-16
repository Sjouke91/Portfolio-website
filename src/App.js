import "./App.scss";
import Navigation from "./component/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import { Switch, Route } from "react-router-dom";
import Projects from "./pages/projects/Projects";

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <div style={{ position: "absolute", zIndex: 2 }}>
        <Navigation></Navigation>
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/projects" component={Projects}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
