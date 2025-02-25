"use client";
import { useState } from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  Card,
  CardContent,
  Typography,
  Chip,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import AddTicketModal from "../../components/support/ELearningTickets"; // Import the modal

const tickets = [
  {
    id: "533333",
    title: "Admission to be cancelled",
    description: "Dear Sir, Please Cancel the Admission as Student Did Not Pay the Fee.",
    timestamp: "2025-02-18 15:44:32",
    status: "Resolved",
    remarks: "Admission successfully cancelled.",
  },
  {
    id: "529366",
    title: "Father's Name to Be Corrected",
    description: "Dear Sir, Please get the Correct name (RAJBANSHI JAMADAR) Updated as per 10th.",
    timestamp: "2025-02-18 21:17:15",
    status: "Resolved",
    remarks: "Correction has been applied.",
  },
  {
    id: "513739",
    title: "Graduation Docs to Be Uploaded",
    description: "Please get the (Graduation) Documents Uploaded.",
    timestamp: "2025-02-18 13:33:22",
    status: "Rejected",
    remarks: "Document verification failed.",
  },
  {
    id: "613739",
    title: "Post Graduation Docs to Be Uploaded",
    description: "Please get the (Graduation) Documents Uploaded.",
    timestamp: "2025-04-18 13:33:22",
    status: "Rejected",
    remarks: "Document verification failed.",
  },
  {
    id: "623739",
    title: "Graduation Docs to Be Uploaded",
    description: "Please get the (Graduation) Documents Uploaded.",
    timestamp: "2025-06-18 13:33:22",
    status: "Resolved",
    remarks: "Document verification Successful.",
  },
  {
    id: "663739",
    title: "12th Docs to Be Uploaded",
    description: "Please get the (Graduation) Documents Uploaded.",
    timestamp: "2025-08-18 13:33:22",
    status: "Rejected",
    remarks: "Document verification failed..",
  },
];

const statusColors = {
  Resolved: "success",
  Rejected: "error",
};

const ELearningTickets = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [openModal, setOpenModal] = useState(false); // State for Add Ticket Modal
  const [selectedTicket, setSelectedTicket] = useState(null); // State for Details Modal

  const filteredTickets = tickets.filter((ticket) => {
    const matchesStatus = statusFilter ? ticket.status === statusFilter : true;
    const matchesSearch =
      search === "" ||
      ticket.title.toLowerCase().includes(search.toLowerCase()) ||
      ticket.description.toLowerCase().includes(search.toLowerCase());
  
    return matchesStatus && matchesSearch;
  });
  

  const handleOpenDetailsModal = (ticket) => {
    setSelectedTicket(ticket);
  };

  const handleCloseDetailsModal = () => {
    setSelectedTicket(null);
  };

  return (
    <Box sx={{ p: 3, width: "100%", mx: "auto", boxShadow: 1, borderRadius: 3, borderTop: "4px solid #003e96" }}>
      {/* Page Title & Add Ticket Button */}
      <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", mb: 3, alignItems: "center", gap: 2 }}>
        <Typography variant="h5" fontWeight="bold" sx={{ color: "#6C27F7", flexGrow: 1 }}>
          E-Learning Tickets
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#8A2BE2", whiteSpace: "nowrap" }}
          onClick={() => setOpenModal(true)} // Open modal on click
        >
          Add E-Learning Ticket
        </Button>
      </Box>

      {/* Filter & Search Section */}
      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, alignItems: "center", mb: 3, flexWrap: "wrap" }}>
        <Select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          displayEmpty
          sx={{ minWidth: 200, width: { xs: "100%", sm: "auto" } }}
        >
          <MenuItem value="">Select Status</MenuItem>
          <MenuItem value="Resolved">Resolved</MenuItem>
          <MenuItem value="Rejected">Rejected</MenuItem>
        </Select>

        <TextField
          sx={{ flexGrow: 1, width: { xs: "100%", sm: "auto" } }}
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Button variant="contained" sx={{ backgroundColor: "#8A2BE2", width: { xs: "100%", sm: "auto" } }}>
          Search
        </Button>
      </Box>

      {/* Ticket List */}
      {filteredTickets.map((ticket) => (
        <Card key={ticket.id} sx={{ mb: 2, borderRadius: 3, boxShadow: 1 }}>
          <CardContent>
            <Typography variant="body1" fontWeight="bold">
              Application ID: {ticket.id} - {ticket.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {ticket.description}
            </Typography>

            <Grid container spacing={2} alignItems="center">
              {/* Timestamp on the left */}
              <Grid item xs={12} sm={6}>
                <Chip label={ticket.timestamp} sx={{ backgroundColor: "#6C27F7", color: "#fff" }} />
              </Grid>

              {/* Status & Buttons on the right */}
              <Grid item xs={12} sm={6} sx={{ display: "flex", justifyContent: { xs: "flex-start", sm: "flex-end" }, flexWrap: "wrap", gap: 1 }}>
                <Chip label={ticket.status} color={statusColors[ticket.status]} sx={{ fontWeight: "bold" }} />
                <Button size="small" variant="outlined" color="success" onClick={() => handleOpenDetailsModal(ticket)}>
                  View Remarks
                </Button>
                <Button size="small" variant="contained" color="secondary">
                  Ticket Image
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}

      {/* Add Ticket Modal */}
      <AddTicketModal open={openModal} onClose={() => setOpenModal(false)} />

      {/* View Remarks Modal */}
      {selectedTicket && (
        <Dialog open={Boolean(selectedTicket)} onClose={handleCloseDetailsModal} fullWidth maxWidth="sm">
          <DialogTitle>Ticket Details</DialogTitle>
          <DialogContent>
            <Typography variant="body1">
              <strong>Application ID:</strong> {selectedTicket.id}
            </Typography>
            <Typography variant="body2">
              <strong>Remarks:</strong> {selectedTicket.remarks}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDetailsModal} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default ELearningTickets;
