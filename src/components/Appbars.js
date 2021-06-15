import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link'
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    flexShrink: 1,
    [theme.breakpoints.up('xs')]: {
      display: 'block',
    },
  },
  navLink: {
  	color: "inherit",
    marginRight: 15,
    marginLeft: 15,
    fontSize: 18
  },
  inputRoot: {
    color: 'inherit',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

export default function Appbars() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link href="" className={classes.navLink}>
			Home
		</Link>
      </MenuItem>
      <MenuItem>
        <Link href="" className={classes.navLink}>
			About
		</Link>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <Link href="" className={classes.navLink}>
			Services
		</Link>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <Link href="" className={classes.navLink}>
			Skills
		</Link>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <Link href="" className={classes.navLink}>
			Work
		</Link>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <Link href="" className={classes.navLink}>
			Contact
		</Link>
      </MenuItem>
    </Menu>
  );

  return (
	<div className={classes.grow}>
		<AppBar position="static">
			<Toolbar>
				<Typography className={classes.title} variant="h6" noWrap>
					Shoukrey Tom
				</Typography>
				<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<Link href="" className={classes.navLink}>
							Home
						</Link>
						<Link href="" className={classes.navLink}>
							About
						</Link>
						<Link href="" className={classes.navLink}>
							Services
						</Link>
						<Link href="" className={classes.navLink}>
							Skills
						</Link>
						<Link href="" className={classes.navLink}>
							Work
						</Link>
						<Link href="" className={classes.navLink}>
							Contact
						</Link>
					</div>
				<div className={classes.sectionMobile}>
					<IconButton
					aria-label="show more"
					aria-controls={mobileMenuId}
					aria-haspopup="true"
					onClick={handleMobileMenuOpen}
					color="inherit"
					>
						<MenuIcon />
					</IconButton>
				</div>
			</Toolbar>
		</AppBar>
		{renderMobileMenu}
		{renderMenu}
	</div>
  );
}
