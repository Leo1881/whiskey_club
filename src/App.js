import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logoLight from "./assets/images/logodark.png";
import logoWhite from "./assets/images/logolight.png";
import heroImage from "./assets/images/hero_image.jpeg";
import aboutUsImage from "./assets/images/about_us.jpg";
import event1 from "./assets/images/event1.jpg";
import contactImage from "./assets/images/contactimage.jpg";
import whatsappIcon from "./assets/images/whatsapp.png";
import phoneIcon from "./assets/images/phone.png";
import emailIcon from "./assets/images/email.png";
import WhiskeyPage from "./components/WhiskeyPage";
import MembersPage from "./components/MembersPage";
import GalleryPage from "./components/GalleryPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1f3347", // text-color-primary
      light: "#2c4a68",
      dark: "#152332",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#b87333", // text-color-secondary
      light: "#d08f4c",
      dark: "#8f592a",
      contrastText: "#ffffff",
    },
    background: {
      default: "#faf7f1", // bg-color
      paper: "#ffffff",
    },
    text: {
      primary: "#1f3347", // text-color-primary
      secondary: "#b87333", // text-color-secondary
    },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontSize: "3.5rem", // 56px
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontSize: "2rem",
      fontWeight: 500,
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontSize: "1.5rem",
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
    },
    body1: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    button: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
    },
  },
  spacing: (factor) => `${0.5 * factor}rem`,
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          fontSize: "1.1rem",
          margin: "0 1rem",
          position: "relative",
          color: "#1f3347",
          transition: "color 0.3s ease-out",
          "&:after": {
            content: '""',
            position: "absolute",
            width: "0",
            height: "3px",
            bottom: "2px",
            left: "50%",
            background: "#1f3347",
            transition: "all 0.3s ease-out",
            transform: "translateX(-50%)",
          },
          "&:hover": {
            backgroundColor: "transparent",
            color: "#b87333",
            "&:after": {
              width: "80%",
              background: "#b87333",
            },
          },
          "&:last-child": {
            marginRight: 0,
          },
          "&:first-of-type": {
            marginLeft: "2rem",
          },
        },
      },
    },
  },
});

function App() {
  const [showWhiskeyPage, setShowWhiskeyPage] = useState(false);
  const [showMembersPage, setShowMembersPage] = useState(false);
  const [showGalleryPage, setShowGalleryPage] = useState(false);

  const scrollToSection = (sectionId) => {
    setShowWhiskeyPage(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhiskeyClick = () => {
    window.scrollTo(0, 0);
    setShowWhiskeyPage(true);
    setShowMembersPage(false);
    setShowGalleryPage(false);
  };

  const handleMembersClick = () => {
    window.scrollTo(0, 0);
    setShowMembersPage(true);
    setShowWhiskeyPage(false);
    setShowGalleryPage(false);
  };

  const handleGalleryClick = () => {
    window.scrollTo(0, 0);
    setShowGalleryPage(true);
    setShowWhiskeyPage(false);
    setShowMembersPage(false);
  };

  if (showWhiskeyPage) {
    return (
      <ThemeProvider theme={theme}>
        <AppBar position="fixed">
          <Toolbar sx={{ py: 3, px: { xs: 2, sm: 4, md: 20 } }}>
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              <Box
                component="img"
                src={logoLight}
                alt="Logo"
                sx={{
                  height: "80px",
                  marginRight: "16px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setShowWhiskeyPage(false);
                  scrollToSection("hero");
                }}
              />
            </Box>
            <Button
              color="inherit"
              onClick={() => {
                setShowWhiskeyPage(false);
                scrollToSection("hero");
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                setShowWhiskeyPage(false);
                scrollToSection("about");
              }}
            >
              About Us
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                setShowWhiskeyPage(false);
                scrollToSection("events");
              }}
            >
              Events
            </Button>
            <Button
              onClick={handleWhiskeyClick}
              sx={{
                color: "primary.main",
                mx: 2,
                "&:hover": { color: "secondary.main" },
              }}
            >
              Whiskies
            </Button>
            <Button
              onClick={handleMembersClick}
              sx={{
                color: "primary.main",
                mx: 2,
                "&:hover": { color: "secondary.main" },
              }}
            >
              Members
            </Button>
            <Button
              onClick={handleGalleryClick}
              sx={{
                color: "primary.main",
                mx: 2,
                "&:hover": { color: "secondary.main" },
              }}
            >
              Gallery
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                setShowWhiskeyPage(false);
                scrollToSection("contact");
              }}
            >
              Contact
            </Button>
          </Toolbar>
        </AppBar>
        <WhiskeyPage />
      </ThemeProvider>
    );
  }

  if (showMembersPage) {
    return (
      <ThemeProvider theme={theme}>
        <AppBar position="fixed">
          <Toolbar sx={{ py: 3, px: { xs: 2, sm: 4, md: 20 } }}>
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              <Box
                component="img"
                src={logoLight}
                alt="Logo"
                sx={{
                  height: "80px",
                  marginRight: "16px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setShowMembersPage(false);
                  scrollToSection("hero");
                }}
              />
            </Box>
            <Button
              color="inherit"
              onClick={() => {
                setShowMembersPage(false);
                scrollToSection("hero");
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                setShowMembersPage(false);
                scrollToSection("about");
              }}
            >
              About Us
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                setShowMembersPage(false);
                scrollToSection("events");
              }}
            >
              Events
            </Button>
            <Button
              onClick={handleWhiskeyClick}
              sx={{
                color: "primary.main",
                mx: 2,
                "&:hover": { color: "secondary.main" },
              }}
            >
              Whiskies
            </Button>
            <Button
              onClick={handleMembersClick}
              sx={{
                color: "primary.main",
                mx: 2,
                "&:hover": { color: "secondary.main" },
              }}
            >
              Members
            </Button>
            <Button
              onClick={handleGalleryClick}
              sx={{
                color: "primary.main",
                mx: 2,
                "&:hover": { color: "secondary.main" },
              }}
            >
              Gallery
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                setShowMembersPage(false);
                scrollToSection("contact");
              }}
            >
              Contact
            </Button>
          </Toolbar>
        </AppBar>
        <MembersPage />
      </ThemeProvider>
    );
  }

  if (showGalleryPage) {
    return (
      <ThemeProvider theme={theme}>
        <AppBar position="fixed">
          <Toolbar sx={{ py: 3, px: { xs: 2, sm: 4, md: 20 } }}>
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              <Box
                component="img"
                src={logoLight}
                alt="Logo"
                sx={{
                  height: "80px",
                  marginRight: "16px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setShowGalleryPage(false);
                  scrollToSection("hero");
                }}
              />
            </Box>
            <Button
              color="inherit"
              onClick={() => {
                setShowGalleryPage(false);
                scrollToSection("hero");
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                setShowGalleryPage(false);
                scrollToSection("about");
              }}
            >
              About Us
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                setShowGalleryPage(false);
                scrollToSection("events");
              }}
            >
              Events
            </Button>
            <Button
              onClick={handleWhiskeyClick}
              sx={{
                color: "primary.main",
                mx: 2,
                "&:hover": { color: "secondary.main" },
              }}
            >
              Whiskies
            </Button>
            <Button
              onClick={handleMembersClick}
              sx={{
                color: "primary.main",
                mx: 2,
                "&:hover": { color: "secondary.main" },
              }}
            >
              Members
            </Button>
            <Button
              onClick={handleGalleryClick}
              sx={{
                color: "primary.main",
                mx: 2,
                "&:hover": { color: "secondary.main" },
              }}
            >
              Gallery
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                setShowGalleryPage(false);
                scrollToSection("contact");
              }}
            >
              Contact
            </Button>
          </Toolbar>
        </AppBar>
        <GalleryPage />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        {/* Navigation Bar */}
        <AppBar position="fixed">
          <Toolbar sx={{ py: 3, px: { xs: 2, sm: 4, md: 20 } }}>
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              <Box
                component="img"
                src={logoLight}
                alt="Logo"
                sx={{
                  height: "80px",
                  marginRight: "16px",
                  cursor: "pointer",
                }}
                onClick={() => scrollToSection("hero")}
              />
            </Box>
            <Button color="inherit" onClick={() => scrollToSection("hero")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => scrollToSection("about")}>
              About Us
            </Button>
            <Button color="inherit" onClick={() => scrollToSection("events")}>
              Events
            </Button>
            <Button
              onClick={handleWhiskeyClick}
              sx={{
                color: "primary.main",
                mx: 2,
                "&:hover": { color: "secondary.main" },
              }}
            >
              Whiskies
            </Button>
            <Button
              onClick={handleMembersClick}
              sx={{
                color: "primary.main",
                mx: 2,
                "&:hover": { color: "secondary.main" },
              }}
            >
              Members
            </Button>
            <Button
              onClick={handleGalleryClick}
              sx={{
                color: "primary.main",
                mx: 2,
                "&:hover": { color: "secondary.main" },
              }}
            >
              Gallery
            </Button>
            <Button color="inherit" onClick={() => scrollToSection("contact")}>
              Contact
            </Button>
          </Toolbar>
        </AppBar>

        {/* Hero Section */}
        <Box
          id="hero"
          sx={{
            width: "100%",
            height: "100vh",
            position: "relative",
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
          }}
        >
          <Box
            sx={{
              position: "relative",
              textAlign: { xs: "center", md: "left" },
              color: "white",
              zIndex: 1,
              pt: { xs: 14, sm: 18, md: 20 },
              maxWidth: "900px",
              mx: { xs: 2, sm: 4, md: 8, lg: 24 },
              ml: { xs: 2, sm: 4, md: 8, lg: 24 },
            }}
          >
            <Typography
              component="h1"
              variant="h1"
              sx={{
                color: "white",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                mb: { xs: 3, md: 4 },
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                fontWeight: 700,
                lineHeight: { xs: 1.2, md: 1.3 },
              }}
            >
              Uncover the world of whiskey flavours with us
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                maxWidth: "1000px",
                fontFamily: '"Montserrat", sans-serif',
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                lineHeight: 1.6,
                fontWeight: 100,
                px: { xs: 2, sm: 0 },
              }}
            >
              Welcome to our social whiskey club, where friends come together to
              savour the complexity of fine spirits and share unforgettable
              moments. Join us as we explore the world of whiskey, one glass at
              a time, in the company of cherished companions. Cheers!
            </Typography>
          </Box>
        </Box>

        {/* About Us Section */}
        <Box
          id="about"
          sx={{
            width: "100%",
            px: { xs: 2, sm: 4, md: 8 },
            minHeight: { xs: "calc(100vh - 96px)", md: "calc(100vh - 120px)" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            backgroundColor: "background.paper",
            py: { xs: 8, md: "6rem" },
          }}
        >
          {/* Left Content */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: { xs: "0 2rem", sm: "0 4rem", md: "0 8rem" },
              order: { xs: 2, md: 1 },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "secondary.main",
                mb: { xs: 3, md: 4 },
                fontFamily: '"Playfair Display", serif',
                fontSize: { xs: "2.5rem", sm: "2.75rem", md: "3rem" },
                fontWeight: 700,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              About the group
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "primary.main",
                mb: 3,
                fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                lineHeight: 1.8,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Welcome to 1001 Whiskies, where our love for whiskey knows no
              bounds. Founded by a group of friends with a shared passion for
              the intricate flavours and rich histories of whiskey, our club is
              more than just a gathering place—it's a community united by the
              spirit of exploration and camaraderie.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "primary.main",
                fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                lineHeight: 1.8,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              From casual tastings to spirited discussions, we come together to
              celebrate the artistry of whiskey-making and to deepen our
              understanding of this beloved beverage. Our mission is simple: to
              create memorable experiences, forge lasting friendships, and
              elevate our appreciation for whiskey one sip at a time. So whether
              you're a seasoned aficionado or just beginning your journey into
              the world of whiskey, we invite you to join us on this adventure.
            </Typography>
          </Box>

          {/* Right Image */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: { xs: "2rem", sm: "3rem", md: "0 8rem" },
              order: { xs: 1, md: 2 },
              mb: { xs: 4, md: 0 },
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: { xs: "300px", sm: "400px", md: "600px" },
                borderRadius: "24px",
                overflow: "hidden",
                backgroundImage: `url(${aboutUsImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Box>
        </Box>

        {/* Upcoming Events Section */}
        <Box
          id="events"
          sx={{
            width: "100%",
            px: { xs: 2, sm: 4, md: 8 },
            minHeight: { xs: "calc(100vh - 96px)", md: "calc(100vh - 120px)" },
            display: "flex",
            flexDirection: "column",
            backgroundColor: "background.default",
            py: { xs: 8, md: "6rem" },
          }}
        >
          <Box
            sx={{
              maxWidth: "1750px",
              width: "100%",
              margin: "0 auto",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "secondary.main",
                mb: { xs: 2, md: 3 },
                fontFamily: '"Playfair Display", serif',
                fontSize: { xs: "2.5rem", sm: "2.75rem", md: "3rem" },
                fontWeight: 700,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Next Event
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "primary.main",
                fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                lineHeight: 1.8,
                mb: { xs: 4, md: 6 },
                maxWidth: "100%",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Explore our upcoming events page to stay informed about the latest
              tastings and social gatherings where you can immerse yourself in
              the world of whiskey alongside fellow enthusiasts.
            </Typography>

            {/* Featured Event */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: "2rem", md: "4rem" },
                alignItems: { xs: "stretch", md: "center" },
                position: "relative",
                paddingBottom: "4rem",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "2px",
                  backgroundColor: "secondary.main",
                },
              }}
            >
              {/* Event Image */}
              <Box
                sx={{
                  flex: { xs: "none", md: 1 },
                  height: { xs: "300px", sm: "350px", md: "400px" },
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${event1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                {/* Date Box */}
                <Box
                  sx={{
                    position: "absolute",
                    top: { xs: "10px", md: "20px" },
                    left: { xs: "10px", md: "20px" },
                    backgroundColor: "background.paper",
                    padding: { xs: "0.75rem", md: "1rem" },
                    borderRadius: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minWidth: { xs: "100px", md: "120px" },
                    border: "2px solid",
                    borderColor: "secondary.main",
                  }}
                >
                  <Typography
                    sx={{
                      color: "secondary.main",
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      fontWeight: 700,
                      mb: 0.5,
                      textTransform: "uppercase",
                    }}
                  >
                    Sat
                  </Typography>
                  <Typography
                    sx={{
                      color: "secondary.main",
                      fontSize: { xs: "1.75rem", md: "2rem" },
                      fontWeight: 800,
                      lineHeight: 1,
                      mb: 0.5,
                    }}
                  >
                    27
                  </Typography>
                  <Typography
                    sx={{
                      color: "secondary.main",
                      fontSize: { xs: "0.8rem", md: "0.9rem" },
                      fontWeight: 600,
                    }}
                  >
                    March 2025
                  </Typography>
                </Box>
              </Box>

              {/* Event Details */}
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: "primary.main",
                    mb: { xs: 1, md: 2 },
                    fontFamily: '"Playfair Display", serif',
                    fontSize: { xs: "2rem", sm: "2.25rem", md: "2.5rem" },
                    fontWeight: 600,
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Whiskey Wonderland Tasting
                </Typography>
                <Typography
                  sx={{
                    color: "secondary.main",
                    mb: { xs: 2, md: 3 },
                    fontSize: { xs: "1.1rem", md: "1.2rem" },
                    fontWeight: 900,
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Host: Fabian
                </Typography>
                <Typography
                  sx={{
                    color: "primary.main",
                    fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                    lineHeight: 1.8,
                    maxWidth: "600px",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Embark on a sensory journey through a selection of rare and
                  unique whiskey's from around the globe, guided by our expert
                  connoisseur.
                </Typography>
              </Box>
            </Box>

            {/* Second Event */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: "1.5rem", md: "4rem" },
                marginTop: "2rem",
                position: "relative",
                paddingBottom: "2rem",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "2px",
                  backgroundColor: "secondary.main",
                },
              }}
            >
              {/* Date Box */}
              <Box
                sx={{
                  backgroundColor: "background.paper",
                  padding: { xs: "1.5rem", md: "1rem" },
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  display: "flex",
                  flexDirection: { xs: "row", md: "column" },
                  alignItems: "center",
                  justifyContent: { xs: "center", md: "flex-start" },
                  gap: { xs: 3, md: 0.5 },
                  border: "2px solid",
                  borderColor: "secondary.main",
                  width: { xs: "100%", md: "auto" },
                  minWidth: { md: "120px" },
                  flexShrink: 0,
                }}
              >
                <Typography
                  sx={{
                    color: "secondary.main",
                    fontSize: { xs: "1.2rem", md: "1.1rem" },
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  Sat
                </Typography>
                <Typography
                  sx={{
                    color: "secondary.main",
                    fontSize: { xs: "2.5rem", md: "2rem" },
                    fontWeight: 800,
                    lineHeight: 1,
                  }}
                >
                  03
                </Typography>
                <Typography
                  sx={{
                    color: "secondary.main",
                    fontSize: { xs: "1.2rem", md: "0.9rem" },
                    fontWeight: 600,
                  }}
                >
                  April 2025
                </Typography>
              </Box>

              {/* Event Details */}
              <Box
                sx={{
                  flex: { md: 1 },
                  width: "100%",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: "primary.main",
                    mb: { xs: 1, md: 1 },
                    fontFamily: '"Playfair Display", serif',
                    fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
                    fontWeight: 600,
                  }}
                >
                  Special Whiskey Tasting
                </Typography>
                <Typography
                  sx={{
                    color: "secondary.main",
                    mb: { xs: 1, md: 1 },
                    fontSize: { xs: "1.1rem", md: "1.2rem" },
                    fontWeight: 900,
                  }}
                >
                  Host: Gaba
                </Typography>
                <Typography
                  sx={{
                    color: "primary.main",
                    fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                    lineHeight: 1.8,
                    maxWidth: { xs: "800px", md: "100%" },
                    margin: { xs: "0 auto", md: 0 },
                  }}
                >
                  Discover exclusive whiskey selections with our resident
                  whiskey sommelier.
                </Typography>
              </Box>
            </Box>

            {/* Third Event */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: "1.5rem", md: "4rem" },
                marginTop: "2rem",
                position: "relative",
                paddingBottom: "2rem",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "2px",
                  backgroundColor: "secondary.main",
                },
              }}
            >
              {/* Date Box */}
              <Box
                sx={{
                  backgroundColor: "background.paper",
                  padding: { xs: "1.5rem", md: "1rem" },
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  display: "flex",
                  flexDirection: { xs: "row", md: "column" },
                  alignItems: "center",
                  justifyContent: { xs: "center", md: "flex-start" },
                  gap: { xs: 3, md: 0.5 },
                  border: "2px solid",
                  borderColor: "secondary.main",
                  width: { xs: "100%", md: "auto" },
                  minWidth: { md: "120px" },
                  flexShrink: 0,
                }}
              >
                <Typography
                  sx={{
                    color: "secondary.main",
                    fontSize: { xs: "1.2rem", md: "1.1rem" },
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  Sat
                </Typography>
                <Typography
                  sx={{
                    color: "secondary.main",
                    fontSize: { xs: "2.5rem", md: "2rem" },
                    fontWeight: 800,
                    lineHeight: 1,
                  }}
                >
                  10
                </Typography>
                <Typography
                  sx={{
                    color: "secondary.main",
                    fontSize: { xs: "1.2rem", md: "0.9rem" },
                    fontWeight: 600,
                  }}
                >
                  May 2025
                </Typography>
              </Box>

              {/* Event Details */}
              <Box
                sx={{
                  flex: { md: 1 },
                  width: "100%",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: "primary.main",
                    mb: { xs: 1, md: 1 },
                    fontFamily: '"Playfair Display", serif',
                    fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
                    fontWeight: 600,
                  }}
                >
                  Whiskey & Food Pairing
                </Typography>
                <Typography
                  sx={{
                    color: "secondary.main",
                    mb: { xs: 1, md: 1 },
                    fontSize: { xs: "1.1rem", md: "1.2rem" },
                    fontWeight: 900,
                  }}
                >
                  Host: Bradley
                </Typography>
                <Typography
                  sx={{
                    color: "primary.main",
                    fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                    lineHeight: 1.8,
                    maxWidth: { xs: "800px", md: "100%" },
                    margin: { xs: "0 auto", md: 0 },
                  }}
                >
                  Explore the art of pairing whickey with gourmet dishes in this
                  culinary adventure.
                </Typography>
              </Box>
            </Box>

            {/* Fourth Event */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: "1.5rem", md: "4rem" },
                marginTop: "2rem",
              }}
            >
              {/* Date Box */}
              <Box
                sx={{
                  backgroundColor: "background.paper",
                  padding: { xs: "1.5rem", md: "1rem" },
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  display: "flex",
                  flexDirection: { xs: "row", md: "column" },
                  alignItems: "center",
                  justifyContent: { xs: "center", md: "flex-start" },
                  gap: { xs: 3, md: 0.5 },
                  border: "2px solid",
                  borderColor: "secondary.main",
                  width: { xs: "100%", md: "auto" },
                  minWidth: { md: "120px" },
                  flexShrink: 0,
                }}
              >
                <Typography
                  sx={{
                    color: "secondary.main",
                    fontSize: { xs: "1.2rem", md: "1.1rem" },
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  Sat
                </Typography>
                <Typography
                  sx={{
                    color: "secondary.main",
                    fontSize: { xs: "2.5rem", md: "2rem" },
                    fontWeight: 800,
                    lineHeight: 1,
                  }}
                >
                  17
                </Typography>
                <Typography
                  sx={{
                    color: "secondary.main",
                    fontSize: { xs: "1.2rem", md: "0.9rem" },
                    fontWeight: 600,
                  }}
                >
                  June 2025
                </Typography>
              </Box>

              {/* Event Details */}
              <Box
                sx={{
                  flex: { md: 1 },
                  width: "100%",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: "primary.main",
                    mb: { xs: 1, md: 1 },
                    fontFamily: '"Playfair Display", serif',
                    fontSize: { xs: "1.75rem", sm: "2rem", md: "2.5rem" },
                    fontWeight: 600,
                  }}
                >
                  Winter Whiskey Fest
                </Typography>
                <Typography
                  sx={{
                    color: "secondary.main",
                    mb: { xs: 1, md: 1 },
                    fontSize: { xs: "1.1rem", md: "1.2rem" },
                    fontWeight: 900,
                  }}
                >
                  Host: Roger
                </Typography>
                <Typography
                  sx={{
                    color: "primary.main",
                    fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                    lineHeight: 1.8,
                    maxWidth: { xs: "800px", md: "100%" },
                    margin: { xs: "0 auto", md: 0 },
                  }}
                >
                  Celebrate winter with a variety of whiskey tastings and live
                  entertainment.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Contact Section */}
        <Box
          id="contact"
          sx={{
            width: "100%",
            minHeight: { xs: "calc(100vh - 96px)", md: "calc(100vh - 120px)" },
            px: { xs: 2, sm: 4, md: 8 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            backgroundColor: "background.paper",
            py: { xs: 8, md: "6rem" },
          }}
        >
          {/* Left Content */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: { xs: "0 2rem", sm: "0 4rem", md: "0 8rem" },
              order: { xs: 2, md: 1 },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "secondary.main",
                mb: { xs: 3, md: 4 },
                fontFamily: '"Playfair Display", serif',
                fontSize: { xs: "2.5rem", sm: "2.75rem", md: "3rem" },
                fontWeight: 700,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Get in touch
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "primary.main",
                mb: 3,
                fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                lineHeight: 1.8,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              We'd love to hear from you! Whether you're interested in joining
              our club, have questions about upcoming events, or just want to
              share your passion for whiskey, we're here to connect.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "primary.main",
                mb: { xs: 3, md: 4 },
                fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                lineHeight: 1.8,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Feel free to reach out through any of our channels below, and
              become part of our growing community of whiskey enthusiasts.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <img
                  src={emailIcon}
                  alt="Email"
                  style={{
                    width: "24px",
                    height: "24px",
                    objectFit: "contain",
                  }}
                />
                <Typography
                  sx={{
                    color: "primary.main",
                    fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                    fontWeight: 600,
                  }}
                >
                  Email: hello@1001whiskies.com
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <img
                  src={phoneIcon}
                  alt="Phone"
                  style={{
                    width: "24px",
                    height: "24px",
                    objectFit: "contain",
                  }}
                />
                <Typography
                  sx={{
                    color: "primary.main",
                    fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                    fontWeight: 600,
                  }}
                >
                  Phone: +1 (555) 123-4567
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <img
                  src={whatsappIcon}
                  alt="WhatsApp"
                  style={{
                    width: "24px",
                    height: "24px",
                    objectFit: "contain",
                  }}
                />
                <Typography
                  sx={{
                    color: "primary.main",
                    fontSize: { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                    fontWeight: 600,
                  }}
                >
                  WhatsApp: +1 (555) 123-4567
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Right Image */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: { xs: "2rem", sm: "3rem", md: "0 8rem" },
              order: { xs: 1, md: 2 },
              mb: { xs: 4, md: 0 },
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: { xs: "300px", sm: "400px", md: "600px" },
                borderRadius: "24px",
                overflow: "hidden",
                backgroundImage: `url(${contactImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Box>
        </Box>

        {/* Footer */}
        <Box
          sx={{
            width: "100%",
            backgroundColor: "primary.main",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "3rem 0",
            mt: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <img
              src={logoWhite}
              alt="1001 Whiskies Logo"
              style={{
                height: "70px",
                width: "auto",
              }}
            />
            <Typography
              sx={{
                color: "white",
                fontSize: "0.9rem",
                opacity: 0.8,
                mt: 2,
              }}
            >
              © 2025 1001 Whiskies. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
