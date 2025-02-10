import React from "react";
import { Grid, Card, CardContent, Typography, Button, Stack } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DownloadIcon from "@mui/icons-material/Download";

const assignments = [
  "Communication for Management",
  "Information Systems for Management",
  "Business Statistics",
  "Organizational Behavior",
  "Accounting for Managers",
  "Managerial Economics",
  "Principles and Practices of Management",
];

const AssignmentsPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom style={{ color: "#6C27F7" }}>
        Assignments
      </Typography>
      <Card
        style={{
          borderRadius: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "8px",
          borderTop: "4px solid #003e96"
        }}
      >
        <Typography
          variant="h6"
          style={{ fontWeight: "bold", marginBottom: "10px" }}
        >
          Assignments
        </Typography>
        <Grid container spacing={2}>
          {assignments.map((assignment, index) => (
            <Grid item xs={12} key={index}>
              <Card
                sx={{
                  padding: "6px",
                  borderRadius: "10px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CardContent>
                  <Grid container alignItems="center" justifyContent="space-between">
                    {/* Assignment Title */}
                    <Typography
                      variant="body1"
                      style={{ fontWeight: "bold", flexGrow: 1 }}
                    >
                      {index + 1}. {assignment}
                    </Typography>

                    {/* Action Buttons */}
                    <Stack direction="row" spacing={2}>
                      <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        startIcon={<VisibilityIcon />}
                      >
                        View
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        startIcon={<CloudUploadIcon />}
                      >
                        Upload Assignment
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        startIcon={<DownloadIcon />}
                      >
                        Download Assignment
                      </Button>
                    </Stack>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Card>
    </div>
  );
};

export default AssignmentsPage;
