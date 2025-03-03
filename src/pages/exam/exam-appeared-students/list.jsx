import Layout from "../../../components/ExamLayout"
import React from "react";
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Avatar,
  Grid,
  IconButton
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";

const students = [
  { id: 1, name: "SUMAN KUMARI", img: "/avatar1.jpg", appId: "539914", proEnroll: "CR240201014382", contact: "8210173607", semester: 2, course: "BACHELOR OF LIBRARY AND INFORMATION SCIENCES", branch: "-", status: "Fresh Admission" },
  { id: 2, name: "Ravikant Kumar", img: "/avatar2.jpg", appId: "539650", proEnroll: "CR240201011452", contact: "7488465043", semester: 2, course: "BACHELOR OF LIBRARY AND INFORMATION SCIENCES", branch: "-", status: "Fresh Admission" },
  { id: 3, name: "SAWAN KUMAR", img: "/avatar3.jpg", appId: "535961", proEnroll: "CR2412400975452", contact: "8382825889", semester: 2, course: "MBA", branch: "Financial Management", status: "Fresh Admission" },
  { id: 4, name: "NARAYAN KUMAR", img: "/avatar4.jpg", appId: "529427", proEnroll: "CR240200908272", contact: "9955885477", semester: 2, course: "BACHELOR OF BUSINESS ADMINISTRATION", branch: "-", status: "Fresh Admission" },
];

const ExamTimeTable = () => {
  return (
    <Layout>
       <Box sx={{ p: 3 }}>
      {/* Page Title */}
      <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
        Exam Appeared Students
      </Typography>

      {/* Search & Filters */}
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={4}>
          <TextField fullWidth label="Name" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField fullWidth label="Application No." variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField fullWidth label="Contact" variant="outlined" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Select fullWidth defaultValue="All Students">
            <MenuItem value="All Students">All Students</MenuItem>
            <MenuItem value="Passed">Passed</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Select fullWidth defaultValue="Pending">
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button fullWidth variant="contained" color="secondary" startIcon={<SearchIcon />}>
            Search
          </Button>
        </Grid>
      </Grid>

      {/* Table with Scroll */}
      <TableContainer 
  component={Paper} 
  sx={{ 
    maxHeight: 500,  // Restrict the table height
    overflow: "auto" // Enables scrolling only inside the table
  }}
>
  <Table stickyHeader>
    <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
      <TableRow>
        <TableCell><b>S.No</b></TableCell>
        <TableCell><b>Action</b></TableCell>
        <TableCell><b>Name</b></TableCell>
        <TableCell><b>Photograph</b></TableCell>
        <TableCell><b>Application ID</b></TableCell>
        <TableCell><b>Pro Enroll</b></TableCell>
        <TableCell><b>Contact No.</b></TableCell>
        <TableCell><b>Current Semester</b></TableCell>
        <TableCell><b>Course</b></TableCell>
        <TableCell><b>Branch</b></TableCell>
        <TableCell><b>Admission Type</b></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {students.map((student, index) => (
        <TableRow key={student.id}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>
            <IconButton color="primary">
              <VisibilityIcon />
            </IconButton>
          </TableCell>
          <TableCell>{student.name}</TableCell>
          <TableCell><Avatar src={student.img} /></TableCell>
          <TableCell>{student.appId}</TableCell>
          <TableCell>{student.proEnroll}</TableCell>
          <TableCell>{student.contact}</TableCell>
          <TableCell>{student.semester}</TableCell>
          <TableCell>{student.course}</TableCell>
          <TableCell>{student.branch}</TableCell>
          <TableCell>
            <Chip label={student.status} color="primary" />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>


    </Box>
    </Layout>
  );
};

export default ExamTimeTable;
