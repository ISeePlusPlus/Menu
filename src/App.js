import "./App.css";
import LegendContainer from "./components/LegendContainer";
import MainMenuContainer from "./components/MainMenuContainer";
import SubMenu from "./components/SubMenu";
import DropDownMenuContainer from "./components/DropDownMenuContainer";
import data from "./data/Legends.json";

function App() {
  const { MonitorType, Legends, Monitor } = data;
  return (
    <>
      <MainMenuContainer menuItems={MonitorType} />
      <DropDownMenuContainer />
      <SubMenu />
      <LegendContainer />
    </>
  );
}

export default App;
