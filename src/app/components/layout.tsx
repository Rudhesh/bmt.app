"use client"
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import Image from 'next/image';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MultilineChartIcon from '@mui/icons-material/MultilineChart';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsPausedIcon from '@mui/icons-material/NotificationsPaused';
import StorageIcon from '@mui/icons-material/Storage';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useRouter} from "next/navigation"
import {usePathname} from "next/navigation"


const drawerWidth = 240;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));







export default function Layout({ children }: any) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const router = useRouter();
  const pathname = usePathname();

  React.useEffect(() => {
    setOpen(true); // Ensure the menu is open when changing routes
  }, [pathname]);

  const handleDrawerOpen = () => {
    if (!open) {
      setOpen(true);
    }
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

console.log(open)

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "#384D6C" ,height: "45px"}}>
        <Toolbar className='top-bar' >
        <IconButton onClick={handleDrawerClose}>
       
          {open ?   <MenuOpenIcon  style={{ color: 'white',  marginBottom: "20px" }} />:null}
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon style={{  marginBottom: "20px"}} />
          </IconButton>
        
{!open ?   <Image
                src="/logo-breitfuss(1).png"
                height={125}
                width={125}
                alt="Breitfuss Logo"
                className="mb-5"
              /> :null}
              
             
           
        </Toolbar>
        
      </AppBar>
    
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader className="bg-[#384D6C] flex flex-col" >
        <Image
                src="/logo-breitfuss(1).png"
                height={125}
                width={125}
                alt="Breitfuss Logo"
                className="mb-7"
              />

         
        </DrawerHeader>
       
        
        <List className="bg-[#384D6C] text-white flex flex-col text-xs h-screen">
  <div className=" mb-10 flex flex-col items-center">
    <AccountCircleIcon style={{ fontSize: '66px' }} />
    <Typography variant='subtitle1' className="text-white">John Conner</Typography>
    <Typography variant='subtitle2'>USER</Typography>
  </div>
  <div className='ml-7 text-sm'>HOME</div>
  <ListItem className="cursor-pointer mt-2 hover:bg-[#303f57] transition duration-300"  onClick={() => router.push("/dashboard")}>
    <div className={pathname.startsWith("/dashboard") ? "text-gray-400 ml-10": "text-white ml-10"} >
      <DashboardIcon className="mr-2" />Dashboard
    </div>
  </ListItem>
  <ListItem className="cursor-pointer  hover:bg-[#303f57] transition duration-300" onClick={() => router.push("/panel")}>
    <div className="ml-10 flex items-center">
      <MultilineChartIcon className="mr-2" />Panel
    </div>
  </ListItem>
  <div className='ml-7 mt-10 text-sm'>VIEW</div>
  <ListItem className="cursor-pointer mt-2 hover:bg-[#303f57] transition duration-300" onClick={() => router.push("/search")}>
    <div className="ml-10 flex items-center">
      <SearchIcon className="mr-2" />Search
    </div>
  </ListItem>
  <ListItem className="cursor-pointer hover:bg-[#303f57] transition duration-300" onClick={() => router.push("/notification")}>
    <div className="ml-10 flex items-center">
      <NotificationsPausedIcon className="mr-2" />Notification
    </div>
  </ListItem>
  <div className='ml-7  mt-10 text-sm'>CONFIGURATION</div>
  <ListItem className="cursor-pointer mt-2 hover:bg-[#303f57] transition duration-300" onClick={() => router.push("/datapartition")}>
    <div className="ml-10 flex items-center">
      <StorageIcon className="mr-2" />Data partition
    </div>
  </ListItem>
  <ListItem className="cursor-pointer hover:bg-[#303f57] transition duration-300" onClick={() => router.push("/nodegraph")}>
    <div className="ml-10 flex items-center">
      <WorkspacesIcon className="mr-2" />Node graph
    </div>
  </ListItem>
  <ListItem className="cursor-pointer hover:bg-[#303f57] transition duration-300" onClick={() => router.push("/import")}>
    <div className="ml-10 flex items-center">
      <ImportExportIcon className="mr-2" />Import
    </div>
  </ListItem>
  <div className=' ml-7  mt-10 text-sm'>MANAGEMENT</div>
  <ListItem className="cursor-pointer mt-2 hover:bg-[#303f57] transition duration-300" onClick={() => router.push("/user")}>
    <div className="ml-10 flex items-center">
      <PersonIcon className="mr-2" />User
    </div>
  </ListItem>
  <ListItem className="cursor-pointer  hover:bg-[#303f57] transition duration-300" onClick={() => router.push("/")}>
    <div className="ml-10 flex items-center">
      <LogoutIcon className="mr-2" />Log out
    </div>
  </ListItem>
</List>

       
       
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
       
        <main>{children}</main>
      </Main>
    
    </Box>
  );
}
