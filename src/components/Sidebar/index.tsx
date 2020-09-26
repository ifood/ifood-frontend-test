import React, { memo } from "react";
import { SidebarContainer } from "./styles";

type Props = {
  isOpen: boolean;
}

const Sidebar: React.FC<Props> = ({ isOpen }) => {

  return (
    <SidebarContainer isOpen={ isOpen }>

    </SidebarContainer>
  );
}

export default memo(Sidebar);
