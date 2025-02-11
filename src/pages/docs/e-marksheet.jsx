import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";

const EMarksheet = () => {
  return (
    <Box sx={{ padding: "20px" }}>
      {/* Title */}
      <Typography variant="h5" sx={{ fontWeight: "bold", color: "#6C27F7", marginBottom: 2 }}>
        E-Marksheet
      </Typography>

      {/* Card Container */}
      <Paper className="border-dark"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: 3,
        }}
      >
        {/* Left Side - Text */}
        <Typography variant="h6">E-Marksheet</Typography>

        {/* Right Side - Button */}
        <Button variant="contained" sx={{ backgroundColor: "#6C27F7", color: "#fff" }}>
          E Mark Sheet
        </Button>
      </Paper>
    </Box>
  );
};

export default EMarksheet;
