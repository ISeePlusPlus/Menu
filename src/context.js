import React, { useState, useContext } from "react";
import data from "./data/Legends.json";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const { MonitorType, Legends, Monitor } = data;
  const defaultMonitorTypeId = MonitorType[0].Id;
  const defaultLegendId = MonitorType[0].LegendId;
  const defaultMonitorName = Monitor[0].Name;

  const [monitorTypeId, setMonitorTypeId] = useState(defaultMonitorTypeId);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [legendId, setLegendId] = useState(defaultLegendId);
  const [monitorName, setMonitorName] = useState(defaultMonitorName);

  const handleMainMenuClick = (e) => {
    setMonitorTypeId(parseInt(e.target.value));
    setIsShowMenu(true);
  };

  const handleSubMenuClick = (e) => {
    setMonitorName(e.target.name);
    setLegendId(data.MonitorType[monitorTypeId].LegendId);
  };

  return (
    <AppContext.Provider
      value={{
        MonitorType,
        Legends,
        Monitor,
        monitorTypeId,
        isShowMenu,
        legendId,
        monitorName,
        handleMainMenuClick,
        handleSubMenuClick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
