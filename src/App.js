import "./App.scss";
import Navigation from "./component/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import { Switch, Route } from "react-router-dom";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Animation from "./pages/animation/Animation";

import NasaImages from "./pages/nasa/NasaImages";
import Bollie from "./pages/bolComponents/Bollie";
import Tesla from "./pages/tesla/Tesla";

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <div style={{ position: "absolute", zIndex: 2 }}>
        {/* <Navigation color="white"></Navigation> */}
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/projects" component={Projects}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/nasa" component={NasaImages}></Route>
          <Route path="/animation" component={Animation}></Route>
          <Route path="/bollie" component={Bollie}></Route>
          <Route path="/tesla" component={Tesla}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
