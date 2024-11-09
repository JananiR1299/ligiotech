import React from "react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import ligioLogo from "../ligiotech logo primary (01).png"; // Replace with the actual path

// Define keyframes for left-to-right and right-to-left scrolling animations
const marqueeLeftToRight = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
`;

const marqueeRightToLeft = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`;

const Marquee = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "200px",
      }}
    >
      {/* Logo Marquee Line (scrolls left to right) */}
      <Box
        sx={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: `${marqueeLeftToRight} 40s linear infinite`,
          alignItems: "center",
          mb: 2, // margin bottom for spacing between lines
        }}
      >
        {[...Array(2)].map((_, i) => (
          <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 5 }}>
            <img src={ligioLogo} alt="Ligio Logo" style={{ width: "25%", height: "auto" }} />
            <img src={ligioLogo} alt="Ligio Logo" style={{ width: "25%", height: "auto" }} />
            <img src={ligioLogo} alt="Ligio Logo" style={{ width: "25%", height: "auto" }} />
            
          </Box>
        ))}
      </Box>

      {/* Text Marquee Line (scrolls right to left) */}
      <Box
        sx={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: `${marqueeRightToLeft} 40s linear infinite`,
        }}
      >
        {[...Array(2)].map((_, i) => (
          <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 5 }}>
            <Typography
              variant="h4"
              sx={{
                fontSize: "36px",
                color: "#333",
                fontWeight: "bold",
                mx: 2,
              }}
            >
              We are ready to build
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: "36px",
                color: "#333",
                fontWeight: "bold",
                mx: 2,
              }}
            >
              We are ready to build
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Marquee;
