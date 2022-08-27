import "./loginStatus.css";
import { useState } from "react";
import SignedIn from "../SignedIn/SignedIn";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Signout from "../Signout/Signout";
import React from "react";

export default function LoginStatus() {
  const [user, setUser] = useState<any>();
  const [signOut, setSignOut] = useState<boolean>(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setSignOut(true);
  };

  return (
    <div className="loginStatus">
      {user ? (
        <div>
          <Button
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            {user.fullname.split(" ")[0]}
            <AccountCircleIcon />
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      ) : (
        <Button
          variant="outlined"
          href="../../my-account"
          sx={{
            color: "GrayText",
            border: "HighlightText",
          }}
        >
          Login
        </Button>
      )}
      {/*  <SignedIn setUser={setUser} /> */}
      {signOut && <Signout setUser={setUser} />}
    </div>
  );
}
