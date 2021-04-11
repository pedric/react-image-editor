import "./App.css";
import Menu from "./components/Menu";
import LayoutPanel from "./components/LayoutPanel";
import Canvas from "./components/Canvas";

function App() {
  return (
    <div className='App'>
      <Canvas />
      <Menu />
    </div>
  );
}

export default App;
