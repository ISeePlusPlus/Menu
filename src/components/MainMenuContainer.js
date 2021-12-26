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
            <button
              key={menuindex}
              onClick={(e) => handleMainMenuClick(e)}
              value={Id}
            >
              {Name}
            </button>
          );
        })}
      </ul>
    </nav>
  );
};

export default MainMenuContainer;
