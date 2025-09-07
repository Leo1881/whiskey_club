import React, { useState, useMemo } from "react";
import {
  Box,
  Typography,
  Grid,
  Dialog,
  DialogContent,
  Rating,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
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
import whistlergood from "../assets/whiskeys/whistlergood.jpg";
import whistlerdoubleoak from "../assets/whiskeys/whistlerdoubleoak.jpg";
import whistlercalvados from "../assets/whiskeys/whistlercalvados.jpg";
import cadbol from "../assets/whiskeys/cadbol.jpg";
import roeandco from "../assets/whiskeys/roeandco.jpg";
import naked from "../assets/whiskeys/naked.jpg";
import jacksingle from "../assets/whiskeys/jacksingle.jpg";
import scallywag from "../assets/whiskeys/scallywag.jpg";
import mhclassic from "../assets/whiskeys/mhclassic.jpg";
import benriachthesmokeytwleve from "../assets/whiskeys/benriachthesmokeytwleve.jpg";
import dimple from "../assets/whiskeys/dimple.jpg";
import writerstears from "../assets/whiskeys/writerstears.jpg";
import laphroaigselect from "../assets/whiskeys/laphroaigselect.jpg";
import taliskersingle from "../assets/whiskeys/taliskersingle.jpg";
import kavalan from "../assets/whiskeys/kavalan.jpg";
import amrut from "../assets/whiskeys/amrut.jpg";
import smokehead from "../assets/whiskeys/smokehead.jpg";
import ancnoc from "../assets/whiskeys/ancnoc.jpg";
import glenscoriadouble from "../assets/whiskeys/glenscoriadouble.jpg";
import crownroyal from "../assets/whiskeys/crownroyal.jpg";
import compass from "../assets/whiskeys/compass.jpg";
import indri from "../assets/whiskeys/indri.jpg";
import mosaic from "../assets/whiskeys/mosaic.jpg";
import oloroso from "../assets/whiskeys/oloroso.jpg";
import px from "../assets/whiskeys/px.jpg";
import dewars from "../assets/whiskeys/dewars.jpg";
import chivas15 from "../assets/whiskeys/chivas15.jpg";
import lasanta from "../assets/whiskeys/lasanta.jpg";
import triple from "../assets/whiskeys/triple.jpg";
import signet from "../assets/whiskeys/signet.jpg";
import icecream from "../assets/whiskeys/icecream.jpg";

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
  {
    id: 22,
    name: "The Whistler The Good, The Bad & The Smoky",
    region: "Ireland",
    type: "Blended",
    image: whistlergood,
    rating: 4.1,
    description:
      "Campfire smoke with vanilla, toffee, and orchard fruit; finished in peated quarter casks for a smoky, peppery finish.",
  },
  {
    id: 23,
    name: "The Whistler Double Oak",
    region: "Ireland",
    type: "Blended",
    image: whistlerdoubleoak,
    rating: 4.0,
    description:
      "Rich caramel and vanilla from bourbon casks with nutty sherry complexity; smooth and full-bodied.",
  },
  {
    id: 24,
    name: "The Whistler Calvados",
    region: "Ireland",
    type: "Blended",
    image: whistlercalvados,
    rating: 4.2,
    description:
      "Apple and orchard fruit aromas with creamy toffee and vanilla; long fruity finish from Calvados casks.",
  },
  {
    id: 25,
    name: "Glenmorangie 15 Year",
    region: "Scotland",
    type: "Single Malt",
    image: cadbol,
    rating: 4.5,
    description:
      "Silky and creamy with orchard fruits, marzipan, honeycomb, and vanilla; warm oak-spiced finish.",
  },
  {
    id: 26,
    name: "Roe & Co",
    region: "Ireland",
    type: "Blended",
    image: roeandco,
    rating: 4.1,
    description:
      "Elegant, fruity, and creamy with vanilla, caramel, orchard fruit, and soft spice; smooth and versatile.",
  },
  {
    id: 27,
    name: "Naked Malt",
    region: "Scotland",
    type: "Blended",
    image: naked,
    rating: 4.0,
    description:
      "Rich, fruity, and sherried with dried fruit, raisin, berries, and gentle spice from sherry casks.",
  },
  {
    id: 28,
    name: "Jack Daniel's Single Barrel",
    region: "USA",
    type: "Tennessee Whiskey",
    image: jacksingle,
    rating: 4.3,
    description:
      "Richer and bolder than Old No.7: caramel, banana bread, vanilla, and toasted oak with warm spice.",
  },
  {
    id: 29,
    name: "Scallywag",
    region: "Scotland",
    type: "Blended",
    image: scallywag,
    rating: 4.1,
    description:
      "Stewed fruits, dark chocolate, warm spice, and vanilla; a sweeter, sherried Speyside profile.",
  },
  {
    id: 30,
    name: "M&H Classic",
    region: "Israel",
    type: "Single Malt",
    image: mhclassic,
    rating: 4.0,
    description:
      "Light and honeyed with vanilla, caramel, peach, and apricot; gentle oak and peppery finish.",
  },
  {
    id: 31,
    name: "BenRiach The Smoky Twelve",
    region: "Scotland",
    type: "Single Malt",
    image: benriachthesmokeytwleve,
    rating: 4.4,
    description:
      "Smoked vanilla, charred orange, dark chocolate, and smoked oak; rich and balanced smoky Speyside.",
  },
  {
    id: 32,
    name: "Dimple",
    region: "Scotland",
    type: "Blended",
    image: dimple,
    rating: 3.9,
    description:
      "Honeyed malt with orchard fruit, subtle peat, and oak spice; smooth and mellow.",
  },
  {
    id: 33,
    name: "Writer's Tears",
    region: "Ireland",
    type: "Blended",
    image: writerstears,
    rating: 4.2,
    description:
      "Elegant and sweet with malt-forward notes, soft hints of vanilla, oak, orchard fruit and dark chocolate; triple distilled in charred bourbon casks.",
  },
  {
    id: 34,
    name: "Laphroaig Select",
    region: "Scotland",
    type: "Single Malt",
    image: laphroaigselect,
    rating: 4.0,
    description:
      "Punchy medicinal peat with smoky oak and surprising sweetness. Notes of chocolate milk, sherbet lemon, gentle wood smoke and spicy oak.",
  },
  {
    id: 35,
    name: "Talisker Single Malt",
    region: "Scotland",
    type: "Single Malt",
    image: taliskersingle,
    rating: 4.3,
    description:
      "Smoky, maritime and bold—peat smoke with citrus and sea salt aromas, peppery spices and a long peppery finish, capturing the wild Isle of Skye.",
  },
  {
    id: 36,
    name: "Kavalan (Classic)",
    region: "Taiwan",
    type: "Single Malt",
    image: kavalan,
    rating: 4.1,
    description:
      "Smooth, non-peated Taiwanese single malt—dried fruit, oak, malt and subtle chocolate spices on the nose; easy-drinking, clean and elegant.",
  },
  {
    id: 37,
    name: "Amrut (Indian Single Malt)",
    region: "India",
    type: "Single Malt",
    image: amrut,
    rating: 4.2,
    description:
      "India's pioneering single malt—powerful oak, milk chocolate, almonds, apricots and spices on the nose; light, fruity palate with barley and coconut flavors.",
  },
  {
    id: 38,
    name: "Smokehead",
    region: "Scotland",
    type: "Single Malt",
    image: smokehead,
    rating: 4.1,
    description:
      "Intensely peaty and rich—immense smoke with sea salt and spice, ginger, vanilla, burnt earth and stout aromas; peppery, smoky, bold finish.",
  },
  {
    id: 39,
    name: "anCnoc 12 Year",
    region: "Scotland",
    type: "Single Malt",
    image: ancnoc,
    rating: 4.0,
    description:
      "Fresh and lightly sweet with honey, vanilla, citrus cream, heather and gentle baking spices; medium finish with poached pear, apple, white chocolate.",
  },
  {
    id: 40,
    name: "Glen Scotia Double Cask",
    region: "Scotland",
    type: "Single Malt",
    image: glenscoriadouble,
    rating: 4.1,
    description:
      "Matured in bourbon casks then finished 12 months in PX sherry, offering spicy fruit, toffee, fudge, vanilla, maritime sea salt spray, apple and pear complexity.",
  },
  {
    id: 41,
    name: "Crown Royal (Deluxe)",
    region: "Canada",
    type: "Blended",
    image: crownroyal,
    rating: 3.8,
    description:
      "Smooth and creamy—vanilla, oak and fruit aromas with a softly lingering finish; the classic blended Canadian whisky since 1939.",
  },
  {
    id: 42,
    name: "Compass Box (general range)",
    region: "Scotland",
    type: "Blended",
    image: compass,
    rating: 4.2,
    description:
      "Innovative blends crafted by John Glaser since 2000—ranging from the smoky Peat Monster to honeyed Hedonism, blending artistry and bold flavour exploration.",
  },
  {
    id: 43,
    name: "Indri Dru",
    region: "India",
    type: "Single Malt",
    image: indri,
    rating: 4.3,
    description:
      "Award-winning Indian single malt (High ABV ~57%) with rich oak, dried fruit, vanilla, spice and tropical vibrancy. Named Best World Whiskey at Miami Global Spirit Awards 2025.",
  },
  {
    id: 44,
    name: "The Whistler Mosaic (Marsala Cask)",
    region: "Ireland",
    type: "Single Grain",
    image: mosaic,
    rating: 4.1,
    description:
      "A small-batch single grain (95% maize) matured in bourbon then Marsala casks; huge citrus burst—orange, clementine, lime—plus vanilla, chocolate, toffee, hazelnut and oak.",
  },
  {
    id: 45,
    name: "The Whistler Oloroso",
    region: "Ireland",
    type: "Blended",
    image: oloroso,
    rating: 4.2,
    description:
      "Triple-distilled blend aged in bourbon then Oloroso sherry casks—nose of sherbet lemon, nougat, raspberry; palate of bergamot, nougat, coconut, banana; sweet, lingering finish.",
  },
  {
    id: 46,
    name: "The Whistler PX I Love You",
    region: "Ireland",
    type: "Blended",
    image: px,
    rating: 4.1,
    description:
      "Rich blend with Pedro Ximénez cask finish—expected to deliver deep dried fruit, raisin, caramel, dark chocolate, and a sweet, sherry-driven finish.",
  },
  {
    id: 47,
    name: "Dewar's 15 Year",
    region: "Scotland",
    type: "Blended",
    image: dewars,
    rating: 4.0,
    description:
      "Smooth and complex blend—with honey, toffee, dried fruit, floral and spicy oak; well-balanced across sherry and bourbon barrels; often seen as good value and approachable.",
  },
  {
    id: 48,
    name: "Chivas Regal 15 Year (XV)",
    region: "Scotland",
    type: "Blended",
    image: chivas15,
    rating: 4.1,
    description:
      "Aged 15 years, finished in Grande Champagne cognac casks—luxuriously fruity and sweet; aromas of red apple, orange marmalade, honey, sultanas; rich, celebratory profile.",
  },
  {
    id: 49,
    name: "Glenmorangie Lasanta",
    region: "Scotland",
    type: "Single Malt",
    image: lasanta,
    rating: 4.2,
    description:
      "12-year Highland malt matured in bourbon then sherry casks—nose of plum, raisin, baking spice, milk chocolate; palate of raspberry coulis, dried fruits, orange marmalade; silky, long finish.",
  },
  {
    id: 50,
    name: "Glenmorangie Triple Reserve (Quinta Ruban / Nectar d'Or variant)",
    region: "Scotland",
    type: "Single Malt",
    image: triple,
    rating: 4.2,
    description:
      "Rich extra-matured malt finished in three cask types (e.g. bourbon, port, sweet wine)—layers of citrus, vanilla, chocolate, orchard fruit; velvety, dessert-like sweetness.",
  },
  {
    id: 51,
    name: "Glenmorangie Signet",
    region: "Scotland",
    type: "Single Malt",
    image: signet,
    rating: 4.4,
    description:
      "Luxurious creation using roasted chocolate-malts and vintage spirit—intensely smooth, chocolate-rich, spicy, coffee, and dark fruit characteristics; full-bodied and complex.",
  },
  {
    id: 52,
    name: "Glenmorangie A Tale of Ice Cream",
    region: "Scotland",
    type: "Single Malt",
    image: icecream,
    rating: 4.3,
    description:
      "Decadent, creamy malt aged in bourbon and high-vanillin casks; notes of peach melba, lemon sorbet, coconut flakes, marzipan, honey, fudge; thick, dessert-like with toffee-apple finish.",
  },
];

function WhiskeyPage() {
  const [selectedWhiskey, setSelectedWhiskey] = useState(null);
  const [filterType, setFilterType] = useState("all");
  const [filterValue, setFilterValue] = useState("all");

  const handleWhiskeyClick = (whiskey) => {
    setSelectedWhiskey(whiskey);
  };

  const handleClose = () => {
    setSelectedWhiskey(null);
  };

  const handleFilterTypeChange = (event) => {
    setFilterType(event.target.value);
    setFilterValue("all"); // Reset filter value when changing type
  };

  const handleFilterValueChange = (event) => {
    setFilterValue(event.target.value);
  };

  // Get unique regions and types for filter options
  const uniqueRegions = useMemo(() => {
    const regions = [...new Set(whiskeyData.map((whiskey) => whiskey.region))];
    return regions.sort();
  }, []);

  const uniqueTypes = useMemo(() => {
    const types = [...new Set(whiskeyData.map((whiskey) => whiskey.type))];
    return types.sort();
  }, []);

  // Filter whiskeys based on selected filters
  const filteredWhiskeys = useMemo(() => {
    if (filterType === "all" || filterValue === "all") {
      return whiskeyData;
    }

    return whiskeyData.filter((whiskey) => {
      if (filterType === "region") {
        return whiskey.region === filterValue;
      } else if (filterType === "type") {
        return whiskey.type === filterValue;
      }
      return true;
    });
  }, [filterType, filterValue]);

  // Get filter options based on selected filter type
  const filterOptions = useMemo(() => {
    if (filterType === "region") {
      return uniqueRegions;
    } else if (filterType === "type") {
      return uniqueTypes;
    }
    return [];
  }, [filterType, uniqueRegions, uniqueTypes]);

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

        {/* Filter Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            mb: 4,
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "600px",
            width: "100%",
          }}
        >
          <FormControl
            sx={{
              minWidth: { xs: "100%", sm: "200px" },
              "& .MuiOutlinedInput-root": {
                color: "white",
                "& fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.3)",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.5)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "secondary.main",
                },
              },
              "& .MuiInputLabel-root": {
                color: "rgba(255, 255, 255, 0.7)",
                "&.Mui-focused": {
                  color: "secondary.main",
                },
              },
            }}
          >
            <InputLabel>Filter by</InputLabel>
            <Select
              value={filterType}
              onChange={handleFilterTypeChange}
              label="Filter by"
            >
              <MenuItem value="all">All Whiskeys</MenuItem>
              <MenuItem value="region">Region</MenuItem>
              <MenuItem value="type">Type</MenuItem>
            </Select>
          </FormControl>

          {filterType !== "all" && (
            <FormControl
              sx={{
                minWidth: { xs: "100%", sm: "200px" },
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  "& fieldset": {
                    borderColor: "rgba(255, 255, 255, 0.3)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(255, 255, 255, 0.5)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "secondary.main",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "rgba(255, 255, 255, 0.7)",
                  "&.Mui-focused": {
                    color: "secondary.main",
                  },
                },
              }}
            >
              <InputLabel>
                {filterType === "region" ? "Select Region" : "Select Type"}
              </InputLabel>
              <Select
                value={filterValue}
                onChange={handleFilterValueChange}
                label={
                  filterType === "region" ? "Select Region" : "Select Type"
                }
              >
                <MenuItem value="all">
                  All {filterType === "region" ? "Regions" : "Types"}
                </MenuItem>
                {filterOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </Box>

        {/* Results Count */}
        <Typography
          sx={{
            color: "white",
            fontSize: "1rem",
            mb: 3,
            opacity: 0.8,
            textAlign: "center",
          }}
        >
          Showing {filteredWhiskeys.length} of {whiskeyData.length} whiskeys
        </Typography>

        {/* Whiskey Grid */}
        <Grid container spacing={4}>
          {filteredWhiskeys.map((whiskey) => (
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
