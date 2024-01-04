// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// import Rocket from "@mui/icons-material/Rocket";
// import Account from "@mui/icons-material/AccountCircle";
// import { useNavigate } from "react-router-dom";
// import Modal from "@mui/material/Modal";
// import { TextField } from "@mui/material";
// import { Link } from 'react-router-dom';
// import SideBar from "./SideBar";

// const pages = ["Home", "About", "Contact"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// function Navbar() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: "100vw",
//     bgcolor: "background.paper",
//     border: "2px solid #000",
//     boxShadow: 24,
//     p: 4,
//   };
//   const navigate = useNavigate();
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//     navigate("/Login");
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };
//   const handleAbout = () => {
//     var x = true;
//     if (x) {
//       navigate("/about");
//     } else {
//       navigate("/contact");
//     }
//   };

//   return (
//     <>
    
//       <AppBar position="static" style={{backgroundColor:"rgb(0, 7, 61)", width:'100vw',p:'0'}}>
//         <Container maxWidth="xl">
//           <Toolbar disableGutters>
//             <Rocket sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
//             <Typography
//               variant="h6"
//               noWrap
//               component="a"
//               href="#app-bar-with-responsive-menu"
//               sx={{
//                 mr: 2,
//                 display: { xs: "none", md: "flex" },
//                 fontFamily: "monospace",
//                 fontWeight: 700,
//                 letterSpacing: ".3rem",
//                 color: "inherit",
//                 textDecoration: "none",
//               }}
//             >
//               Freelance
//             </Typography>

//             <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleOpenNavMenu}
//                 color="inherit"
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorElNav}
//                 anchorOrigin={{
//                   vertical: "bottom",
//                   horizontal: "left",
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "left",
//                 }}
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//                 sx={{
//                   display: { xs: "block", md: "none" },
//                 }}
//               >
//                 {pages.map((page) => (
//                   <MenuItem key={page} onClick={handleCloseNavMenu}>
//                     <Typography textAlign="center">{page}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>
//             <Avatar sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
//             <Typography
//               variant="h5"
//               noWrap
//               component="a"
//               href="#app-bar-with-responsive-menu"
//               sx={{
//                 mr: 2,
//                 display: { xs: "flex", md: "none" },
//                 flexGrow: 1,
//                 fontFamily: "monospace",
//                 fontWeight: 700,
//                 letterSpacing: ".3rem",
//                 color: "inherit",
//                 textDecoration: "none",
//               }}
//             >
              
//             </Typography>
//             <Box
//               sx={{
//                 flexGrow: 1,
//                 display: {
//                   xs: "none",
//                   md: "flex",
//                   justifyContent: "flex-end",
//                   gap: "1rem",
//                   mr: "2rem",
//                 },
//               }}
//             >
//               <Button
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: "white", display: "block" }}>
//                 {/* Login */}
//                 <Button>
//                   <Link to=""></Link>
//                   Login
//              </Button>
//               </Button>
//               <Link to="/page1"> <Button
//                 onClick={handleAbout}
//                 sx={{ my: 2, color: "white", display: "block" }}
//               >
                
//                 About
//               </Button></Link>
//               <Button
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: "white", display: "block" }}
//               >
//                 Contact
//               </Button>
//             </Box>

//             <Box sx={{ flexGrow: 0 }}>
//               <Tooltip title="User">
//                 {<IconButton sx={{ p: 0 }} onClick={handleOpen}>
                  
                 
//                   <Account
//                     sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
//                   />
//                 </IconButton>}
//               </Tooltip>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//           {/* {<button onClick={() =>{
//                 navigate("/Login");
//               }}>Login</button>} */}
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//           <TextField id="outlined-basic" label="username" variant="outlined" color='secondary'sx={{my:1,width:'100%'}} />
//           <TextField id="outlined-basic" label="password" variant="outlined" color='secondary'sx={{my:1,width:'100%'}} />
//           <Button variant="contained">Login</Button>

//           </Typography>
//         </Box>
//       </Modal>
//     </>
//   );
// }
// export default Navbar;




//New
// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// import Rocket from "@mui/icons-material/Rocket";
// import Account from "@mui/icons-material/AccountCircle";
// import { useNavigate } from "react-router-dom";
// import Modal from "@mui/material/Modal";
// import { TextField } from "@mui/material";
// import { Link } from 'react-router-dom';

// const pages = ["Home", "About", "Contact"];

// function Navbar() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: "100vw",
//     bgcolor: "background.paper",
//     border: "2px solid #000",
//     boxShadow: 24,
//     p: 4,
//   };
//   const navigate = useNavigate();
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//     navigate("/Login");
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };
//   const handleAbout = () => {
//     var x = true;
//     if (x) {
//       navigate("/about");
//     } else {
//       navigate("/contact");
//     }
//   };

//   return (
//     <>
//       <AppBar position="static" style={{ backgroundColor: "rgb(0, 7, 61)", width: '100vw', p: '0' }}>
//         <Container maxWidth="xl">
//           <Toolbar disableGutters>
//             <Rocket sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
//             <Typography
//               variant="h6"
//               noWrap
//               component="a"
//               href="#app-bar-with-responsive-menu"
//               sx={{
//                 mr: 2,
//                 display: { xs: "none", md: "flex" },
//                 fontFamily: "monospace",
//                 fontWeight: 700,
//                 letterSpacing: ".3rem",
//                 color: "inherit",
//                 textDecoration: "none",
//               }}
//             >
//               Freelance
//             </Typography>

//             <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleOpenNavMenu}
//                 color="inherit"
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorElNav}
//                 anchorOrigin={{
//                   vertical: "bottom",
//                   horizontal: "left",
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "left",
//                 }}
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//                 sx={{
//                   display: { xs: "block", md: "none" },
//                 }}
//               >
//                 {pages.map((page) => (
//                   <MenuItem key={page} onClick={handleCloseNavMenu}>
//                     <Typography textAlign="center">{page}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>
//             <Avatar sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
//             <Typography
//               variant="h5"
//               noWrap
//               component="a"
//               href="#app-bar-with-responsive-menu"
//               sx={{
//                 mr: 2,
//                 display: { xs: "flex", md: "none" },
//                 flexGrow: 1,
//                 fontFamily: "monospace",
//                 fontWeight: 700,
//                 letterSpacing: ".3rem",
//                 color: "inherit",
//                 textDecoration: "none",
//               }}
//             >
              
//             </Typography>
//             <Box
//               sx={{
//                 flexGrow: 1,
//                 display: {
//                   xs: "none",
//                   md: "flex",
//                   justifyContent: "flex-end",
//                   gap: "1rem",
//                   mr: "2rem",
//                 },
//               }}
//             >
//               <Button
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: "white", display: "block", width: "5rem" }}
//               >
//                 Login
//               </Button>
//               <Link to="/page1">
//                 <Button
//                   onClick={handleAbout}
//                   sx={{ my: 2, color: "white", display: "block", width: "5rem" }}
//                 >
//                   About
//                 </Button>
//               </Link>
//               <Link to="/page2">
//               <Button
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: "white", display: "block", width: "5rem" }}
//               >
//                 Contact
//               </Button>
//               </Link>
//               <Link to="/page2">
//               <Button
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: "white", display: "block", width: "5rem" }}
//               >
//                 Logout
//               </Button>
//               </Link>
//             </Box>

//             <Box sx={{ flexGrow: 0 }}>
//               <Tooltip title="User">
//                 {<IconButton sx={{ p: 0 }} onClick={handleOpen}>
                  
                 
//                   <Account
//                     sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
//                   />
//                 </IconButton>}
//               </Tooltip>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             {/* {<button onClick={() => { navigate("/Login"); }}>Login</button>} */}
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             <TextField id="outlined-basic" label="username" variant="outlined" color='secondary' sx={{ my: 1, width: '100%' }} />
//             <TextField id="outlined-basic" label="password" variant="outlined" color='secondary' sx={{ my: 1, width: '100%' }} />
//             <Button variant="contained">Login</Button>
//           </Typography>
//         </Box>
//       </Modal>
//     </>
//   );
// }

// export default Navbar;



//NEW11111
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Rocket from "@mui/icons-material/Rocket";
import Account from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { Link } from 'react-router-dom';

const pages = ["Home", "About", "Contact"];

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);

    const isLogoutButtonClicked = window.event && window.event.currentTarget.innerText.toLowerCase().includes("logout");

    if (isLogoutButtonClicked) {
      console.log('Logout message');
    } else {
      navigate("/Login");
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleAbout = () => {
    var x = true;
    if (x) {
      navigate("/about");
    } else {
      navigate("/contact");
    }
  };

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: "rgb(0, 7, 61)", width: '100vw', p: '0' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Rocket sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Freelance
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Avatar sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  justifyContent: "flex-end",
                  gap: "1rem",
                  mr: "2rem",
                },
              }}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block", width: "5rem" }}
              >
                Login
              </Button>
              <Link to="/page1">
                <Button
                  onClick={handleAbout}
                  sx={{ my: 2, color: "white", display: "block", width: "5rem" }}
                >
                  About
                </Button>
              </Link>
              <Link to="/page2">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block", width: "5rem" }}
                >
                  Contact
                </Button>
              </Link>
              
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="User">
                {<IconButton sx={{ p: 0 }} onClick={handleOpen}>
                  <Account
                    sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  />
                </IconButton>}
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField id="outlined-basic" label="username" variant="outlined" color='secondary' sx={{ my: 1, width: '100%' }} />
            <TextField id="outlined-basic" label="password" variant="outlined" color='secondary' sx={{ my: 1, width: '100%' }} />
            <Button variant="contained">Login</Button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default Navbar;

