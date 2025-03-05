import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const AddReceiptModal = ({ open, handleClose }) => {
  const [file, setFile] = useState(null);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: "bold" }}>Add Receipt</DialogTitle>
      <Formik
        initialValues={{
          type: "CHEQUE",
          transactionId: "",
          date: "",
          amount: "",
          bank: "",
          remark: "",
        }}
        onSubmit={(values) => {
          console.log("Form Submitted:", values);
          handleClose();
        }}
      >
        {({ values, handleChange, setFieldValue }) => (
          <Form>
            <DialogContent dividers>
              {/* Type Field */}
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Type</InputLabel>
                <Select name="type" value={values.type} onChange={handleChange}>
                  <MenuItem value="CHEQUE">Cheque</MenuItem>
                  <MenuItem value="IMPS">IMPS</MenuItem>
                  <MenuItem value="NEFT">NEFT</MenuItem>
                </Select>
              </FormControl>

              {/* Transaction ID */}
              <Field
                as={TextField}
                label="Transaction Id"
                name="transactionId"
                fullWidth
                sx={{ mb: 2 }}
              />

              {/* Date */}
              <Field
                as={TextField}
                type="date"
                name="date"
                fullWidth
                sx={{ mb: 2 }}
                InputLabelProps={{ shrink: true }}
              />

              {/* Amount */}
              <Field
                as={TextField}
                label="Amount"
                name="amount"
                type="number"
                fullWidth
                sx={{ mb: 2 }}
              />

              {/* Bank Selection */}
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Select Bank</InputLabel>
                <Select name="bank" value={values.bank} onChange={handleChange}>
                  <MenuItem value="ICICI">ICICI</MenuItem>
                  <MenuItem value="HDFC">HDFC</MenuItem>
                  <MenuItem value="SBI">SBI</MenuItem>
                </Select>
              </FormControl>

              {/* File Upload */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Upload Transaction Receipt
                </Typography>
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<CloudUploadIcon />}
                  sx={{ bgcolor: "#6A0DAD", color: "white" }}
                >
                  Upload
                  <input
                    type="file"
                    hidden
                    onChange={(e) => {
                      setFile(e.target.files[0]);
                      setFieldValue("file", e.target.files[0]);
                    }}
                  />
                </Button>
                {file && <Typography variant="body2" sx={{ mt: 1 }}>{file.name}</Typography>}
              </Box>

              {/* Remark Field */}
              <Field
                as={TextField}
                label="Remark"
                name="remark"
                fullWidth
                multiline
                rows={2}
                sx={{ mb: 2 }}
              />
            </DialogContent>

            <DialogActions>
              <Button onClick={handleClose} variant="outlined">
                Cancel
              </Button>
              <Button type="submit" variant="contained" sx={{ bgcolor: "green", color: "white" }}>
                Submit
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default AddReceiptModal;
