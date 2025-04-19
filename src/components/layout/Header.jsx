import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { Suspense, useState, lazy } from "react";
import { orange } from "../constants/color";
import {
  Add as AddIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SearchDialog = lazy(()=> import ("../dialogs/Search")) 
const NotificationDialog = lazy(()=> import ("../dialogs/Notifications"))
const NewGroupDialog = lazy(()=> import ("../dialogs/NewGroup"))


const Header = () => {
  const navigate = useNavigate();

  const [ismobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);


  const handlemobile = () => {
    setIsMobile(!ismobile);
  };
  const openSearch = () => {
    setIsSearch(!isSearch);
    console.log("openSearch");
  };
  const openNewGroup = () => {
    setIsNewGroup(!isNewGroup);
    console.log("openNewGroup");
  };
  const openManageGroups = () => {
    navigate("/groups");
  
  };
  const openNotification = () => {
    setIsNotification(!isNotification);
  }

  const logoutHandler = () => {
    console.log("logoutHandler");
    localStorage.removeItem("userInfo");
    navigate("/login");
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position="static" sx={{ bgcolor: orange }}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Chattr
            </Typography>

            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconBtn
                icon={<MenuIcon />}
                title="Menu"
                onClick={handlemobile}
              />
            </Box>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Box>
              <IconBtn
                icon={<SearchIcon />}
                title="Search"
                onClick={openSearch}
              />
              <IconBtn
                icon={<NotificationIcon />}
                title="Notifications"
                onClick={openNotification}
              />


              <IconBtn
                icon={<AddIcon />}
                title="New Group"
                onClick={openNewGroup}
              />

              <IconBtn
                icon={<GroupIcon />}
                title="Manage Groups"
                onClick={openManageGroups}
              />
              <IconBtn
                icon={<LogoutIcon />}
                title="Logout"
                onClick={logoutHandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

    {
      isSearch && <Suspense fallback={ <Backdrop open={true} /> }>
        <SearchDialog/>
      </Suspense>
    }
    {
      isNewGroup && <Suspense fallback={<Backdrop open={true} />}>
        <NewGroupDialog/>
      </Suspense>
    }
    {
      isNotification && <Suspense fallback={<Backdrop open={true} />}>
        <NotificationDialog/>
      </Suspense>
    }

    </>
  );
};

const IconBtn = ({ icon, title, onClick }) => {
  return (
    <Tooltip title={title} arrow placement="top">
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default Header;
