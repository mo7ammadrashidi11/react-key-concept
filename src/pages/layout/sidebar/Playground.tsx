import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";

import {
  HomeOutlined,
  PeopleOutlined,
  ContactsOutlined,
  ReceiptOutlined,
  CalendarTodayOutlined,
  HelpOutlineOutlined,
  MenuOutlined,
} from "@mui/icons-material";
const ProSidebar = () => {
  const { collapseSidebar } = useProSidebar();

  return (
    <div id="app" style={{ display: "flex" }}>
      <Sidebar style={{ height: "100vh" }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlined />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}>
            <h2>Admin</h2>
          </MenuItem>

          <MenuItem icon={<HomeOutlined />}>Home</MenuItem>
          <MenuItem icon={<PeopleOutlined />}>Team</MenuItem>
          <MenuItem icon={<ContactsOutlined />}>Contacts</MenuItem>
          <MenuItem icon={<ReceiptOutlined />}>Profile</MenuItem>
          <MenuItem icon={<HelpOutlineOutlined />}>FAQ</MenuItem>
          <MenuItem icon={<CalendarTodayOutlined />}>Calendar</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default ProSidebar;
