import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Dialog,
  DialogContent,
  IconButton,
  Skeleton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// Import event image for placeholder
import event1 from "../assets/images/event1.webp";

// Event data for 1001 Whiskies Club
const eventData = [
  {
    id: 1,
    title: "Fabian's Sitting",
    date: "39th August 2025",
    coverImage: event1,
    description: "The Whistler Range",
    images: [
      { id: 1, src: event1, caption: "The Whistler tasting" },
      { id: 2, src: event1, caption: "Group discussion" },
      { id: 3, src: event1, caption: "Whistler collection" },
      { id: 4, src: event1, caption: "Event highlights" },
    ],
  },
  {
    id: 2,
    title: "Kurt's Sitting",
    date: "26th July 2025",
    coverImage: event1,
    description: "The Glenmorangie Range",
    images: [
      { id: 1, src: event1, caption: "Glenmorangie presentation" },
      { id: 2, src: event1, caption: "Tasting notes session" },
      { id: 3, src: event1, caption: "Group photo" },
      { id: 4, src: event1, caption: "Glenmorangie collection" },
    ],
  },
  {
    id: 3,
    title: "Roger's Sitting",
    date: "5th July 2025",
    coverImage: event1,
    description: "Range of Blended Whiskey's",
    images: [
      { id: 1, src: event1, caption: "Blended whiskey tasting" },
      { id: 2, src: event1, caption: "Members enjoying" },
      { id: 3, src: event1, caption: "Event setup" },
      { id: 4, src: event1, caption: "Blended selection" },
    ],
  },
  {
    id: 4,
    title: "Dullstroom",
    date: "23rd May 2025",
    coverImage: event1,
    description: "Visit to Wild About Whiskey",
    images: [
      { id: 1, src: event1, caption: "Wild About Whiskey visit" },
      { id: 2, src: event1, caption: "Members enjoying" },
      { id: 3, src: event1, caption: "Event setup" },
      { id: 4, src: event1, caption: "Dullstroom experience" },
    ],
  },
  {
    id: 5,
    title: "Brandon's Sitting",
    date: "26th April 2025",
    coverImage: event1,
    description: "The Singles",
    images: [
      { id: 1, src: event1, caption: "Single malt tasting" },
      { id: 2, src: event1, caption: "Group discussion" },
      { id: 3, src: event1, caption: "Single malt collection" },
      { id: 4, src: event1, caption: "Event highlights" },
    ],
  },
  {
    id: 6,
    title: "John's Sitting",
    date: "8th March 2025",
    coverImage: event1,
    description: "Mixed Range",
    images: [
      { id: 1, src: event1, caption: "Mixed whiskey tasting" },
      { id: 2, src: event1, caption: "Tasting notes session" },
      { id: 3, src: event1, caption: "Group photo" },
      { id: 4, src: event1, caption: "Mixed collection" },
    ],
  },
  {
    id: 7,
    title: "Gaba's Sitting",
    date: "14th December 2024",
    coverImage: event1,
    description: "Another Mixed bag",
    images: [
      { id: 1, src: event1, caption: "Mixed bag tasting" },
      { id: 2, src: event1, caption: "Members enjoying" },
      { id: 3, src: event1, caption: "Event setup" },
      { id: 4, src: event1, caption: "Mixed selection" },
    ],
  },
  {
    id: 8,
    title: "Kurt's Sitting",
    date: "26th October 2024",
    coverImage: event1,
    description: "Range from Around the World",
    images: [
      { id: 1, src: event1, caption: "World whiskey tasting" },
      { id: 2, src: event1, caption: "Group discussion" },
      { id: 3, src: event1, caption: "World collection" },
      { id: 4, src: event1, caption: "Event highlights" },
    ],
  },
  {
    id: 9,
    title: "Shaun's Sitting",
    date: "22nd June 2024",
    coverImage: event1,
    description: "These Little Asians",
    images: [
      { id: 1, src: event1, caption: "Asian whiskey tasting" },
      { id: 2, src: event1, caption: "Tasting notes session" },
      { id: 3, src: event1, caption: "Group photo" },
      { id: 4, src: event1, caption: "Asian collection" },
    ],
  },
  {
    id: 10,
    title: "Wayne's Sitting",
    date: "4th May 2024",
    coverImage: event1,
    description: "Local is Lekke",
    images: [
      { id: 1, src: event1, caption: "Local whiskey tasting" },
      { id: 2, src: event1, caption: "Members enjoying" },
      { id: 3, src: event1, caption: "Event setup" },
      { id: 4, src: event1, caption: "Local selection" },
    ],
  },
  {
    id: 11,
    title: "Lee's Sitting",
    date: "2nd March 2024",
    coverImage: event1,
    description: "Mixed bag",
    images: [
      { id: 1, src: event1, caption: "Mixed bag tasting" },
      { id: 2, src: event1, caption: "Group discussion" },
      { id: 3, src: event1, caption: "Mixed collection" },
      { id: 4, src: event1, caption: "Event highlights" },
    ],
  },
];

// Image component with loading state
const LazyImage = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
      {isLoading && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          animation="wave"
        />
      )}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: isLoading ? "none" : "block",
        }}
        onLoad={() => setIsLoading(false)}
      />
    </Box>
  );
};

function GalleryPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleClose = () => {
    setSelectedEvent(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Content Section with top padding for navbar */}
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "primary.main",
          pt: { xs: "160px", sm: "160px", md: "180px" },
          px: { xs: "1rem", sm: "2rem", md: "4rem", lg: "8rem" },
          pb: "4rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "white",
            mb: 3,
            fontFamily: '"Playfair Display", serif',
            fontSize: "3rem",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Event Gallery
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "white",
            fontSize: "1.1rem",
            lineHeight: 1.8,
            mb: 6,
            maxWidth: "800px",
            textAlign: "center",
          }}
        >
          Explore our collection of memorable moments from past tasting events.
          Each gallery captures the essence of our shared passion for whiskey
          and the wonderful connections made along the way.
        </Typography>

        {/* Events Grid */}
        <Grid container spacing={4}>
          {eventData.map((event) => (
            <Grid item xs={12} sm={6} md={4} key={event.id}>
              <Box
                sx={{
                  width: "100%",
                  height: "400px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  position: "relative",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.02)",
                    "& .event-overlay": {
                      opacity: 1,
                    },
                  },
                }}
                onClick={() => handleEventClick(event)}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundImage: `url(${event.coverImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                {/* Overlay with event details */}
                <Box
                  className="event-overlay"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "2rem",
                    background:
                      "linear-gradient(transparent, rgba(31, 51, 71, 0.9))",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      mb: 1,
                      fontFamily: '"Playfair Display", serif',
                    }}
                  >
                    {event.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "1rem",
                      mb: 2,
                    }}
                  >
                    {event.date}
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "0.9rem",
                      opacity: 0.9,
                    }}
                  >
                    {event.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Event Gallery Modal */}
        <Dialog
          open={Boolean(selectedEvent)}
          onClose={handleClose}
          maxWidth="lg"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: { xs: "16px", md: "24px" },
              overflow: "hidden",
              bgcolor: "background.paper",
              margin: { xs: 2, sm: 4, md: "auto" },
              position: "relative",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            },
          }}
        >
          {selectedEvent && (
            <>
              <IconButton
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: { xs: 8, md: 16 },
                  top: { xs: 8, md: 16 },
                  color: "white",
                  zIndex: 2,
                  backgroundColor: "rgba(31, 51, 71, 0.5)",
                  "&:hover": {
                    backgroundColor: "rgba(31, 51, 71, 0.7)",
                  },
                }}
              >
                <CloseIcon />
              </IconButton>
              <DialogContent
                sx={{
                  p: { xs: 2, sm: 3, md: 4 },
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                  msOverflowStyle: "none",
                  scrollbarWidth: "none",
                  overflowY: "auto",
                  maxHeight: "90vh",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    "&::-webkit-scrollbar": {
                      display: "none",
                    },
                    msOverflowStyle: "none",
                    scrollbarWidth: "none",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      color: "primary.main",
                      fontFamily: '"Playfair Display", serif',
                      fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
                      fontWeight: 700,
                      mb: 1,
                      mt: { xs: 3, md: 0 },
                    }}
                  >
                    {selectedEvent.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "secondary.main",
                      fontSize: { xs: "1rem", md: "1.2rem" },
                      mb: { xs: 3, md: 4 },
                    }}
                  >
                    {selectedEvent.date}
                  </Typography>

                  {/* Image Grid */}
                  <Grid container spacing={3}>
                    {selectedEvent.images.map((image) => (
                      <Grid item xs={12} sm={6} md={4} key={image.id}>
                        <Box
                          sx={{
                            width: "100%",
                            paddingTop: "100%",
                            position: "relative",
                            borderRadius: "16px",
                            overflow: "hidden",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                          }}
                        >
                          <Box
                            sx={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              backgroundImage: `url(${image.src})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </DialogContent>
            </>
          )}
        </Dialog>
      </Box>
    </Box>
  );
}

export default GalleryPage;
