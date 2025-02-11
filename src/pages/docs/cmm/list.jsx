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
} from "@mui/material";
import Form from "./Form"; // Import Form component

const MarksheetTable = () => {
  const [open, setOpen] = useState(false);

  // Function to open modal
  const handleOpen = () => {
    setOpen(true);
  };

  // Function to close modal
  const handleClose = () => {
    setOpen(false);
  };

  const marksheetData = [];

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#6C27F7", marginBottom: 2 }}>
        Consolidated Marks Memo
      </Typography>

      <Paper className="border-dark" sx={{ borderRadius: "15px", padding: "20px", boxShadow: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Consolidated Marks Memo
          </Typography>
          <Button variant="contained" color="secondary" sx={{ backgroundColor: "#6C27F7" }} onClick={handleOpen}>
            Apply
          </Button>
        </Box>

        <TableContainer className="border-dark" component={Paper} sx={{ borderRadius: "10px" }}>
          <Table>
            <TableHead>
              <TableRow>
                {[
                  "S.No",
                  "Action",
                  "Email",
                  "Contact",
                  "Address",
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

      {/* Call Form Component */}
      <Form open={open} handleClose={handleClose} />
    </Box>
  );
};

export default MarksheetTable;
