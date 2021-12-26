import React from "react";
import { useGlobalContext } from "../context";

const SubMenu = () => {
  const { Monitor, monitorTypeId, handleSubMenuClick } = useGlobalContext();

  return (
    <ul>
      <h3>
        {Monitor.filter(
          (monitor) => monitor.MonitorTypeId === monitorTypeId
        ).map((item, itemIndex) => {
          const { Id, Name, Desc, MonitorTypeId } = item;
          console.log(item);
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
        })}
      </h3>
    </ul>
  );
};

export default SubMenu;
