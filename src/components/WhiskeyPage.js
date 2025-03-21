import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Dialog,
  DialogContent,
  Rating,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// Import all whiskey images
import akashi from "../assets/whiskeys/akashi.jpg";
import ardbeganoa from "../assets/whiskeys/ardbeganoa.jpg";
import auchentoshen from "../assets/whiskeys/auchentoshen.jpg";
import baines from "../assets/whiskeys/baines.jpg";
import belvenie12 from "../assets/whiskeys/belvenie12.jpg";
import glenfiddich15 from "../assets/whiskeys/glenfiddich15.jpg";
import greenspot from "../assets/whiskeys/greenspot.jpg";
import irishman from "../assets/whiskeys/irishman.jpg";
import kilbeggan from "../assets/whiskeys/kilbeggan.jpg";
import lochlomond from "../assets/whiskeys/lochlomond.jpg";
import macallen12 from "../assets/whiskeys/macallen12.jpg";
import mcconnells from "../assets/whiskeys/mcconnells.jpg";
import nikkadays from "../assets/whiskeys/nikkadays.jpg";
import redbreast12 from "../assets/whiskeys/redbreast12.jpg";
import tamnavulin from "../assets/whiskeys/tamnavulin.jpg";
import tenjaku1 from "../assets/whiskeys/tenjaku1.jpg";
import tenjaku2 from "../assets/whiskeys/tenjaku2.jpg";
import threeships from "../assets/whiskeys/threeships.jpg";
import toor from "../assets/whiskeys/toor.jpg";
import tullamoredewxo from "../assets/whiskeys/tullamoredewxo.jpg";
import umiki from "../assets/whiskeys/umiki.jpg";

// Whiskey data with all images
const whiskeyData = [
  {
    id: 1,
    name: "Akashi",
    region: "Japan",
    type: "Blended",
    image: akashi,
    rating: 4.2,
    description:
      "A delightful Japanese blend that combines traditional craftsmanship with modern distilling techniques. Featuring notes of citrus, vanilla, and a subtle oak influence, this whiskey offers a smooth and balanced drinking experience.",
  },
  {
    id: 2,
    name: "Ardbeg An Oa",
    region: "Scotland",
    type: "Single Malt",
    image: ardbeganoa,
    rating: 4.5,
    description:
      "A remarkably rounded and smoky whisky from Islay, with notes of creamy toffee, aniseed, orange and tea leaves. The smoke is perfectly balanced with the sweeter notes, creating a complex and satisfying dram.",
  },
  {
    id: 3,
    name: "Auchentoshan",
    region: "Scotland",
    type: "Single Malt",
    image: auchentoshen,
    rating: 4.3,
    description:
      "Triple distilled and matured in American bourbon oak, this Lowland single malt is smooth and delicate with notes of vanilla, coconut and a touch of citrus zest.",
  },
  {
    id: 4,
    name: "Bain's",
    region: "South Africa",
    type: "Single Grain",
    image: baines,
    rating: 4.0,
    description:
      "A unique South African single grain whisky, warm and sweet with notes of vanilla, toffee and spice. The warm climate aging process creates a smooth and distinctive character.",
  },
  {
    id: 5,
    name: "The Balvenie 12",
    region: "Scotland",
    type: "Single Malt",
    image: belvenie12,
    rating: 4.6,
    description:
      "Aged in two distinct cask types, this Speyside malt delivers rich honey sweetness, delicate spices, and a characteristic smooth, mellow finish.",
  },
  {
    id: 6,
    name: "Glenfiddich 15",
    region: "Scotland",
    type: "Single Malt",
    image: glenfiddich15,
    rating: 4.7,
    description:
      "Matured in three different cask types and married in a unique Solera vat, this expression offers layers of honey, vanilla, and rich fruit cake, with a lingering sweetness.",
  },
  {
    id: 7,
    name: "Green Spot",
    region: "Ireland",
    type: "Single Pot Still",
    image: greenspot,
    rating: 4.4,
    description:
      "A non-age statement single pot still Irish whiskey, featuring fresh aromatic oils, spices, and barley on a foundation of toasted oak. Sweet and complex.",
  },
  {
    id: 8,
    name: "The Irishman",
    region: "Ireland",
    type: "Blended",
    image: irishman,
    rating: 4.1,
    description:
      "A premium blend of single malt and single pot still whiskeys, offering a smooth character with notes of vanilla, cinnamon, and dried fruits.",
  },
  {
    id: 9,
    name: "Kilbeggan",
    region: "Ireland",
    type: "Blended",
    image: kilbeggan,
    rating: 4.0,
    description:
      "A classic Irish blend with a smooth, sweet taste and malty notes. Easy-drinking with hints of nuts, spice, and a gentle warming finish.",
  },
  {
    id: 10,
    name: "Loch Lomond",
    region: "Scotland",
    type: "Single Malt",
    image: lochlomond,
    rating: 4.2,
    description:
      "A Highland single malt with a distinctive character, offering notes of pear, lemon, vanilla, and a subtle smokiness in the finish.",
  },
  {
    id: 11,
    name: "Macallan 12",
    region: "Scotland",
    type: "Single Malt",
    image: macallen12,
    rating: 4.8,
    description:
      "Matured in sherry seasoned oak casks, this Speyside classic delivers rich dried fruits, wood spice, and chocolate orange, with a warm, satisfying finish.",
  },
  {
    id: 12,
    name: "McConnell's",
    region: "Ireland",
    type: "Blended",
    image: mcconnells,
    rating: 4.1,
    description:
      "A revival of a historic Irish whiskey brand, offering vanilla, caramel, and oak notes with a smooth, approachable character.",
  },
  {
    id: 13,
    name: "Nikka Days",
    region: "Japan",
    type: "Blended",
    image: nikkadays,
    rating: 4.3,
    description:
      "A bright and vibrant blend perfect for everyday sipping, with notes of citrus, apple, and a touch of malt sweetness and light smoke.",
  },
  {
    id: 14,
    name: "Redbreast 12",
    region: "Ireland",
    type: "Single Pot Still",
    image: redbreast12,
    rating: 4.7,
    description:
      "A full-flavored pure pot still whiskey, rich in aroma with notes of dried fruit, sherry, and warm spices. Complex and sophisticated.",
  },
  {
    id: 15,
    name: "Tamnavulin",
    region: "Scotland",
    type: "Single Malt",
    image: tamnavulin,
    rating: 4.0,
    description:
      "A Speyside single malt with a gentle spirit, offering notes of apples, honey, and malt, with a touch of spice on the finish.",
  },
  {
    id: 16,
    name: "Tenjaku",
    region: "Japan",
    type: "Blended",
    image: tenjaku1,
    rating: 4.2,
    description:
      "A harmonious Japanese blend with pristine water from Mt. Fuji, featuring gentle notes of vanilla, honey, and subtle oak.",
  },
  {
    id: 17,
    name: "Tenjaku Special",
    region: "Japan",
    type: "Blended",
    image: tenjaku2,
    rating: 4.4,
    description:
      "A premium expression from Tenjaku, offering deeper complexity with rich malt character, dried fruits, and elegant oak influence.",
  },
  {
    id: 18,
    name: "Three Ships",
    region: "South Africa",
    type: "Single Malt",
    image: threeships,
    rating: 4.1,
    description:
      "A pioneering South African single malt, showing tropical fruit notes balanced with vanilla and oak, influenced by the warm maturation climate.",
  },
  {
    id: 19,
    name: "Toor",
    region: "India",
    type: "Single Malt",
    image: toor,
    rating: 4.2,
    description:
      "An Indian single malt that showcases the unique terroir, with rich tropical fruit notes, warm spices, and a distinctive character from the local climate.",
  },
  {
    id: 20,
    name: "Tullamore D.E.W. XO",
    region: "Ireland",
    type: "Blended",
    image: tullamoredewxo,
    rating: 4.3,
    description:
      "Finished in Caribbean rum casks, this Irish blend offers unique tropical fruit notes alongside traditional Irish whiskey character.",
  },
  {
    id: 21,
    name: "Umiki",
    region: "Japan",
    type: "Blended",
    image: umiki,
    rating: 4.1,
    description:
      "A unique Japanese blend finished with pure ocean water, offering a distinctive maritime character alongside gentle malt and fruit notes.",
  },
];

function WhiskeyPage() {
  const [selectedWhiskey, setSelectedWhiskey] = useState(null);

  const handleWhiskeyClick = (whiskey) => {
    setSelectedWhiskey(whiskey);
  };

  const handleClose = () => {
    setSelectedWhiskey(null);
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
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          Our Whiskey Tasting Journey
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "white",
            fontSize: { xs: "1rem", md: "1.1rem" },
            lineHeight: 1.8,
            mb: { xs: 4, md: 6 },
            maxWidth: "800px",
            textAlign: "center",
            px: { xs: 2, sm: 4, md: 0 },
          }}
        >
          Explore our carefully curated selection of fine whiskies from around
          the world. From rare single malts to exceptional blends, each bottle
          tells a unique story of craftsmanship and tradition. Join us in
          discovering the rich heritage and diverse flavors that make whiskey an
          extraordinary spirit.
        </Typography>

        {/* Whiskey Grid */}
        <Grid container spacing={4}>
          {whiskeyData.map((whiskey) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={whiskey.id}>
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
                    "& .whiskey-overlay": {
                      opacity: 1,
                    },
                  },
                }}
                onClick={() => handleWhiskeyClick(whiskey)}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#f0f0f0", // Placeholder color
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: `url(${whiskey.image})`,
                  }}
                />
                {/* Overlay with whiskey name */}
                <Box
                  className="whiskey-overlay"
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "1.5rem",
                    background:
                      "linear-gradient(transparent, rgba(31, 51, 71, 0.9))",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      textShadow: "1px 1px 2px rgba(31, 51, 71, 0.5)",
                    }}
                  >
                    {whiskey.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "0.9rem",
                      opacity: 0.9,
                    }}
                  >
                    {whiskey.region} • {whiskey.type}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Whiskey Detail Modal */}
        <Dialog
          open={Boolean(selectedWhiskey)}
          onClose={handleClose}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: { xs: "16px", md: "24px" },
              overflow: "hidden",
              bgcolor: "background.paper",
              margin: { xs: 2, sm: 4, md: "auto" },
              position: "relative",
            },
          }}
        >
          {selectedWhiskey && (
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
                  p: 0,
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                  msOverflowStyle: "none",
                  scrollbarWidth: "none",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    minHeight: { xs: "auto", md: "600px" },
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  {/* Left side - Image */}
                  <Box
                    sx={{
                      width: { xs: "100%", md: "50%" },
                      height: { xs: "300px", md: "auto" },
                      backgroundImage: `url(${selectedWhiskey.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  {/* Right side - Content */}
                  <Box
                    sx={{
                      width: { xs: "100%", md: "50%" },
                      p: { xs: 3, md: 4 },
                      pr: { xs: 3, md: 6 },
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        color: "primary.main",
                        fontFamily: '"Playfair Display", serif',
                        fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
                        fontWeight: 700,
                        mb: 2,
                      }}
                    >
                      {selectedWhiskey.name}
                    </Typography>

                    <Rating
                      value={selectedWhiskey.rating}
                      precision={0.1}
                      readOnly
                      sx={{
                        mb: 2,
                        "& .MuiRating-iconFilled": {
                          color: "secondary.main",
                        },
                      }}
                    />

                    <Typography
                      sx={{
                        color: "secondary.main",
                        fontSize: "1.2rem",
                        fontWeight: 600,
                        mb: 3,
                      }}
                    >
                      {selectedWhiskey.region} • {selectedWhiskey.type}
                    </Typography>

                    <Typography
                      sx={{
                        color: "primary.main",
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        mb: 2,
                      }}
                    >
                      {selectedWhiskey.description}
                    </Typography>
                  </Box>
                </Box>
              </DialogContent>
            </>
          )}
        </Dialog>
      </Box>
    </Box>
  );
}

export default WhiskeyPage;
