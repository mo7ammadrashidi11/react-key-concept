import React from "react";
import ProSidebar from "./sidebar/Playground";
import { Outlet } from "react-router-dom";
import { AppBar, Box } from "@mui/material";
import NavBar from "./nav-bar";
const Layout = () => {
  return (
    <Box display="flex">
      <Box>
        <ProSidebar />
      </Box>
      <Box display="flex" flexDirection="column" width={1}>
        <NavBar />
        <Box width={1} height={1}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
