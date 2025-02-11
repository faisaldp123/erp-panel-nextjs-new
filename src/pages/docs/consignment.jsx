import React from "react";
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

const MarksheetTable = () => {
  // Sample data (empty array to show "No data" message)
  const marksheetData = [];

  return (
    <Box sx={{ padding: "20px" }}>
      {/* Page Title */}
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#6C27F7", marginBottom: 2 }}>
        Consignment
      </Typography>

      <Paper className="border-dark" sx={{ borderRadius: "15px", padding: "20px", boxShadow: 3 }}>
        {/* Table Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Consignment
          </Typography>
          <Button href='/courses/form' variant="contained" color="secondary" sx={{ backgroundColor: "#6C27F7" }}>
            Apply
          </Button>
        </Box>

        {/* Table */}
        <TableContainer className="border-dark" component={Paper} sx={{ borderRadius: "10px" }}>
          <Table>
            <TableHead>
              <TableRow>
                {[
                  "S.No",
                  "Consignment No.",
                  "Consignment Remarks",
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
                    <TableCell>{row.consignment_no}</TableCell>
                    <TableCell>{row.consignment_remarks}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default MarksheetTable;
