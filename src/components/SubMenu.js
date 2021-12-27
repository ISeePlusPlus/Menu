import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

const SubMenu = () => {
  const { Monitor, monitorTypeId, handleSubMenuClick, coordinates } =
    useGlobalContext();
  const container = useRef(null);

  useEffect(() => {
    const submenu = container.current;
    const { left, right, bottom } = coordinates;
    submenu.style.left = `${left}px`;
    submenu.style.top = `${bottom}px`;
    submenu.style.width = `${right - left}px`;
  }, [coordinates]);

  return (
    <ul className='submenu-content' ref={container}>
      {Monitor.filter((monitor) => monitor.MonitorTypeId === monitorTypeId).map(
        (item, itemIndex) => {
          const { Id, Name, Desc, MonitorTypeId } = item;
          return (
            <li key={itemIndex}>
              <button
                onClick={(e) => handleSubMenuClick(e)}
                id={Id}
                name={Name}
              >
                {Name}
              </button>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default SubMenu;
