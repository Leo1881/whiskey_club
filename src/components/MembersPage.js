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

// Import member image
import memberImage from "../assets/members/faadiel.jpeg";

// Sample member data - replace with actual member data and images
const memberData = [
  {
    id: 1,
    name: "Brandon VD Haer",
    role: "Founding Member",
    type: "Whiskey Connoisseur",
    image: memberImage,
    rating: 4.8,
    description:
      "A passionate whiskey enthusiast with over 15 years of experience in whiskey tasting and collection. Specializes in rare Scottish single malts and has visited over 30 distilleries worldwide.",
  },
  {
    id: 2,
    name: "Robin Goodall",
    role: "Master Taster",
    type: "Certified Sommelier",
    image: memberImage,
    rating: 4.9,
    description:
      "With a background in wine tasting, Sarah brings a refined palate and unique perspective to whiskey appreciation. Known for her exceptional ability to identify subtle flavor notes and regional characteristics.",
  },
  {
    id: 3,
    name: "John Williams",
    role: "Events Coordinator",
    type: "Mixologist",
    image: memberImage,
    rating: 4.7,
    description:
      "A skilled mixologist with a deep appreciation for whiskey's versatility. Organizes our monthly tasting events and specializes in whiskey cocktail crafting and food pairing.",
  },
  {
    id: 4,
    name: "Roger Niken",
    role: "Education Director",
    type: "Whiskey Historian",
    image: memberImage,
    rating: 4.8,
    description:
      "A whiskey historian who brings stories and cultural context to every tasting. Specializes in the history of distilleries and traditional whiskey-making methods across different regions.",
  },
  {
    id: 5,
    name: "Shaun Beckett",
    role: "Irish Whiskey Specialist",
    type: "Brand Ambassador",
    image: memberImage,
    rating: 4.6,
    description:
      "Former brand ambassador for several Irish distilleries, Michael brings deep knowledge of Irish whiskey traditions and production methods. Expert in single pot still whiskeys.",
  },
  {
    id: 6,
    name: "Bradley Jacobs",
    role: "Tasting Director",
    type: "Flavor Expert",
    image: memberImage,
    rating: 4.9,
    description:
      "A certified flavor expert with a background in culinary arts. Specializes in identifying complex flavor profiles and creating unique whiskey and food pairings.",
  },
  {
    id: 7,
    name: "Leaveil Johnson",
    role: "Japanese Whisky Expert",
    type: "International Judge",
    image: memberImage,
    rating: 4.8,
    description:
      "An international whisky judge with expertise in Japanese whisky production. Regular contributor to whisky magazines and has judged numerous international competitions.",
  },
  {
    id: 8,
    name: "Gaba Majola",
    role: "Scotch Specialist",
    type: "Master Distiller",
    image: memberImage,
    rating: 4.9,
    description:
      "Former master distiller with 25 years of experience in Scottish distilleries. Expert in single malt production and maturation processes.",
  },
  {
    id: 9,
    name: "Fabian Waterson",
    role: "Social Media Director",
    type: "Content Creator",
    image: memberImage,
    rating: 4.6,
    description:
      "A whiskey enthusiast who combines her passion for spirits with digital storytelling. Creates engaging content about whiskey culture and tasting experiences.",
  },
  {
    id: 10,
    name: "Mark Rasseau",
    role: "Bourbon Expert",
    type: "Kentucky Native",
    image: memberImage,
    rating: 4.7,
    description:
      "Born and raised in Kentucky's bourbon country, Thomas brings authentic insights into American whiskey traditions and craft distilling methods.",
  },
  {
    id: 11,
    name: "Kurt",
    role: "Community Manager",
    type: "Event Specialist",
    image: memberImage,
    rating: 4.5,
    description:
      "Coordinates member activities and special events. Known for creating engaging whiskey tasting experiences and fostering community connections.",
  },
  {
    id: 12,
    name: "Wayne Cannel",
    role: "Collection Curator",
    type: "Rare Whiskey Specialist",
    image: memberImage,
    rating: 4.8,
    description:
      "Manages our rare whiskey collection and relationships with distilleries. Expert in identifying and acquiring unique and limited-edition releases.",
  },
];

function MembersPage() {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  const handleClose = () => {
    setSelectedMember(null);
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
          Our Distinguished Members
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
          Meet the passionate individuals who make up our whiskey appreciation
          society. From seasoned connoisseurs to enthusiastic newcomers, each
          member brings their unique perspective and expertise to our community.
          Together, we explore the rich world of whiskey and share our knowledge
          and experiences.
        </Typography>

        {/* Members Grid */}
        <Grid container spacing={4}>
          {memberData.map((member) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={member.id}>
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
                    "& .member-overlay": {
                      opacity: 1,
                    },
                  },
                }}
                onClick={() => handleMemberClick(member)}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#f0f0f0",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: `url(${member.image})`,
                  }}
                />
                {/* Overlay with member name */}
                <Box
                  className="member-overlay"
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
                    {member.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "0.9rem",
                      opacity: 0.9,
                    }}
                  >
                    {member.role} • {member.type}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Member Detail Modal */}
        <Dialog
          open={Boolean(selectedMember)}
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
              "&::-webkit-scrollbar": {
                display: "none",
              },
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            },
          }}
        >
          {selectedMember && (
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
                  overflowY: "auto",
                  maxHeight: "90vh",
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
                      backgroundImage: `url(${selectedMember.image})`,
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
                        mt: { xs: 2, md: 0 },
                      }}
                    >
                      {selectedMember.name}
                    </Typography>

                    <Rating
                      value={selectedMember.rating}
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
                        fontSize: { xs: "1rem", md: "1.2rem" },
                        fontWeight: 600,
                        mb: 3,
                      }}
                    >
                      {selectedMember.role} • {selectedMember.type}
                    </Typography>

                    <Typography
                      sx={{
                        color: "primary.main",
                        fontSize: { xs: "1rem", md: "1.1rem" },
                        lineHeight: 1.8,
                        mb: 2,
                      }}
                    >
                      {selectedMember.description}
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

export default MembersPage;
