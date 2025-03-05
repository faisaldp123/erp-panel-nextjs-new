import React, { useState } from "react";
import Layout from "../../../components/AccountsLayout"
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Select,
  MenuItem,
  Button,
  Typography,
  Chip,
} from "@mui/material";
import AddReceiptModal from "@/components/accounts/ReceiptTicket";

const ReceiptsPage = () => {
  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [receiptType, setReceiptType] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const receipts = [
    {
      id: 1,
      status: "Accepted",
      transactionId: "504814963181",
      name: "KPS Edu Skills",
      type: "IMPS",
      date: "2025-02-17",
      amount: "₹18,625",
      bank: "ICICI",
      receipt: "View",
      remark: "Please Get the Payment Updated",
      admin_remarks: "-",
    },
    {
      id: 2,
      status: "Accepted",
      transactionId: "503118461178",
      name: "KPS Edu Skills",
      type: "IMPS",
      date: "2025-01-31",
      amount: "₹19,500",
      bank: "ICICI",
      receipt: "View",
      remark: "Please Get the Payment Updated",
      admin_remarks: "-",
    },
    {
      id: 10,
      status: "Rejected",
      transactionId: "501719945495",
      name: "KPS Edu Skills",
      type: "IMPS",
      date: "2025-01-17",
      amount: "₹500",
      bank: "ICICI",
      receipt: "View",
      remark:
        "Application ID: 500368, and Enrollment No: CR2402000604552 Cancellation Fee",
      admin_remarks: "-",
    },
  ];

  return (
    <Layout>
      <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2, color: "#6A0DAD" }}>
        Receipts
      </Typography>

      {/* SEARCH FILTERS */}
      <Box display="flex" gap={2} sx={{ mb: 2 }}>
        <TextField
          label="Transaction Id"
          variant="outlined"
          size="small"
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TextField
          label="Name"
          variant="outlined"
          size="small"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Amount"
          variant="outlined"
          size="small"
          fullWidth
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <TextField
          type="date"
          variant="outlined"
          size="small"
          fullWidth
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Select
          value={receiptType}
          onChange={(e) => setReceiptType(e.target.value)}
          displayEmpty
          size="small"
          fullWidth
        >
          <MenuItem value="">Select Receipt</MenuItem>
          <MenuItem value="IMPS">IMPS</MenuItem>
          <MenuItem value="NEFT">NEFT</MenuItem>
        </Select>
        <Button variant="contained" sx={{ bgcolor: "#6A0DAD", color: "white" }}>
          Search
        </Button>
      </Box>

      

      {/* TABLE */}
      <TableContainer component={Paper} sx={{ maxHeight: 400, overflow: "auto", borderTop:"3px solid #6A0DAD", borderRadius: '10px' }}>
        {/* TABLE HEADER WITH FILTER DROPDOWN & ADD BUTTON */}
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 1, mt: 2, mx: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#6A0DAD" }}>
          Receipts
        </Typography>
        <Box display="flex" gap={2}>
          {/* Status Filter Dropdown */}
          <Select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            displayEmpty
            size="small"
            sx={{ minWidth: 150 }}
          >
            <MenuItem value="">All Status</MenuItem>
            <MenuItem value="Accepted">Accepted</MenuItem>
            <MenuItem value="Rejected">Rejected</MenuItem>
          </Select>

          {/* Add Receipt Button */}
          <Button
        variant="contained"
        sx={{ bgcolor: "#6A0DAD", color: "white" }}
        onClick={() => setModalOpen(true)}
      >
        + Add Receipt
      </Button>
          <AddReceiptModal open={modalOpen} handleClose={() => setModalOpen(false)}>
            + Add Receipt
          </AddReceiptModal>
        </Box>
      </Box>
        <Table stickyHeader>
          <TableHead sx={{ bgcolor: "#f5f5f5" }}>
            <TableRow>
              <TableCell><b>S.No</b></TableCell>
              <TableCell><b>Status</b></TableCell>
              <TableCell><b>Transaction Id</b></TableCell>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Type</b></TableCell>
              <TableCell><b>Date</b></TableCell>
              <TableCell><b>Amount</b></TableCell>
              <TableCell><b>Bank</b></TableCell>
              <TableCell><b>Receipt</b></TableCell>
              <TableCell><b>Remark</b></TableCell>
              <TableCell><b>Admin Remarks</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {receipts
              .filter((receipt) =>
                filterStatus ? receipt.status === filterStatus : true
              )
              .map((receipt, index) => (
                <TableRow key={receipt.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <Chip
                      label={receipt.status}
                      color={receipt.status === "Accepted" ? "success" : "error"}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{receipt.transactionId}</TableCell>
                  <TableCell>{receipt.name}</TableCell>
                  <TableCell>{receipt.type}</TableCell>
                  <TableCell>{receipt.date}</TableCell>
                  <TableCell>{receipt.amount}</TableCell>
                  <TableCell>{receipt.bank}</TableCell>
                  <TableCell>
                    <Button variant="text" color="primary">
                      {receipt.receipt}
                    </Button>
                  </TableCell>
                  <TableCell>{receipt.remark}</TableCell>
                  <TableCell>{receipt.admin_remarks}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    </Layout>
  );
};

export default ReceiptsPage;
