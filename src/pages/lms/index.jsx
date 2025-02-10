import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Avatar,
} from "@mui/material";
import BookIcon from "@mui/icons-material/MenuBook";

const materials = [
  {
    title: "Communication for Management",
    semester: "Semester 1",
  },
  {
    title: "Information Systems for Management",
    semester: "Semester 1",
  },
  {
    title: "Business Statistics",
    semester: "Semester 1",
  },
  {
    title: "Organizational Behavior",
    semester: "Semester 1",
  },
  {
    title: "Accounting for Managers",
    semester: "Semester 1",
  },
  {
    title: "Managerial Economics",
    semester: "Semester 1",
  },
  {
    title: "Principles and Practices of Management",
    semester: "Semester 1",
  },
];

const SLMs = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom style={{ color: "#6C27F7" }}>
        Self Learning Materials
      </Typography>
      <Grid container spacing={3}>
        {materials.map((material, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                padding: "10px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                position: "relative",
              }}
            >
              {/* Semester Chip */}
              <Chip
                label={material.semester}
                color="primary"
                size="small"
                sx={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  fontSize: "12px",
                }}
              />

              {/* Content */}
              <CardContent sx={{ textAlign: "center" }}>
                <Avatar
                  sx={{
                    backgroundColor: "#6C27F7",
                    width: 56,
                    height: 56,
                    margin: "0 auto 10px",
                  }}
                >
                  <BookIcon style={{ color: "#fff" }} />
                </Avatar>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold", fontSize: "16px" }}
                >
                  {material.title}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ marginTop: "10px", textTransform: "none" }}
                >
                  View
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div style={{ marginTop: '30px', textAlign: 'center'}}>
      <Typography variant="h6" gutterBottom style={{ color: "#6C27F7" }}>
        Click here to upload or download Assignments
      </Typography>
      <Button href="/lms/assignments" variant="contained">Assignments</Button>
      </div>
    </div>
  );
};

export default SLMs;
