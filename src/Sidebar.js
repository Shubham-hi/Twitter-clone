import React from "react";
import "./Sidebar.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from "./SidebarOption";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Button } from "@mui/material";


function Sidebar() {
    return (
      <div className="sidebar">
        <TwitterIcon className="sidebar__twitterIcon" />
        <SidebarOption active Icon={HomeIcon} text="Home" />
        <SidebarOption Icon={SearchIcon} text="Explore" />
        <SidebarOption Icon={NotificationsNoneIcon} text="Notification" />
        <SidebarOption Icon={MailOutlineIcon} text="Messages" />
        <SidebarOption Icon={ListAltOutlinedIcon} text="Lists" />
        <SidebarOption Icon={PeopleOutlinedIcon} text="Communities" />
        <SidebarOption Icon={PersonOutlineIcon} text="Profile" />

        <Button variant="outline" className="sidebar__tweet" fullWidth> Tweet </Button>


    </div>
  );
}

export default Sidebar;