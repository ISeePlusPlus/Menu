import React, { useState, useContext } from "react";
import data from "./data/Legends.json";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const { MonitorType, Legends, Monitor } = data;

  const defaultMonitorTypeId = MonitorType[0].Id;
  const [monitorTypeId, setMonitorTypeId] = useState(defaultMonitorTypeId);
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleMainMenuClick = (e) => {
    getSubMenuItems(e.target.value);
    setMonitorTypeId(parseInt(e.target.value));
    setIsShowMenu(true);
  };

  const getSubMenuItems = (monitorTypeId) => {
    monitorTypeId = parseInt(monitorTypeId);
    return Monitor.filter((monitor) => monitor.MonitorTypeId === monitorTypeId);
  };

  return (
    <AppContext.Provider
      value={{
        MonitorType,
        Legends,
        Monitor,
        monitorTypeId,
        isShowMenu,
        handleMainMenuClick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
