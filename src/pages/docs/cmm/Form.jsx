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

const Form = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle sx={{ fontWeight: "bold" }}>Apply CMM</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          {/* Personal Details */}
          <Grid item xs={6}><TextField label="Name" variant="outlined" fullWidth required /></Grid>
          <Grid item xs={6}><TextField label="Full Name (हिन्दी)" variant="outlined" fullWidth required /></Grid>
          <Grid item xs={6}><TextField label="Father's Name" variant="outlined" fullWidth required /></Grid>
          <Grid item xs={6}><TextField label="Father's Name (हिन्दी)" variant="outlined" fullWidth required /></Grid>
          <Grid item xs={6}><TextField label="Mother's Name" variant="outlined" fullWidth required /></Grid>
          <Grid item xs={6}><TextField label="Mother's Name (हिन्दी)" variant="outlined" fullWidth required /></Grid>
          <Grid item xs={6}><TextField label="Email" type="email" variant="outlined" fullWidth required /></Grid>
          <Grid item xs={6}><TextField label="Contact" type="number" variant="outlined" fullWidth required /></Grid>
          <Grid item xs={6}><TextField label="Aadhar No" type="text" variant="outlined" fullWidth required /></Grid>
          <Grid item xs={6}><TextField label="Pin Code" type="text" variant="outlined" fullWidth required /></Grid>
          <Grid item xs={12}>
            <TextField label="Communication Address" variant="outlined" fullWidth multiline rows={2} required />
          </Grid>

          {/* Marks Details */}
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 2 }}>Marks Details</Typography>
          </Grid>
          {["First Year", "Second Year", "Third Year"].map((year, index) => (
            <React.Fragment key={index}>
              <Grid item xs={3}><TextField label="Year" variant="outlined" fullWidth value={year} disabled /></Grid>
              <Grid item xs={3}><TextField label="Roll No" variant="outlined" fullWidth /></Grid>
              <Grid item xs={3}><TextField label="Maximum Marks" variant="outlined" fullWidth /></Grid>
              <Grid item xs={3}><TextField label="Marks Obtained" variant="outlined" fullWidth /></Grid>
            </React.Fragment>
          ))}

          {/* Upload Section */}
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 2 }}>Upload Documents</Typography>
          </Grid>
          {["Aadhar Upload", "Photograph Upload"].map((label, index) => (
            <Grid item xs={4} key={index}>
              <Typography>{label}*</Typography>
              <Button variant="contained" sx={{ backgroundColor: "#6C27F7", color: "#fff", width: "100%" }}>
                Upload
              </Button>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ marginTop: 2, fontSize: '10px' }}>
              Supportive Document* (Upload both semester's online result merged PDF of above selected year)
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" sx={{ backgroundColor: "#6C27F7", color: "#fff", width: "100%" }}>
              Upload
            </Button>
          </Grid>
        </Grid>
      </DialogContent>

      {/* Modal Actions */}
      <DialogActions>
        <Button onClick={handleClose} sx={{ backgroundColor: "#F44336", color: "#fff" }}>
          Close
        </Button>
        <Button variant="contained" sx={{ backgroundColor: "#6C27F7", color: "#fff" }}>
          Pay ₹2000
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Form;
