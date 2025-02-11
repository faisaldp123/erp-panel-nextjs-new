import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const Form = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ fontWeight: "bold" }}>Apply for Marksheet</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField label="Full Name" variant="outlined" fullWidth />
            <TextField label="Email" type="email" variant="outlined" fullWidth />
            <TextField label="Contact Number" type="number" variant="outlined" fullWidth />
            <TextField label="Address" variant="outlined" fullWidth multiline rows={2} />
            <TextField label="Year" type="number" variant="outlined" fullWidth />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "#6C27F7", color: "#fff" }}>
            Pay ₹200
          </Button>
        </DialogActions>
      </Dialog>
  );
};

export default Form;
