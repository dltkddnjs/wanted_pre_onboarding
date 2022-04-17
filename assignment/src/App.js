import "./components/styles/App.css";
import Toggle from "./components/Toggle";
import Tab from "./components/Tab";
import Slider from "./components/Slider";
import Input from "./components/Input";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div className="App">
      <Toggle />
      <Tab />
      <Slider />
      <Input />
      <Dropdown />
    </div>
  );
}

export default App;
