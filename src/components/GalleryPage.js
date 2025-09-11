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

import dullstroomCover from "../assets/events/dullstroom-may-2025/img_20.jpeg";
import dullstroom1 from "../assets/events/dullstroom-may-2025/img_20.jpeg";
import dullstroom2 from "../assets/events/dullstroom-may-2025/img_21.jpeg";
import dullstroom3 from "../assets/events/dullstroom-may-2025/img_22.jpeg";
import dullstroom4 from "../assets/events/dullstroom-may-2025/img_23.jpeg";
import dullstroom5 from "../assets/events/dullstroom-may-2025/img_24.jpeg";
import dullstroom6 from "../assets/events/dullstroom-may-2025/img_25.jpeg";
import dullstroom7 from "../assets/events/dullstroom-may-2025/img_26.jpeg";
import dullstroom8 from "../assets/events/dullstroom-may-2025/img_27.jpeg";
import dullstroom9 from "../assets/events/dullstroom-may-2025/img_28.jpeg";
import dullstroom10 from "../assets/events/dullstroom-may-2025/img_29.jpeg";

import brandonsCover from "../assets/events/brandons-sitting-april-2025/img_30.jpeg";
import brandons1 from "../assets/events/brandons-sitting-april-2025/img_30.jpeg";
import brandons2 from "../assets/events/brandons-sitting-april-2025/img_31.jpeg";
import brandons3 from "../assets/events/brandons-sitting-april-2025/img_32.jpeg";

import johnsCover from "../assets/events/johns-sitting-march-2025/img_38.jpeg";
import johns1 from "../assets/events/johns-sitting-march-2025/img_33.jpeg";
import johns2 from "../assets/events/johns-sitting-march-2025/img_34.jpeg";
import johns3 from "../assets/events/johns-sitting-march-2025/img_35.jpeg";
import johns4 from "../assets/events/johns-sitting-march-2025/img_36.jpeg";
import johns5 from "../assets/events/johns-sitting-march-2025/img_37.jpeg";
import johns6 from "../assets/events/johns-sitting-march-2025/img_38.jpeg";

import gabasCover from "../assets/events/gabas-sitting-december-2024/img_44.jpeg";
import gabas1 from "../assets/events/gabas-sitting-december-2024/img_39.jpeg";
import gabas2 from "../assets/events/gabas-sitting-december-2024/img_40.jpeg";
import gabas3 from "../assets/events/gabas-sitting-december-2024/img_41.jpeg";
import gabas4 from "../assets/events/gabas-sitting-december-2024/img_42.jpeg";
import gabas5 from "../assets/events/gabas-sitting-december-2024/img_43.jpeg";
import gabas6 from "../assets/events/gabas-sitting-december-2024/img_44.jpeg";

import kurtsOctCover from "../assets/events/kurts-sitting-october-2024/img_48.jpeg";
import kurtsOct1 from "../assets/events/kurts-sitting-october-2024/img_45.jpeg";
import kurtsOct2 from "../assets/events/kurts-sitting-october-2024/img_46.jpeg";
import kurtsOct3 from "../assets/events/kurts-sitting-october-2024/img_47.jpeg";
import kurtsOct4 from "../assets/events/kurts-sitting-october-2024/img_48.jpeg";
import kurtsOct5 from "../assets/events/kurts-sitting-october-2024/img_49.jpeg";
import kurtsOct6 from "../assets/events/kurts-sitting-october-2024/img_50.jpeg";
import kurtsOct7 from "../assets/events/kurts-sitting-october-2024/img_51.jpeg";
import kurtsOct8 from "../assets/events/kurts-sitting-october-2024/img_52.jpeg";

import bradleysCover from "../assets/events/bradleys-sitting-2024/img_57.jpeg";
import bradleys1 from "../assets/events/bradleys-sitting-2024/img_53.jpeg";
import bradleys2 from "../assets/events/bradleys-sitting-2024/img_54.jpeg";
import bradleys3 from "../assets/events/bradleys-sitting-2024/img_55.jpeg";
import bradleys4 from "../assets/events/bradleys-sitting-2024/img_56.jpeg";
import bradleys5 from "../assets/events/bradleys-sitting-2024/img_57.jpeg";

import shaunsCover from "../assets/events/shauns-sitting-june-2024/img_63.jpeg";
import shauns1 from "../assets/events/shauns-sitting-june-2024/img_58.jpeg";
import shauns2 from "../assets/events/shauns-sitting-june-2024/img_59.jpeg";
import shauns3 from "../assets/events/shauns-sitting-june-2024/img_60.jpeg";
import shauns4 from "../assets/events/shauns-sitting-june-2024/img_61.jpeg";
import shauns5 from "../assets/events/shauns-sitting-june-2024/img_62.jpeg";
import shauns6 from "../assets/events/shauns-sitting-june-2024/img_63.jpeg";

import waynesCover from "../assets/events/waynes-sitting-may-2024/img_73.jpeg";
import waynes1 from "../assets/events/waynes-sitting-may-2024/img_64.jpeg";
import waynes2 from "../assets/events/waynes-sitting-may-2024/img_65.jpeg";
import waynes3 from "../assets/events/waynes-sitting-may-2024/img_66.jpeg";
import waynes4 from "../assets/events/waynes-sitting-may-2024/img_67.jpeg";
import waynes5 from "../assets/events/waynes-sitting-may-2024/img_68.jpeg";
import waynes6 from "../assets/events/waynes-sitting-may-2024/img_69.jpeg";
import waynes7 from "../assets/events/waynes-sitting-may-2024/img_70.jpeg";
import waynes8 from "../assets/events/waynes-sitting-may-2024/img_71.jpeg";
import waynes9 from "../assets/events/waynes-sitting-may-2024/img_72.jpeg";
import waynes10 from "../assets/events/waynes-sitting-may-2024/img_73.jpeg";

import leesCover from "../assets/events/lees-sitting-march-2024/img_82.jpeg";
import lees1 from "../assets/events/lees-sitting-march-2024/img_74.jpeg";
import lees2 from "../assets/events/lees-sitting-march-2024/img_75.jpeg";
import lees3 from "../assets/events/lees-sitting-march-2024/img_76.jpeg";
import lees4 from "../assets/events/lees-sitting-march-2024/img_77.jpeg";
import lees5 from "../assets/events/lees-sitting-march-2024/img_78.jpeg";
import lees6 from "../assets/events/lees-sitting-march-2024/img_79.jpeg";
import lees7 from "../assets/events/lees-sitting-march-2024/img_80.jpeg";
import lees8 from "../assets/events/lees-sitting-march-2024/img_81.jpeg";
import lees9 from "../assets/events/lees-sitting-march-2024/img_82.jpeg";

import mitchsCover from "../assets/events/mitchs-sitting-2024/img_88.jpeg";
import mitchs1 from "../assets/events/mitchs-sitting-2024/img_83.jpeg";
import mitchs2 from "../assets/events/mitchs-sitting-2024/img_84.jpeg";
import mitchs3 from "../assets/events/mitchs-sitting-2024/img_85.jpeg";
import mitchs4 from "../assets/events/mitchs-sitting-2024/img_86.jpeg";
import mitchs5 from "../assets/events/mitchs-sitting-2024/img_87.jpeg";
import mitchs6 from "../assets/events/mitchs-sitting-2024/img_88.jpeg";

import rogersCover2 from "../assets/events/rogers-sitting-2024/img_92.jpeg";
import rogers21 from "../assets/events/rogers-sitting-2024/img_89.jpeg";
import rogers22 from "../assets/events/rogers-sitting-2024/img_90.jpeg";
import rogers23 from "../assets/events/rogers-sitting-2024/img_91.jpeg";
import rogers24 from "../assets/events/rogers-sitting-2024/img_92.jpeg";
import rogers25 from "../assets/events/rogers-sitting-2024/img_93.jpeg";

import marksCover from "../assets/events/marks-sitting-2024/img_100.jpeg";
import marks1 from "../assets/events/marks-sitting-2024/img_100.jpeg";
import marks2 from "../assets/events/marks-sitting-2024/img_94.jpeg";
import marks3 from "../assets/events/marks-sitting-2024/img_95.jpeg";
import marks4 from "../assets/events/marks-sitting-2024/img_96.jpeg";
import marks5 from "../assets/events/marks-sitting-2024/img_97.jpeg";
import marks6 from "../assets/events/marks-sitting-2024/img_98.jpeg";
import marks7 from "../assets/events/marks-sitting-2024/img_99.jpeg";

import brandonsCover2 from "../assets/events/brandons-sitting-2023/img_105.jpeg";
import brandons21 from "../assets/events/brandons-sitting-2023/img_101.jpeg";
import brandons22 from "../assets/events/brandons-sitting-2023/img_102.jpeg";
import brandons23 from "../assets/events/brandons-sitting-2023/img_103.jpeg";
import brandons24 from "../assets/events/brandons-sitting-2023/img_104.jpeg";
import brandons25 from "../assets/events/brandons-sitting-2023/img_105.jpeg";

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
  {
    id: 4,
    title: "Dullstroom",
    date: "23rd May 2025",
    coverImage: dullstroomCover,
    description: "Visit to Wild About Whiskey",
    images: [
      { id: 1, src: dullstroom1, caption: "Wild About Whiskey visit" },
      { id: 2, src: dullstroom2, caption: "Members enjoying" },
      { id: 3, src: dullstroom3, caption: "Event setup" },
      { id: 4, src: dullstroom4, caption: "Dullstroom experience" },
      { id: 5, src: dullstroom5, caption: "Dullstroom experience" },
      { id: 6, src: dullstroom6, caption: "Dullstroom experience" },
      { id: 7, src: dullstroom7, caption: "Dullstroom experience" },
      { id: 8, src: dullstroom8, caption: "Dullstroom experience" },
      { id: 9, src: dullstroom9, caption: "Dullstroom experience" },
      { id: 10, src: dullstroom10, caption: "Dullstroom experience" },
    ],
  },
  {
    id: 5,
    title: "Brandon's Sitting",
    date: "26th April 2025",
    coverImage: brandonsCover,
    description: "The Singles",
    images: [
      { id: 1, src: brandons1, caption: "Single malt tasting" },
      { id: 2, src: brandons2, caption: "Group discussion" },
      { id: 3, src: brandons3, caption: "Single malt collection" },
    ],
  },
  {
    id: 6,
    title: "John's Sitting",
    date: "8th March 2025",
    coverImage: johnsCover,
    description: "Mixed Range",
    images: [
      { id: 1, src: johns1, caption: "Mixed whiskey tasting" },
      { id: 2, src: johns2, caption: "Tasting notes session" },
      { id: 3, src: johns3, caption: "Group photo" },
      { id: 4, src: johns4, caption: "Mixed collection" },
      { id: 5, src: johns5, caption: "Mixed collection" },
      { id: 6, src: johns6, caption: "Mixed collection" },
    ],
  },
  {
    id: 7,
    title: "Gaba's Sitting",
    date: "14th December 2024",
    coverImage: gabasCover,
    description: "Another Mixed bag",
    images: [
      { id: 1, src: gabas1, caption: "Mixed bag tasting" },
      { id: 2, src: gabas2, caption: "Members enjoying" },
      { id: 3, src: gabas3, caption: "Event setup" },
      { id: 4, src: gabas4, caption: "Mixed selection" },
    ],
  },
  {
    id: 8,
    title: "Kurt's Sitting",
    date: "26th October 2024",
    coverImage: kurtsOctCover,
    description: "Range from Around the World",
    images: [
      { id: 1, src: kurtsOct1, caption: "World whiskey tasting" },
      { id: 2, src: kurtsOct2, caption: "Group discussion" },
      { id: 3, src: kurtsOct3, caption: "World collection" },
      { id: 4, src: kurtsOct4, caption: "Event highlights" },
      { id: 5, src: kurtsOct5, caption: "Event highlights" },
      { id: 6, src: kurtsOct6, caption: "Event highlights" },
      { id: 7, src: kurtsOct7, caption: "Event highlights" },
      { id: 8, src: kurtsOct8, caption: "Event highlights" },
    ],
  },
  {
    id: 9,
    title: "Bradley's Sitting",
    date: "15th September 2024",
    coverImage: bradleysCover,
    description: "Premium Single Malts",
    images: [
      { id: 1, src: bradleys1, caption: "Premium single malt tasting" },
      { id: 2, src: bradleys2, caption: "Tasting notes session" },
      { id: 3, src: bradleys3, caption: "Group discussion" },
      { id: 4, src: bradleys4, caption: "Premium collection" },
      { id: 5, src: bradleys5, caption: "Premium collection" },
    ],
  },
  {
    id: 10,
    title: "Shaun's Sitting",
    date: "22nd June 2024",
    coverImage: shaunsCover,
    description: "These Little Asians",
    images: [
      { id: 1, src: shauns1, caption: "Asian whiskey tasting" },
      { id: 2, src: shauns2, caption: "Tasting notes session" },
      { id: 3, src: shauns3, caption: "Group photo" },
      { id: 4, src: shauns4, caption: "Asian collection" },
      { id: 5, src: shauns5, caption: "Asian collection" },
      { id: 6, src: shauns6, caption: "Asian collection" },
    ],
  },
  {
    id: 10,
    title: "Wayne's Sitting",
    date: "4th May 2024",
    coverImage: waynesCover,
    description: "Local is Lekke",
    images: [
      { id: 1, src: waynes1, caption: "Local whiskey tasting" },
      { id: 2, src: waynes2, caption: "Members enjoying" },
      { id: 3, src: waynes3, caption: "Event setup" },
      { id: 4, src: waynes4, caption: "Local selection" },
      { id: 5, src: waynes5, caption: "Local selection" },
      { id: 6, src: waynes6, caption: "Local selection" },
      { id: 7, src: waynes7, caption: "Local selection" },
      { id: 8, src: waynes8, caption: "Local selection" },
      { id: 9, src: waynes9, caption: "Local selection" },
      { id: 10, src: waynes10, caption: "Local selection" },
    ],
  },
  {
    id: 11,
    title: "Lee's Sitting",
    date: "2nd March 2024",
    coverImage: leesCover,
    description: "Mixed bag",
    images: [
      { id: 1, src: lees1, caption: "Mixed bag tasting" },
      { id: 2, src: lees2, caption: "Group discussion" },
      { id: 3, src: lees3, caption: "Mixed collection" },
      { id: 4, src: lees4, caption: "Event highlights" },
      { id: 5, src: lees5, caption: "Event highlights" },
      { id: 6, src: lees6, caption: "Event highlights" },
      { id: 7, src: lees7, caption: "Event highlights" },
      { id: 8, src: lees8, caption: "Event highlights" },
      { id: 9, src: lees9, caption: "Event highlights" },
    ],
  },
  {
    id: 12,
    title: "Mitch's Sitting",
    date: "8th December 2023",
    coverImage: mitchsCover,
    description: "Craft Whiskey Collection",
    images: [
      { id: 1, src: mitchs1, caption: "Craft whiskey tasting" },
      { id: 2, src: mitchs2, caption: "Tasting notes session" },
      { id: 3, src: mitchs3, caption: "Group discussion" },
      { id: 4, src: mitchs4, caption: "Craft collection" },
      { id: 5, src: mitchs5, caption: "Craft collection" },
      { id: 6, src: mitchs6, caption: "Craft collection" },
    ],
  },
  {
    id: 13,
    title: "Roger's Sitting",
    date: "11th November 2023",
    coverImage: rogersCover2,
    description: "Vintage Whiskey Selection",
    images: [
      { id: 1, src: rogers21, caption: "Vintage whiskey tasting" },
      { id: 2, src: rogers22, caption: "Tasting notes session" },
      { id: 3, src: rogers23, caption: "Group discussion" },
      { id: 4, src: rogers24, caption: "Vintage collection" },
      { id: 4, src: rogers25, caption: "Vintage collection" },
    ],
  },
  {
    id: 14,
    title: "Mark's Sitting",
    date: "28th October 2023",
    coverImage: marksCover,
    description: "International Whiskey Range",
    images: [
      { id: 1, src: marks1, caption: "International whiskey tasting" },
      { id: 2, src: marks2, caption: "Tasting notes session" },
      { id: 3, src: marks3, caption: "Group discussion" },
      { id: 4, src: marks4, caption: "International collection" },
      { id: 5, src: marks5, caption: "International collection" },
      { id: 6, src: marks6, caption: "International collection" },
      { id: 7, src: marks7, caption: "International collection" },
    ],
  },
  {
    id: 15,
    title: "Brandon's Sitting",
    date: "15th September 2023",
    coverImage: brandonsCover2,
    description: "Rare Whiskey Collection",
    images: [
      { id: 1, src: brandons21, caption: "Rare whiskey tasting" },
      { id: 2, src: brandons22, caption: "Tasting notes session" },
      { id: 3, src: brandons23, caption: "Group discussion" },
      { id: 4, src: brandons24, caption: "Rare collection" },
      { id: 5, src: brandons25, caption: "Rare collection" },
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
