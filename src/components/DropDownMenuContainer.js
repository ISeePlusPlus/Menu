import React from "react";
import { useGlobalContext } from "../context";
import SubMenu from "./SubMenu";

const DropDownMenuContainer = () => {
  const { isShowMenu } = useGlobalContext();

  return <div className='submenu'>{isShowMenu && <SubMenu />}</div>;
};

export default DropDownMenuContainer;
