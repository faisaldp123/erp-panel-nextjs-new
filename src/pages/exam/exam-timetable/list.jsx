import Layout from "../../../components/ExamLayout"
import React from "react";
import { Box, Typography, Card, CardContent, Button, Chip, Grid } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const examData = [
  {
    id: 1,
    title: "Practical 1st Semester : ACD - 2023-24",
    date: "29th January 2024",
    time: "09:00 AM",
    note: "Datesheet for first semester students.",
    status: "Upcoming",
  },
  {
    id: 2,
    title: "Practical IInd Semester : ACD - 2023-24",
    date: "29th January 2024",
    time: "09:00 AM",
    note: "Datesheet for second semester students.",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "Practical IIIrd Semester : ACD - 2023-24",
    date: "29th January 2024",
    time: "09:00 AM",
    note: "Datesheet for third semester students.",
    status: "Upcoming",
  },
];

const ExamTimeTable = () => {
  return (
    <Layout>
      <Box sx={{ p: 3 }}>
      {/* Page Title */}
      <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
        Exam Time Table
      </Typography>

      {/* Exam Cards */}
      <Grid container spacing={2}>
        {examData.map((exam) => (
          <Grid item xs={12} key={exam.id}>
            <Card elevation={3} sx={{ borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {exam.title}
                </Typography>

                <Box sx={{ mt: 1, display: "flex", gap: 1, flexWrap: "wrap" }}>
                  <Chip label={`Start Date: ${exam.date}`} color="secondary" />
                  <Chip label={`Start Time: ${exam.time}`} color="error" />
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Note: {exam.note}
                </Typography>

                {/* Bottom Section */}
                <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Button variant="contained" color="success" startIcon={<CloudDownloadIcon />}>
                    Download Date Sheet
                  </Button>

                  <Chip label={exam.status} color="success" variant="outlined" />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Layout>
  );
};

export default ExamTimeTable;
