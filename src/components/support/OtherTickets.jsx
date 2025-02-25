import { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  TextareaAutosize,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const AddTicketModal = ({ open, onClose }) => {
  const [subject, setSubject] = useState("");
  const [detail, setDetail] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log({ subject, detail, file });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: "500px" },
          bgcolor: "white",
          boxShadow: 24,
          p: 3,
          borderRadius: 2,
        }}
      >
        {/* Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            Add Other Ticket
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Subject Input */}
        <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
          Subject <span style={{ color: "red" }}>*</span>
        </Typography>
        <TextField
          fullWidth
          placeholder="Enter Ticket Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          sx={{ mb: 2 }}
        />

        {/* Detail Input */}
        <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
          Detail <span style={{ color: "red" }}>*</span>
        </Typography>
        <TextareaAutosize
          minRows={4}
          placeholder="Describe..."
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            fontSize: "14px",
          }}
        />

        {/* Upload Button */}
        <Button
          component="label"
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: "#8A2BE2",
            color: "white",
            display: "flex",
            alignItems: "center",
            textTransform: "none",
            width: '35%'
          }}
        >
          <UploadFileIcon sx={{ mr: 1 }} />
          Upload
          <input type="file" hidden onChange={handleFileChange} />
        </Button>
        {file && (
          <Typography variant="body2" sx={{ mt: 1, color: "#6C27F7" }}>
            {file.name}
          </Typography>
        )}

        {/* Footer Buttons */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Button
            onClick={onClose}
            variant="contained"
            sx={{
              backgroundColor: "#FF4D4D",
              "&:hover": { backgroundColor: "#FF6666" },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{
              backgroundColor: "#7AC142",
              "&:hover": { backgroundColor: "#6FA936" },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddTicketModal;
