import {
  Card,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  useMediaQuery,
  Grid,
} from "@mui/material";
import { useState } from "react";

export default function TimeTable() {
  const isSmallScreen = useMediaQuery("(max-width: 768px)"); // Detect small screen

  const dash = [
    {
      day_time: "CLASS I 09:00 AM To 09:40 AM",
      schedule: {
        Sunday: "ENGLISH - I (BAGEN101)",
        Monday: "ENGLISH - I (BAGEN101)",
        Tuesday: "ENGLISH - I (BAGEN101)",
        Wednesday: "ENGLISH - I (BAGEN101)",
        Thursday: "ENGLISH - I (BAGEN101)",
        Friday: "ENGLISH - I (BAGEN101)",
        Saturday: "ENGLISH - I (BAGEN101)",
      },
    },
    {
      day_time: "CLASS II 09:40 AM To 10:20 AM",
      schedule: {
        Sunday: "FUNDAMENTALS OF IT (BAGEN102)",
        Monday: "FUNDAMENTALS OF IT (BAGEN102)",
        Tuesday: "FUNDAMENTALS OF IT (BAGEN102)",
        Wednesday: "FUNDAMENTALS OF IT (BAGEN102)",
        Thursday: "FUNDAMENTALS OF IT (BAGEN102)",
        Friday: "FUNDAMENTALS OF IT (BAGEN102)",
        Saturday: "FUNDAMENTALS OF IT (BAGEN102)",
      },
    },
    {
      day_time: "CLASS III 10:20 AM To 11:00 AM",
      schedule: {
        Sunday: "SOCIOLOGY- DEVELOPMENT (BAGEN106)",
        Monday: "SOCIOLOGY- DEVELOPMENT (BAGEN106)",
        Tuesday: "SOCIOLOGY- DEVELOPMENT (BAGEN106)",
        Wednesday: "SOCIOLOGY- DEVELOPMENT (BAGEN106)",
        Thursday: "SOCIOLOGY- DEVELOPMENT (BAGEN106)",
        Friday: "SOCIOLOGY- DEVELOPMENT (BAGEN106)",
        Saturday: "SOCIOLOGY- DEVELOPMENT (BAGEN106)",
      },
    },
  ];

  return (
    <div className="h-screen">
      <h3
        className="text-2xl mb-5 bg-brand-light-blue pb-3 pt-2 text-white rounded"
        style={{ borderBottom: "1px solid grey", textAlign: "center" }}
      >
        "Easy Learning From Home Online classes Started"
        <br />
        "Stay Home Stay Safe Happy Learning"
      </h3>
      <div className="align-middle mb-5" style={{ borderTop: "1px solid black" }}>
        <h2 className="text-3xl text-center m-auto pt-3" style={{ borderBottom: "3px solid black", width: "fit-content" }}>
          TIMETABLE
        </h2>
      </div>

      <div className="container">
        {isSmallScreen ? (
          // Responsive View (Show day-wise format in cards)
          <>
            <Grid container spacing={2}>
              {dash.map((row, index) => (
                <Grid item xs={12} key={index}>
                  <Card style={{ padding: "10px", textAlign: "center" }}>
                    <h4 style={{ fontWeight: "bold" }}>{row.day_time}</h4>
                    {Object.entries(row.schedule).map(([day, subject], i) => (
                      <p key={i}>
                        <strong>{day}:</strong> {subject}
                      </p>
                    ))}
                  </Card>
                </Grid>
              ))}
            </Grid>
          </>
        ) : (
          // Desktop View (Full Table)
          <Card style={{ width: "100%", margin: "auto" }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell className="bg-brand-light-blue text-white">Days/Time</TableCell>
                    <TableCell className="bg-brand-light-blue text-white">Sunday</TableCell>
                    <TableCell className="bg-brand-light-blue text-white">Monday</TableCell>
                    <TableCell className="bg-brand-light-blue text-white">Tuesday</TableCell>
                    <TableCell className="bg-brand-light-blue text-white">Wednesday</TableCell>
                    <TableCell className="bg-brand-light-blue text-white">Thursday</TableCell>
                    <TableCell className="bg-brand-light-blue text-white">Friday</TableCell>
                    <TableCell className="bg-brand-light-blue text-white">Saturday</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dash.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.day_time}</TableCell>
                      {Object.values(row.schedule).map((subject, i) => (
                        <TableCell key={i}>{subject}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        )}
      </div>
    </div>
  );
}
