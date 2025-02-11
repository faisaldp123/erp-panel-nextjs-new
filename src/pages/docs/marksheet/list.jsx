import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import Form from "./Form";

const MarksheetTable = () => {
  // State for modal
  const [open, setOpen] = useState(false);

  // Function to open modal
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to close modal
  const handleClose = () => {
    setOpen(false);
  };

  // Sample data (empty array to show "No data" message)
  const marksheetData = [];

  return (
    <Box sx={{ padding: "20px" }}>
      {/* Page Title */}
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#6C27F7", marginBottom: 2 }}>
        Marksheet
      </Typography>

      <Paper className="border-dark" sx={{ borderRadius: "15px", padding: "20px", boxShadow: 3 }}>
        {/* Table Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Marksheet
          </Typography>
          <Button variant="contained" sx={{ backgroundColor: "#6C27F7", color: "#fff" }} onClick={handleOpen}>
            Apply
          </Button>
        </Box>

        {/* Table */}
        <TableContainer className="border-dark" component={Paper} sx={{ borderRadius: "15px" }}>
          <Table>
            <TableHead >
              <TableRow>
                {[
                  "S.No",
                  "Action",
                  "Email",
                  "Contact",
                  "Address",
                  "Year",
                  "Amount (₹)",
                  "Supportive Document",
                  "Objection",
                  "Requested On",
                  "Consignment No.",
                  "Delivery Date",
                ].map((header, index) => (
                  <TableCell key={index} sx={{ fontWeight: "bold" }}>
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {marksheetData.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={12} align="center">
                    No data to show
                  </TableCell>
                </TableRow>
              ) : (
                marksheetData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      <Button variant="outlined" size="small">
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.contact}</TableCell>
                    <TableCell>{row.address}</TableCell>
                    <TableCell>{row.year}</TableCell>
                    <TableCell>{row.amount}</TableCell>
                    <TableCell>{row.document}</TableCell>
                    <TableCell>{row.objection}</TableCell>
                    <TableCell>{row.requestedOn}</TableCell>
                    <TableCell>{row.consignmentNo}</TableCell>
                    <TableCell>{row.deliveryDate}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Modal for Apply */}
      <Form open={open} handleClose={handleClose}/>
    </Box>
  );
};

export default MarksheetTable;
