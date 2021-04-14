import "./App.css";
import Menu from "./components/Menu";
import LayoutPanel from "./components/LayoutPanel";
import Canvas from "./components/Canvas";
import DebugMonitor from "./components/DebugMonitor";

function App() {
  return (
    <div className='App'>
      <DebugMonitor />
      <Canvas />
      <Menu />
    </div>
  );
}

export default App;
