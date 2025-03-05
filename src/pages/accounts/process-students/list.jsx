import React, { useState } from "react";
import Layout from "../../../components/AccountsLayout"
import {
  Box,
  Button,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
} from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PeopleIcon from "@mui/icons-material/People";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const ProcessStudent = () => {
    const [state, setState] = useState("");

    const students = [
      {
        id: 1,
        name: "Rahul Sharma",
        photograph: "https://via.placeholder.com/50",
        admissionType: "Regular",
        applicationId: "APP12345",
        proEnroll: "Yes",
        totalFee: "₹50,000",
        admissionPercent: "20%",
        examinationPercent: "10%",
        registrationFee: "₹2,000",
        prospectusFee: "₹500",
        courseFee: "₹47,500",
        serviceFee: "₹4,500",
      },
      {
        id: 2,
        name: "Priya Verma",
        photograph: "https://via.placeholder.com/50",
        admissionType: "Distance",
        applicationId: "APP67890",
        proEnroll: "No",
        totalFee: "₹40,000",
        admissionPercent: "15%",
        examinationPercent: "8%",
        registrationFee: "₹1,800",
        prospectusFee: "₹400",
        courseFee: "₹37,800",
        serviceFee: "₹4,500",
      },
    ];

  return (
    <Layout>
        <Box sx={{ padding: 3, minHeight: "100vh" }}>
      {/* Header */}
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#6A0DAD", mb: 2 }}>
        Process Student
      </Typography>

      {/* Info Boxes */}
      <Grid container spacing={2}  sx={{ boxShadow: 2, pb: 2, borderRadius: 2,}}>
        {/* Total Balance */}
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
            //   backgroundColor: "white",
              padding: 2,
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: 2,
            }}
          >
            <Box>
              <Typography variant="subtitle1">Total Balance</Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                ₹ 0
              </Typography>
            </Box>
            <AccountBalanceWalletIcon sx={{ fontSize: 40, color: "#6A0DAD" }} />
          </Box>
        </Grid>

        {/* Processing Amount */}
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
            //   backgroundColor: "white",
              padding: 2,
              borderRadius: 2,
              alignItems: "center",
              display: 'flex',
              justifyContent: 'space-between',
              boxShadow: 2,
            }}
          >
            <PeopleIcon sx={{ fontSize: 40, color: "#6A0DAD" }} />
            <Box>
              <Typography variant="subtitle1">Processed</Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                ₹ 0
              </Typography>
            </Box>
            <Button variant="contained" sx={{ mt: 1, backgroundColor: "#6A0DAD", color: "white" }}>
              Process Now
            </Button>
          </Box>
        </Grid>

        {/* Remaining Balance */}
        <Grid item xs={12} sm={4} sx={{ paddingRight: '15px'}}>
          <Box
            sx={{
            //   backgroundColor: "white",
              padding: 2,
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              boxShadow: 2,
            }}
          >
            <Box>
              <Typography variant="subtitle1">Remaining Balance</Typography>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                ₹ 0
              </Typography>
            </Box>
            <CreditCardIcon sx={{ fontSize: 40, color: "red" }} />
          </Box>
        </Grid>
      </Grid>

      {/* Search Filters */}
      <Box sx={{ backgroundColor: "white", padding: 2, mt: 3, borderRadius: 2, boxShadow: 2 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={3}>
            <TextField fullWidth label="Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField fullWidth label="Application No." variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField fullWidth label="Contact" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth>
              <InputLabel>Select State</InputLabel>
              <Select value={state} onChange={(e) => setState(e.target.value)}>
                <MenuItem value="">All States</MenuItem>
                <MenuItem value="Delhi">Delhi</MenuItem>
                <MenuItem value="Maharashtra">Maharashtra</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "right", mt: 2 }}>
          <Button variant="contained" sx={{ backgroundColor: "#6A0DAD", color: "white" }}>
            Search
          </Button>
        </Box>
      </Box>

      {/* Students Table */}
      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table>
          <TableHead sx={{ backgroundColor: "#6A0DAD" }}>
            <TableRow>
              <TableCell sx={{ color: "white" }}>S.No</TableCell>
              <TableCell sx={{ color: "white" }}>Action</TableCell>
              <TableCell sx={{ color: "white" }}>Name</TableCell>
              <TableCell sx={{ color: "white" }}>Photograph</TableCell>
              <TableCell sx={{ color: "white" }}>Admission Type</TableCell>
              <TableCell sx={{ color: "white" }}>Application ID</TableCell>
              <TableCell sx={{ color: "white" }}>Pro Enroll</TableCell>
              <TableCell sx={{ color: "white" }}>Total Fee</TableCell>
              <TableCell sx={{ color: "white" }}>Admission (%)</TableCell>
              <TableCell sx={{ color: "white" }}>Examination (%)</TableCell>
              <TableCell sx={{ color: "white" }}>Registration Fee</TableCell>
              <TableCell sx={{ color: "white" }}>Prospectus Fee</TableCell>
              <TableCell sx={{ color: "white" }}>Course Fee</TableCell>
              <TableCell sx={{ color: "white" }}>Service Fee</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.length > 0 ? (
              students.map((student, index) => (
                <TableRow key={student.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary" size="small">
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>
                    <img src={student.photograph} alt={student.name} width="50" height="50" />
                  </TableCell>
                  <TableCell>{student.admissionType}</TableCell>
                  <TableCell>{student.applicationId}</TableCell>
                  <TableCell>{student.proEnroll}</TableCell>
                  <TableCell>{student.totalFee}</TableCell>
                  <TableCell>{student.admissionPercent}</TableCell>
                  <TableCell>{student.examinationPercent}</TableCell>
                  <TableCell>{student.registrationFee}</TableCell>
                  <TableCell>{student.prospectusFee}</TableCell>
                  <TableCell>{student.courseFee}</TableCell>
                  <TableCell>{student.serviceFee}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={13} sx={{ textAlign: "center", color: "gray" }}>
                  No data to show
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </Layout>
  );
};

export default ProcessStudent;
