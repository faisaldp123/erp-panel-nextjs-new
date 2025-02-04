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
    Button,
  } from "@mui/material";
  import Image from "next/image";

  const numberToWords = (num) => {
    const a = [
      "",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen",
    ];
    const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  
    if (num === 0) return "Zero";
    if (num < 20) return a[num];
    if (num < 100) return b[Math.floor(num / 10)] + (num % 10 ? " " + a[num % 10] : "");
    if (num < 1000)
      return (
        a[Math.floor(num / 100)] + " Hundred" + (num % 100 === 0 ? "" : " " + numberToWords(num % 100))
      );
    return num;
  };
  
  export default function SemThree() {
    const studentInfo = {
      name: "JAI SINGH GURJAR",
      fatherName: "HARDAN GURJAR",
      motherName: "BHAGWATI DEVI",
      course: "BACHELOR OF ARTS",
      enrollmentNo: "193901",
      rollNo: "20093420",
      session: "JAN-JUNE'2021",
      semester: "3",
    };
  
    const results = [
      {
        subjectCode: "BAGEN301",
        subjectTitle: "English -III",
        externalMax: 70,
        externalObtained: 40,
        internalMax: 30,
        internalObtained: 22,
        totalMax: 100,
        totalObtained: 62,
        result: "PASS",
      },
      {
        subjectCode: "BAGEN302",
        subjectTitle: "Soft Skills And Personality Enhancement",
        externalMax: 70,
        externalObtained: 39,
        internalMax: 30,
        internalObtained: 20,
        totalMax: 100,
        totalObtained: 59,
        result: "PASS",
      },
      {
        subjectCode: "BAGEN303",
        subjectTitle: "Economics- Indian Economy Nature & Problem",
        externalMax: 70,
        externalObtained: 45,
        internalMax: 30,
        internalObtained: 26,
        totalMax: 100,
        totalObtained: 71,
        result: "PASS",
      },
      {
        subjectCode: "BAGEN304",
        subjectTitle: "English Literature- Drama",
        externalMax: 70,
        externalObtained: 38,
        internalMax: 30,
        internalObtained: 18,
        totalMax: 100,
        totalObtained: 56,
        result: "PASS",
      },
      {
        subjectCode: "BAGEN309",
        subjectTitle: "Maths- III Statics",
        externalMax: 70,
        externalObtained: 42,
        internalMax: 30,
        internalObtained: 19,
        totalMax: 100,
        totalObtained: 61,
        result: "PASS",
      },
    ];
  
    const totalMarks = results.reduce((acc, row) => acc + row.totalObtained, 0);
    const totalMarksInWords = numberToWords(totalMarks);
  
    return (
      <div style={{ padding: "20px" }}>
        {/* Header Section */}
        <div style={{ textAlign: "center", marginBottom: "20px", margin: 'auto' }}>
          <div style={{display: 'flex', justifyContent:'space-between'}}>
          <div>
          <Image
            src="/no-profile-picture-icon.webp" // Replace with your logo path
            alt="Admission Panel Logo"
            width={100}
            height={100}
          />
          </div>
          <div>
          <Button variant="contained" onClick={() => window.print()}>Print Result</Button>
          </div>
          </div>
          <Typography variant="h3" gutterBottom>
            Admission Panel
          </Typography>
          <Typography variant="h6">
            Institute of Distance Education <br /> Result
          </Typography>
          <Typography variant="body1" className="mb-4">
            Examination Month : SEPT./OCT. '2021
          </Typography>
        </div>
  
        {/* Student Info Section */}
        <Card className="border-dark mt-4" sx={{ padding: "20px", marginBottom: "20px", marginTop: '10px' }}>
          <Grid container spacing={2}>
            {Object.entries(studentInfo).map(([key, value]) => (
              <Grid item xs={6} sm={4} key={key}>
                <Typography variant="body1">
                  <strong>{key.replace(/([A-Z])/g, " $1")}: </strong> {value}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Card>
  
        {/* Results Table */}
        <TableContainer className="border-dark" component={Card}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Subject Code</strong></TableCell>
                <TableCell><strong>Subject Title</strong></TableCell>
                <TableCell><strong>External Marks (Max/Obt)</strong></TableCell>
                <TableCell><strong>Internal Marks (Max/Obt)</strong></TableCell>
                <TableCell><strong>Total Marks (Max/Obt)</strong></TableCell>
                <TableCell><strong>Result</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.subjectCode}</TableCell>
                  <TableCell>{row.subjectTitle}</TableCell>
                  <TableCell>
                    {row.externalMax}/{row.externalObtained}
                  </TableCell>
                  <TableCell>
                    {row.internalMax}/{row.internalObtained}
                  </TableCell>
                  <TableCell>
                    {row.totalMax}/{row.totalObtained}
                  </TableCell>
                  <TableCell>{row.result}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={4} align="right">
                  <strong>Grand Total:</strong>
                </TableCell>
                <TableCell colSpan={2}>
                  <strong>
                    {totalMarks} ({totalMarksInWords} Only)
                  </strong>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
  
        {/* Footer Section */}
        <Typography variant="body2" align="center" sx={{ marginTop: "20px" }}>
          Result: PASS | Division: FIRST
        </Typography>
        <Typography variant="caption" align="center" display="block">
          1. The Status is indicative only & cannot be used as a substitute for
          the Statement of Marks.
        </Typography>
        <Typography variant="caption" align="center" display="block">
          2. Students must apply for revaluation, re-totaling within 20 days from
          the announcement of results.
        </Typography>
      </div>
    );
  }
  