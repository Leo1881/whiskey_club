import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function NavBar({
  logoLight,
  scrollToSection,
  handleWhiskeyClick,
  handleMembersClick,
  handleGalleryClick,
  setShowWhiskeyPage,
  setShowMembersPage,
  setShowGalleryPage,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ py: 3, px: { xs: 2, sm: 4, md: 21 } }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <Box
            component="img"
            src={logoLight}
            alt="Logo"
            sx={{
              height: { xs: "40px", md: "80px" },
              marginRight: "16px",
              cursor: "pointer",
            }}
            onClick={() => {
              if (setShowWhiskeyPage) setShowWhiskeyPage(false);
              if (setShowMembersPage) setShowMembersPage(false);
              if (setShowGalleryPage) setShowGalleryPage(false);
              scrollToSection("hero");
            }}
          />
        </Box>

        {/* Desktop Menu */}
        {!isMobile && (
          <>
            <Button
              color="inherit"
              onClick={() => {
                if (setShowWhiskeyPage) setShowWhiskeyPage(false);
                if (setShowMembersPage) setShowMembersPage(false);
                if (setShowGalleryPage) setShowGalleryPage(false);
                scrollToSection("hero");
              }}
            >
              Home
            </Button>
            <Button
              color="primary"
              onClick={() => {
                if (setShowWhiskeyPage) setShowWhiskeyPage(false);
                if (setShowMembersPage) setShowMembersPage(false);
                if (setShowGalleryPage) setShowGalleryPage(false);
                scrollToSection("about");
              }}
            >
              About Us
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                if (setShowWhiskeyPage) setShowWhiskeyPage(false);
                if (setShowMembersPage) setShowMembersPage(false);
                if (setShowGalleryPage) setShowGalleryPage(false);
                scrollToSection("events");
              }}
            >
              Events
            </Button>
            <Button onClick={handleWhiskeyClick}>Whiskies</Button>
            <Button onClick={handleMembersClick}>Members</Button>
            <Button onClick={handleGalleryClick}>Gallery</Button>
            <Button
              color="inherit"
              onClick={() => {
                if (setShowWhiskeyPage) setShowWhiskeyPage(false);
                if (setShowMembersPage) setShowMembersPage(false);
                if (setShowGalleryPage) setShowGalleryPage(false);
                scrollToSection("contact");
              }}
            >
              Contact
            </Button>
          </>
        )}

        {/* Mobile Menu Icon */}
        {isMobile && (
          <IconButton
            edge="start"
            sx={{ color: "primary.main" }}
            aria-label="menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          <List
            sx={{
              width: 250,
              bgcolor: "primary.main",
              height: "100%",
              color: "white",
            }}
          >
            <ListItem
              button
              onClick={() => {
                if (setShowWhiskeyPage) setShowWhiskeyPage(false);
                if (setShowMembersPage) setShowMembersPage(false);
                if (setShowGalleryPage) setShowGalleryPage(false);
                scrollToSection("hero");
                setMobileMenuOpen(false);
              }}
            >
              <ListItemText
                primary="Home"
                sx={{
                  color: "white",
                  "& .MuiTypography-root": { color: "white" },
                }}
              />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                if (setShowWhiskeyPage) setShowWhiskeyPage(false);
                if (setShowMembersPage) setShowMembersPage(false);
                if (setShowGalleryPage) setShowGalleryPage(false);
                scrollToSection("about");
                setMobileMenuOpen(false);
              }}
            >
              <ListItemText
                primary="About Us"
                sx={{
                  color: "white",
                  "& .MuiTypography-root": { color: "white" },
                }}
              />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                if (setShowWhiskeyPage) setShowWhiskeyPage(false);
                if (setShowMembersPage) setShowMembersPage(false);
                if (setShowGalleryPage) setShowGalleryPage(false);
                scrollToSection("events");
                setMobileMenuOpen(false);
              }}
            >
              <ListItemText
                primary="Events"
                sx={{
                  color: "white",
                  "& .MuiTypography-root": { color: "white" },
                }}
              />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                handleWhiskeyClick();
                setMobileMenuOpen(false);
              }}
            >
              <ListItemText
                primary="Whiskies"
                sx={{
                  color: "white",
                  "& .MuiTypography-root": { color: "white" },
                }}
              />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                handleMembersClick();
                setMobileMenuOpen(false);
              }}
            >
              <ListItemText
                primary="Members"
                sx={{
                  color: "white",
                  "& .MuiTypography-root": { color: "white" },
                }}
              />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                handleGalleryClick();
                setMobileMenuOpen(false);
              }}
            >
              <ListItemText
                primary="Gallery"
                sx={{
                  color: "white",
                  "& .MuiTypography-root": { color: "white" },
                }}
              />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                if (setShowWhiskeyPage) setShowWhiskeyPage(false);
                if (setShowMembersPage) setShowMembersPage(false);
                if (setShowGalleryPage) setShowGalleryPage(false);
                scrollToSection("contact");
                setMobileMenuOpen(false);
              }}
            >
              <ListItemText
                primary="Contact"
                sx={{
                  color: "white",
                  "& .MuiTypography-root": { color: "white" },
                }}
              />
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
