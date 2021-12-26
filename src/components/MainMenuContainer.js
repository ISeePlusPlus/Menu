import React from "react";
import { useGlobalContext } from "../context";

//This contains the monitorTypes main menu
const MainMenuContainer = () => {
  const { MonitorType, handleMainMenuClick } = useGlobalContext();

  return (
    <nav className='main-nav'>
      <ul className='nav-btns'>
        {MonitorType.map((menuitem, menuindex) => {
          const { Id, Name, LegendId, description } = menuitem;
          return (
            <li key={menuindex}>
              <button onClick={(e) => handleMainMenuClick(e)} value={Id}>
                {Name}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MainMenuContainer;
