import {
    Card,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Typography,
    Grid,
    Avatar,
    Button,
  } from "@mui/material";
  import Image from "next/image";
  
  export default function AdmitCardSemFour() {
    const studentInfo = {
      enrollmentNo: "AR2412390114372",
      rollNo: "A0624R011437",
      name: "Himanshu Singh",
      fatherName: "Shiv Kumar Singh",
      course: "Master Of Business Administration (Human Resource Management & Financial Management)",
      year: "2",
      examinationCenter: "DDE, SVSU",
    };
  
    const examDetails = [
      {
        paperCode: "MBA-401",
        subject: "Principles and Practices of Management",
        semester: 4,
        date: "23-01-2025",
        time: "09:00 AM - 12:00 PM",
      },
      {
        paperCode: "MBA-402",
        subject: "Managerial Economics",
        semester: 4,
        date: "24-01-2025",
        time: "09:00 AM - 12:00 PM",
      },
      {
        paperCode: "MBA-403",
        subject: "Accounting for Managers",
        semester: 4,
        date: "25-01-2025",
        time: "09:00 AM - 12:00 PM",
      },
      {
        paperCode: "MBA-404",
        subject: "Organizational Behavior",
        semester: 4,
        date: "27-01-2025",
        time: "09:00 AM - 12:00 PM",
      },
      {
        paperCode: "MBA-405",
        subject: "Business Statistics",
        semester: 4,
        date: "28-01-2025",
        time: "09:00 AM - 12:00 PM",
      },
      {
        paperCode: "MBA-406",
        subject: "Information Systems for Management",
        semester: 4,
        date: "29-01-2025",
        time: "09:00 AM - 12:00 PM",
      },
      {
        paperCode: "MBA-407",
        subject: "Communication for Management",
        semester: 4,
        date: "30-01-2025",
        time: "09:00 AM - 12:00 PM",
      },
    ];
  
    return (
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        {/* Header */}
        <div className="text-end mb-5">
                <Button variant="contained" className="print-button" onClick={() => window.print()}>Download Admit Card</Button>
                </div>
        <div className="card-to-print">
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <Typography
            variant="h5"
            gutterBottom
            style={{ color: "#fff", backgroundColor: "#2b3990", padding: "10px" }}
          >
            DIRECTORATE OF DISTANCE EDUCATION <br />
            SWAMI VIVEKANAND SUBHARTI UNIVERSITY
          </Typography>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item>
              <Typography variant="body2">
                Enrollment No.: {studentInfo.enrollmentNo}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                Roll No.: {studentInfo.rollNo}
              </Typography>
            </Grid>
          </Grid>
        </div>
  
        {/* Candidate Info */}
        <Card sx={{ padding: "20px", marginBottom: "20px" }}>
  <Grid container spacing={2} alignItems="center">
    {/* Student Info Section */}
    <Grid item xs={8}>
      <Grid container spacing={2}>
        {Object.entries(studentInfo)
          .filter(([key]) => key !== "enrollmentNo" && key !== "rollNo")
          .map(([key, value]) => (
            <Grid item xs={6} key={key}>
              <Typography>
                <strong>{key.replace(/([A-Z])/g, " $1")}: </strong> {value}
              </Typography>
            </Grid>
          ))}
      </Grid>
    </Grid>

    {/* Photo Section */}
    <Grid item xs={4} sx={{ textAlign: "center" }}>
      <Typography variant="body1" gutterBottom>
        <strong>Candidate Photo</strong>
      </Typography>
      <div
        style={{
          width: "150px",
          height: "122px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          overflow: "hidden",
          margin: "0 auto",
          paddingBottom: "0px",
          paddingTop: '9px'
        }}
      >
        <Avatar
                    src="/id-card/himanshus.png"
                    alt="Student Photo"
                    style={{ width: 100, height: 100, margin: "auto" }}
                  />
      </div>
    </Grid>
  </Grid>
</Card>

  
        {/* Exam Details */}
        <TableContainer component={Card}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>S.No</strong>
                </TableCell>
                <TableCell>
                  <strong>Paper Code</strong>
                </TableCell>
                <TableCell>
                  <strong>Subjects</strong>
                </TableCell>
                <TableCell>
                  <strong>Semester</strong>
                </TableCell>
                <TableCell>
                  <strong>Date</strong>
                </TableCell>
                <TableCell>
                  <strong>Time</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {examDetails.map((detail, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{detail.paperCode}</TableCell>
                  <TableCell>{detail.subject}</TableCell>
                  <TableCell>{detail.semester}</TableCell>
                  <TableCell>{detail.date}</TableCell>
                  <TableCell>{detail.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div style={{textAlign: 'center', paddingTop: '30px', paddingBottom: '30px'}}>
          <Typography variant="body6" gutterBottom>
          Disclaimer : This document is computer generated and does not require any signature or stamp in order to be considered valid. <br />
          * mark represents back subject examination.
      </Typography>
          </div>
        </TableContainer>
        </div>
        
      </div>
    );
  }
  