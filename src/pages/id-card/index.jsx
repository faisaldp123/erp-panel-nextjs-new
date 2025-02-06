import React from "react";
import { Card, CardContent, Typography, Avatar, Grid, Box, Button } from "@mui/material";

const dash = [
  {
    enrollment_no: "04-07-1997",
    student_name: "Mr. JAI SINGH GURJAR",
    fathers_name: "HARDAN GURJAR",
    mother_name: "BHAGWATI DEVI",
    programme: "BACHELOR OF ARTS",
    session: "JAN-JUNE",
    year: 2020,
    gender: "Male",
    category: "OBC",
    mobile_no: 9829481845,
    email_id: "JAISINGHMALPURA97@GMAIL.COM",
    address: "Malpura, Jaipur, Rajasthan, 303108",
  },
];

const StudentIDCard = () => {
  return (
    <>

    <div className="m-auto text-center">
    <h3 style={{marginBottom: '10px', fontSize: '24px',}}><strong>Identity Card</strong></h3>
    
    </div>
    {dash.map((student, index) => (
  <div className="card-to-print" key={index}>
    <Card
      style={{
        maxWidth: 400,
        margin: "20px auto",
        padding: "20px",
        borderRadius: "15px",
        border: '1px solid '
      }}
    >
      {/* University Header */}
      <Box textAlign="center" mb={2}>
        <Typography variant="h6" fontWeight="bold">
          Swami Vivekanand Subharti University
        </Typography>
        <Typography
          variant="body2"
          color="white"
          style={{
            backgroundColor: "#7C4DFF",
            display: "inline-block",
            padding: "4px 12px",
            borderRadius: "10px",
            marginTop: "5px",
          }}
        >
          Directorate of Distance Education
        </Typography>
      </Box>

      {/* Student Details */}
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} textAlign="center">
            <Avatar
              src="/id-card/himanshus.png"
              alt="Student Photo"
              style={{ width: 100, height: 100, margin: "auto" }}
            />
            <Typography variant="subtitle1" color="textSecondary" mt={1}>
              {student.student_name}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body2" fontWeight="bold">
              Enrollment No:{" "}
              <span style={{ fontWeight: "normal" }}>
                {student.enrollment_no}
              </span>
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              Programme:{" "}
              <span style={{ fontWeight: "normal" }}>
                {student.programme}
              </span>
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              Gender:{" "}
              <span style={{ fontWeight: "normal" }}>{student.gender}</span>
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              Category:{" "}
              <span style={{ fontWeight: "normal" }}>
                {student.category}
              </span>
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              Father's Name:{" "}
              <span style={{ fontWeight: "normal" }}>
                {student.fathers_name}
              </span>
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              Mobile No:{" "}
              <span style={{ fontWeight: "normal" }}>
                {student.mobile_no}
              </span>
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              Email ID:{" "}
              <span style={{ fontWeight: "normal" }}>
                {student.email_id}
              </span>
            </Typography>
          </Grid>

          {/* QR Code */}
          <Grid item xs={12} textAlign="center">
            <img
              src="/qrcode.png"
              alt="QR Code"
              style={{ width: 80, height: 80 }}
            />
          </Grid>
        </Grid>
      </CardContent>

      {/* Note */}
      <Box textAlign="center" mt={2} borderTop="1px solid #ddd" pt={2}>
        <Typography
          variant="caption"
          color="textSecondary"
          style={{ fontSize: "10px" }}
        >
          NOTE:- This online Student ID Card is issued in the view of the
          student's validation in Directorate of Distance Education, Swami
          Vivekanand Subharti University and applicable only in the
          university premises.
        </Typography>
      </Box>
    </Card>
  </div>
))}

<div className="text-center">
  <Button className="print-button" variant="contained" onClick={() => window.print()}>
    Print
  </Button>
</div>
    </>
  );
};

export default StudentIDCard;
