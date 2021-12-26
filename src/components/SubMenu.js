import React from "react";
import { useGlobalContext } from "../context";

const SubMenu = () => {
  const { Monitor, monitorTypeId } = useGlobalContext();

  return (
    <ul>
      <h3>
        {Monitor.filter(
          (monitor) => monitor.MonitorTypeId === monitorTypeId
        ).map((item, itemIndex) => {
          return <li key={itemIndex}>{item.Name}</li>;
        })}
      </h3>
    </ul>
  );
};

export default SubMenu;
