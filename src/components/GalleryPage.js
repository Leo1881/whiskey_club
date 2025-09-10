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

// Import event images
import fabiansCover from "../assets/events/fabians-sitting-2025/img_7.jpeg";
import fabians1 from "../assets/events/fabians-sitting-2025/img_1.jpeg";
import fabians2 from "../assets/events/fabians-sitting-2025/img_2.jpeg";
import fabians3 from "../assets/events/fabians-sitting-2025/img_3.jpeg";
import fabians4 from "../assets/events/fabians-sitting-2025/img_4.jpeg";
import fabians5 from "../assets/events/fabians-sitting-2025/img_5.jpeg";
import fabians6 from "../assets/events/fabians-sitting-2025/img_6.jpeg";
import fabians7 from "../assets/events/fabians-sitting-2025/img_7.jpeg";

import kurtsJulyCover from "../assets/events/kurts-sitting-july-2025/img_12.jpeg";
import kurtsJuly1 from "../assets/events/kurts-sitting-july-2025/img_12.jpeg";
import kurtsJuly2 from "../assets/events/kurts-sitting-july-2025/img_11.jpeg";
import kurtsJuly3 from "../assets/events/kurts-sitting-july-2025/img_10.jpeg";
import kurtsJuly4 from "../assets/events/kurts-sitting-july-2025/img_9.jpeg";
import kurtsJuly5 from "../assets/events/kurts-sitting-july-2025/img_8.jpeg";
import kurtsJuly6 from "../assets/events/kurts-sitting-july-2025/img_13.jpeg";
import kurtsJuly7 from "../assets/events/kurts-sitting-july-2025/img_14.jpeg";
import kurtsJuly8 from "../assets/events/kurts-sitting-july-2025/img_15.jpeg";
import kurtsJuly9 from "../assets/events/kurts-sitting-july-2025/img_16.jpeg";

import rogersCover from "../assets/events/rogers-sitting-july-2025/img_17.jpeg";
import rogers1 from "../assets/events/rogers-sitting-july-2025/img_17.jpeg";
import rogers2 from "../assets/events/rogers-sitting-july-2025/img_18.jpeg";
import rogers3 from "../assets/events/rogers-sitting-july-2025/img_19.jpeg";

//import dullstroomCover from "../assets/events/dullstroom-may-2025/cover.jpg";
//import dullstroom1 from "../assets/events/dullstroom-may-2025/image1.jpg";
//import dullstroom2 from "../assets/events/dullstroom-may-2025/image2.jpg";
//import dullstroom3 from "../assets/events/dullstroom-may-2025/image3.jpg";
//import dullstroom4 from "../assets/events/dullstroom-may-2025/image4.jpg";

//import brandonsCover from "../assets/events/brandons-sitting-april-2025/cover.jpg";
//import brandons1 from "../assets/events/brandons-sitting-april-2025/image1.jpg";
//import brandons2 from "../assets/events/brandons-sitting-april-2025/image2.jpg";
//import brandons3 from "../assets/events/brandons-sitting-april-2025/image3.jpg";
//import brandons4 from "../assets/events/brandons-sitting-april-2025/image4.jpg";

//import johnsCover from "../assets/events/johns-sitting-march-2025/cover.jpg";
//import johns1 from "../assets/events/johns-sitting-march-2025/image1.jpg";
//import johns2 from "../assets/events/johns-sitting-march-2025/image2.jpg";
//import johns3 from "../assets/events/johns-sitting-march-2025/image3.jpg";
//import johns4 from "../assets/events/johns-sitting-march-2025/image4.jpg";

//import gabasCover from "../assets/events/gabas-sitting-december-2024/cover.jpg";
//import gabas1 from "../assets/events/gabas-sitting-december-2024/image1.jpg";
//import gabas2 from "../assets/events/gabas-sitting-december-2024/image2.jpg";
//import gabas3 from "../assets/events/gabas-sitting-december-2024/image3.jpg";
//import gabas4 from "../assets/events/gabas-sitting-december-2024/image4.jpg";

//import kurtsOctCover from "../assets/events/kurts-sitting-october-2024/cover.jpg";
//import kurtsOct1 from "../assets/events/kurts-sitting-october-2024/image1.jpg";
//import kurtsOct2 from "../assets/events/kurts-sitting-october-2024/image2.jpg";
//import kurtsOct3 from "../assets/events/kurts-sitting-october-2024/image3.jpg";
//import kurtsOct4 from "../assets/events/kurts-sitting-october-2024/image4.jpg";

//import shaunsCover from "../assets/events/shauns-sitting-june-2024/cover.jpg";
//import shauns1 from "../assets/events/shauns-sitting-june-2024/image1.jpg";
//import shauns2 from "../assets/events/shauns-sitting-june-2024/image2.jpg";
//import shauns3 from "../assets/events/shauns-sitting-june-2024/image3.jpg";
//import shauns4 from "../assets/events/shauns-sitting-june-2024/image4.jpg";

//import waynesCover from "../assets/events/waynes-sitting-may-2024/cover.jpg";
//import waynes1 from "../assets/events/waynes-sitting-may-2024/image1.jpg";
//import waynes2 from "../assets/events/waynes-sitting-may-2024/image2.jpg";
//import waynes3 from "../assets/events/waynes-sitting-may-2024/image3.jpg";
//import waynes4 from "../assets/events/waynes-sitting-may-2024/image4.jpg";

//import leesCover from "../assets/events/lees-sitting-march-2024/cover.jpg";
//import lees1 from "../assets/events/lees-sitting-march-2024/image1.jpg";
//import lees2 from "../assets/events/lees-sitting-march-2024/image2.jpg";
//import lees3 from "../assets/events/lees-sitting-march-2024/image3.jpg";
//import lees4 from "../assets/events/lees-sitting-march-2024/image4.jpg";

// Event data for 1001 Whiskies Club
const eventData = [
  {
    id: 1,
    title: "Fabian's Sitting",
    date: "29th August 2025",
    coverImage: fabiansCover,
    description: "The Whistler Range",
    images: [
      { id: 1, src: fabians1, caption: "The Whistler tasting" },
      { id: 2, src: fabians2, caption: "Group discussion" },
      { id: 3, src: fabians3, caption: "Whistler collection" },
      { id: 4, src: fabians4, caption: "Event highlights" },
      { id: 5, src: fabians5, caption: "Event highlights" },
      { id: 6, src: fabians6, caption: "Event highlights" },
      { id: 7, src: fabians7, caption: "Event highlights" },
    ],
  },
  {
    id: 2,
    title: "Kurt's Sitting",
    date: "26th July 2025",
    coverImage: kurtsJulyCover,
    description: "The Glenmorangie Range",
    images: [
      { id: 1, src: kurtsJuly1, caption: "Glenmorangie presentation" },
      { id: 2, src: kurtsJuly2, caption: "Tasting notes session" },
      { id: 3, src: kurtsJuly3, caption: "Group photo" },
      { id: 4, src: kurtsJuly4, caption: "Glenmorangie collection" },
      { id: 5, src: kurtsJuly5, caption: "Glenmorangie collection" },
      { id: 6, src: kurtsJuly6, caption: "Glenmorangie collection" },
      { id: 7, src: kurtsJuly7, caption: "Glenmorangie collection" },
      { id: 8, src: kurtsJuly8, caption: "Glenmorangie collection" },
      { id: 9, src: kurtsJuly9, caption: "Glenmorangie collection" },
    ],
  },
  {
    id: 3,
    title: "Roger's Sitting",
    date: "5th July 2025",
    coverImage: rogersCover,
    description: "Range of Blended Whiskey's",
    images: [
      { id: 1, src: rogers1, caption: "Blended whiskey tasting" },
      { id: 2, src: rogers2, caption: "Members enjoying" },
      { id: 3, src: rogers3, caption: "Event setup" },
    ],
  },
  // {
  //   id: 4,
  //   title: "Dullstroom",
  //   date: "23rd May 2025",
  //   coverImage: dullstroomCover,
  //   description: "Visit to Wild About Whiskey",
  //   images: [
  //     { id: 1, src: dullstroom1, caption: "Wild About Whiskey visit" },
  //     { id: 2, src: dullstroom2, caption: "Members enjoying" },
  //     { id: 3, src: dullstroom3, caption: "Event setup" },
  //     { id: 4, src: dullstroom4, caption: "Dullstroom experience" },
  //   ],
  // },
  // {
  //   id: 5,
  //   title: "Brandon's Sitting",
  //   date: "26th April 2025",
  //   coverImage: brandonsCover,
  //   description: "The Singles",
  //   images: [
  //     { id: 1, src: brandons1, caption: "Single malt tasting" },
  //     { id: 2, src: brandons2, caption: "Group discussion" },
  //     { id: 3, src: brandons3, caption: "Single malt collection" },
  //     { id: 4, src: brandons4, caption: "Event highlights" },
  //   ],
  // },
  // {
  //   id: 6,
  //   title: "John's Sitting",
  //   date: "8th March 2025",
  //   coverImage: johnsCover,
  //   description: "Mixed Range",
  //   images: [
  //     { id: 1, src: johns1, caption: "Mixed whiskey tasting" },
  //     { id: 2, src: johns2, caption: "Tasting notes session" },
  //     { id: 3, src: johns3, caption: "Group photo" },
  //     { id: 4, src: johns4, caption: "Mixed collection" },
  //   ],
  // },
  // {
  //   id: 7,
  //   title: "Gaba's Sitting",
  //   date: "14th December 2024",
  //   coverImage: gabasCover,
  //   description: "Another Mixed bag",
  //   images: [
  //     { id: 1, src: gabas1, caption: "Mixed bag tasting" },
  //     { id: 2, src: gabas2, caption: "Members enjoying" },
  //     { id: 3, src: gabas3, caption: "Event setup" },
  //     { id: 4, src: gabas4, caption: "Mixed selection" },
  //   ],
  // },
  // {
  //   id: 8,
  //   title: "Kurt's Sitting",
  //   date: "26th October 2024",
  //   coverImage: kurtsOctCover,
  //   description: "Range from Around the World",
  //   images: [
  //     { id: 1, src: kurtsOct1, caption: "World whiskey tasting" },
  //     { id: 2, src: kurtsOct2, caption: "Group discussion" },
  //     { id: 3, src: kurtsOct3, caption: "World collection" },
  //     { id: 4, src: kurtsOct4, caption: "Event highlights" },
  //   ],
  // },
  // {
  //   id: 9,
  //   title: "Shaun's Sitting",
  //   date: "22nd June 2024",
  //   coverImage: shaunsCover,
  //   description: "These Little Asians",
  //   images: [
  //     { id: 1, src: shauns1, caption: "Asian whiskey tasting" },
  //     { id: 2, src: shauns2, caption: "Tasting notes session" },
  //     { id: 3, src: shauns3, caption: "Group photo" },
  //     { id: 4, src: shauns4, caption: "Asian collection" },
  //   ],
  // },
  // {
  //   id: 10,
  //   title: "Wayne's Sitting",
  //   date: "4th May 2024",
  //   coverImage: waynesCover,
  //   description: "Local is Lekke",
  //   images: [
  //     { id: 1, src: waynes1, caption: "Local whiskey tasting" },
  //     { id: 2, src: waynes2, caption: "Members enjoying" },
  //     { id: 3, src: waynes3, caption: "Event setup" },
  //     { id: 4, src: waynes4, caption: "Local selection" },
  //   ],
  // },
  // {
  //   id: 11,
  //   title: "Lee's Sitting",
  //   date: "2nd March 2024",
  //   coverImage: leesCover,
  //   description: "Mixed bag",
  //   images: [
  //     { id: 1, src: lees1, caption: "Mixed bag tasting" },
  //     { id: 2, src: lees2, caption: "Group discussion" },
  //     { id: 3, src: lees3, caption: "Mixed collection" },
  //     { id: 4, src: lees4, caption: "Event highlights" },
  //   ],
  // },
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
