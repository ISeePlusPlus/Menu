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
  const [coordinates, setCoordinates] = useState({});

  const handleMainMenuClick = (e, left, right, bottom) => {
    if (!isShowMenu || monitorTypeId !== parseInt(e.target.value)) {
      setMonitorTypeId(parseInt(e.target.value));
      setCoordinates({ left, right, bottom });
      setIsShowMenu(true);
    } else {
      closeSubmenu();
    }
  };

  const handleSubMenuClick = (e) => {
    setMonitorName(e.target.name);
    //setLegendId(data.MonitorType[monitorTypeId].LegendId);
    const currentMonitorType = MonitorType.find(
      (monitorType) => monitorType.Id === monitorTypeId
    );
    setLegendId(currentMonitorType.LegendId);
    closeSubmenu();
  };

  const closeSubmenu = () => {
    setIsShowMenu(false);
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
        coordinates,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
