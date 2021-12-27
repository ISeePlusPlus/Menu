import React, { useRef } from "react";
import { useGlobalContext } from "../context";
import DropDownMenuContainer from "./DropDownMenuContainer";

//This contains the monitorTypes main menu
const MainMenuContainer = () => {
  const { MonitorType, handleMainMenuClick } = useGlobalContext();
  const container = useRef(null);

  const displaySubmenu = (e) => {
    const tmpBtn = e.target.getBoundingClientRect();
    const left = tmpBtn.left;
    const right = tmpBtn.right;
    const bottom = tmpBtn.bottom - 3;
    handleMainMenuClick(e, left, right, bottom);
  };

  return (
    <div>
      <nav className='main-nav'>
        <ul className='nav-btns'>
          {MonitorType.map((menuitem, menuindex) => {
            const { Id, Name, LegendId, description } = menuitem;
            return (
              <li key={menuindex} ref={container}>
                <button
                  onClick={(e) => displaySubmenu(e)}
                  value={Id}
                  className='nav-btn'
                >
                  {Name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      <DropDownMenuContainer />
    </div>
  );
};

export default MainMenuContainer;
