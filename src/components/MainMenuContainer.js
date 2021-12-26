import React from "react";

//This contains the monitorTypes main menu
const MainMenuContainer = ({ menuItems }) => {
  return (
    <nav className='main-nav'>
      <ul className='nav-btns'>
        {menuItems.map((menuitem, menuindex) => {
          const { Id, Name, LegendId, description } = menuitem;
          return (
            <button
              key={menuindex}
              onClick={() => console.log(Name, "button working")}
            >
              {description}
            </button>
          );
        })}
      </ul>
    </nav>
  );
};

export default MainMenuContainer;
