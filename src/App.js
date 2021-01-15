import "./App.scss";
import Navigation from "./component/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";

function App() {
  return (
    <div className="App">
      <div style={{ position: "absolute", zIndex: 2 }}>
        <Navigation></Navigation>
      </div>
      <div>
        <Home></Home>
        <div style={{ display: "flex" }}>
          <img
            src="https://freepngimg.com/thumb/graphic_design/6-2-graphic-design-transparent.png"
            style={{
              position: "relative",
              top: "-250px",
              zIndex: -5,
              left: "-80px",
            }}
          ></img>
        </div>
        <About></About>
      </div>
    </div>
  );
}

export default App;
