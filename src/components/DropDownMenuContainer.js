import React from "react";
import { useGlobalContext } from "../context";
import SubMenu from "./SubMenu";

const DropDownMenuContainer = () => {
  const { isShowMenu } = useGlobalContext();

  return (
    <aside>
      <div className='submenu'>{isShowMenu && <SubMenu />}</div>
    </aside>
  );
};

export default DropDownMenuContainer;
