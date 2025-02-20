"use client";
import { useState } from "react";
import { Box, Grid, Typography, Button, Card, CardContent } from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import CancelIcon from "@mui/icons-material/Cancel";

const Support = () => {

  return (
    <Box sx={{ p: 3 }}>
      {/* Page Header */}
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 3, color: "#6C27F7" }}>
        Support - Home
      </Typography>

      
      <Box sx={{boxShadow: 1, borderRadius: 3, padding: 3, borderTop: "4px solid #003e96"}}>
        {/* Support Home Section */}
      <Card sx={{ p: 2, mb: 3, borderRadius: 3, boxShadow: 1 }}>
        <Typography variant="h6" fontWeight="bold">
          Support - Home
        </Typography>
      </Card>

      {/* Admission Ticket Report Section */}
      <Box sx={{ mb: 4 }}>
        

        <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            📄 Admission Ticket Report
          </Typography>
          <Button href="/support/admission-tickets" variant="contained" size="small" sx={{ backgroundColor: "#8A2BE2" }}>
            View All
          </Button>
        </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <InsertDriveFileIcon sx={{ fontSize: 40, color: "#2196F3" }} />
                <Typography variant="body2">Total Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <CheckCircleIcon sx={{ fontSize: 40, color: "#4CAF50" }} />
                <Typography variant="body2">Resolved Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <HourglassEmptyIcon sx={{ fontSize: 40, color: "#FFC107" }} />
                <Typography variant="body2">Pending Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <CancelIcon sx={{ fontSize: 40, color: "#F44336" }} />
                <Typography variant="body2">Withdrawn Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>
          </Grid>
        </Card>
      </Box>

      {/* Re-Registration Ticket Report Section */}
      <Box sx={{ mb: 4 }}>
        

        <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            📄 Re-Registration Ticket Report
          </Typography>
          <Button variant="contained" size="small" sx={{ backgroundColor: "#8A2BE2" }}>
            View All
          </Button>
        </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <InsertDriveFileIcon sx={{ fontSize: 40, color: "#2196F3" }} />
                <Typography variant="body2">Total Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <CheckCircleIcon sx={{ fontSize: 40, color: "#4CAF50" }} />
                <Typography variant="body2">Resolved Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <HourglassEmptyIcon sx={{ fontSize: 40, color: "#FFC107" }} />
                <Typography variant="body2">Pending Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <CancelIcon sx={{ fontSize: 40, color: "#F44336" }} />
                <Typography variant="body2">Withdrawn Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>
          </Grid>
        </Card>
      </Box>

      {/* Examination Tickets Report Section */}
      <Box sx={{ mb: 4 }}>
        

        <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            📄 Examination Tickets Report
          </Typography>
          <Button variant="contained" size="small" sx={{ backgroundColor: "#8A2BE2" }}>
            View All
          </Button>
        </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <InsertDriveFileIcon sx={{ fontSize: 40, color: "#2196F3" }} />
                <Typography variant="body2">Total Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <CheckCircleIcon sx={{ fontSize: 40, color: "#4CAF50" }} />
                <Typography variant="body2">Resolved Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <HourglassEmptyIcon sx={{ fontSize: 40, color: "#FFC107" }} />
                <Typography variant="body2">Pending Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <CancelIcon sx={{ fontSize: 40, color: "#F44336" }} />
                <Typography variant="body2">Withdrawn Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>
          </Grid>
        </Card>
      </Box>

      {/* Marksheet Ticket Report Section */}
      <Box sx={{ mb: 4 }}>
        

        <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            📄 Marksheet Ticket Report
          </Typography>
          <Button variant="contained" size="small" sx={{ backgroundColor: "#8A2BE2" }}>
            View All
          </Button>
        </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <InsertDriveFileIcon sx={{ fontSize: 40, color: "#2196F3" }} />
                <Typography variant="body2">Total Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <CheckCircleIcon sx={{ fontSize: 40, color: "#4CAF50" }} />
                <Typography variant="body2">Resolved Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <HourglassEmptyIcon sx={{ fontSize: 40, color: "#FFC107" }} />
                <Typography variant="body2">Pending Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <CancelIcon sx={{ fontSize: 40, color: "#F44336" }} />
                <Typography variant="body2">Withdrawn Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>
          </Grid>
        </Card>
      </Box>

      {/* Transcript Ticket Report Section */}
      <Box sx={{ mb: 4 }}>
        

        <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            📄 Transcript Ticket Report
          </Typography>
          <Button variant="contained" size="small" sx={{ backgroundColor: "#8A2BE2" }}>
            View All
          </Button>
        </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <InsertDriveFileIcon sx={{ fontSize: 40, color: "#2196F3" }} />
                <Typography variant="body2">Total Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <CheckCircleIcon sx={{ fontSize: 40, color: "#4CAF50" }} />
                <Typography variant="body2">Resolved Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <HourglassEmptyIcon sx={{ fontSize: 40, color: "#FFC107" }} />
                <Typography variant="body2">Pending Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <CancelIcon sx={{ fontSize: 40, color: "#F44336" }} />
                <Typography variant="body2">Withdrawn Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>
          </Grid>
        </Card>
      </Box>

      {/* Revaluation Ticket Report Section */}
      <Box sx={{ mb: 4 }}>
        

        <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            📄 Revaluation Ticket Report
          </Typography>
          <Button variant="contained" size="small" sx={{ backgroundColor: "#8A2BE2" }}>
            View All
          </Button>
        </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <InsertDriveFileIcon sx={{ fontSize: 40, color: "#2196F3" }} />
                <Typography variant="body2">Total Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <CheckCircleIcon sx={{ fontSize: 40, color: "#4CAF50" }} />
                <Typography variant="body2">Resolved Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <HourglassEmptyIcon sx={{ fontSize: 40, color: "#FFC107" }} />
                <Typography variant="body2">Pending Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <CancelIcon sx={{ fontSize: 40, color: "#F44336" }} />
                <Typography variant="body2">Withdrawn Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>
          </Grid>
        </Card>
      </Box>

      {/* Migration Ticket Report Section */}
      <Box sx={{ mb: 4 }}>
        

        <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            📄 Migration Ticket Report
          </Typography>
          <Button variant="contained" size="small" sx={{ backgroundColor: "#8A2BE2" }}>
            View All
          </Button>
        </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <InsertDriveFileIcon sx={{ fontSize: 40, color: "#2196F3" }} />
                <Typography variant="body2">Total Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <CheckCircleIcon sx={{ fontSize: 40, color: "#4CAF50" }} />
                <Typography variant="body2">Resolved Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <HourglassEmptyIcon sx={{ fontSize: 40, color: "#FFC107" }} />
                <Typography variant="body2">Pending Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <CancelIcon sx={{ fontSize: 40, color: "#F44336" }} />
                <Typography variant="body2">Withdrawn Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>
          </Grid>
        </Card>
      </Box>

      {/* Original Degree Ticket Report Section */}
      <Box sx={{ mb: 4 }}>
        

        <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            📄 Original Degree Ticket Report
          </Typography>
          <Button variant="contained" size="small" sx={{ backgroundColor: "#8A2BE2" }}>
            View All
          </Button>
        </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <InsertDriveFileIcon sx={{ fontSize: 40, color: "#2196F3" }} />
                <Typography variant="body2">Total Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <CheckCircleIcon sx={{ fontSize: 40, color: "#4CAF50" }} />
                <Typography variant="body2">Resolved Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <HourglassEmptyIcon sx={{ fontSize: 40, color: "#FFC107" }} />
                <Typography variant="body2">Pending Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <CancelIcon sx={{ fontSize: 40, color: "#F44336" }} />
                <Typography variant="body2">Withdrawn Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>
          </Grid>
        </Card>
      </Box>

      {/* E-Learning Ticket Report Section */}
      <Box sx={{ mb: 4 }}>
        
        <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            📄 E-Learning Ticket Report
          </Typography>
          <Button variant="contained" size="small" sx={{ backgroundColor: "#8A2BE2" }}>
            View All
          </Button>
        </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <InsertDriveFileIcon sx={{ fontSize: 40, color: "#2196F3" }} />
                <Typography variant="body2">Total Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <CheckCircleIcon sx={{ fontSize: 40, color: "#4CAF50" }} />
                <Typography variant="body2">Resolved Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <HourglassEmptyIcon sx={{ fontSize: 40, color: "#FFC107" }} />
                <Typography variant="body2">Pending Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <CancelIcon sx={{ fontSize: 40, color: "#F44336" }} />
                <Typography variant="body2">Withdrawn Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>
          </Grid>
        </Card>
      </Box>

      {/* Other Ticket Report Section */}
      <Box sx={{ mb: 4 }}>
        

        <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            📄 Other Ticket Report
          </Typography>
          <Button variant="contained" size="small" sx={{ backgroundColor: "#8A2BE2" }}>
            View All
          </Button>
        </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <InsertDriveFileIcon sx={{ fontSize: 40, color: "#2196F3" }} />
                <Typography variant="body2">Total Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <CheckCircleIcon sx={{ fontSize: 40, color: "#4CAF50" }} />
                <Typography variant="body2">Resolved Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <HourglassEmptyIcon sx={{ fontSize: 40, color: "#FFC107" }} />
                <Typography variant="body2">Pending Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <CancelIcon sx={{ fontSize: 40, color: "#F44336" }} />
                <Typography variant="body2">Withdrawn Tickets</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>
          </Grid>
        </Card>
      </Box>

      </Box>
          </Box>
  );
};

export default Support;
