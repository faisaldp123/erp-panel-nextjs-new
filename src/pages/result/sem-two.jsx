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
  
  export default function SemTwo() {
    const studentInfo = {
      name: "JAI SINGH GURJAR",
      fatherName: "HARDAN GURJAR",
      motherName: "BHAGWATI DEVI",
      course: "BACHELOR OF ARTS",
      enrollmentNo: "193901",
      rollNo: "20093420",
      session: "JULY-DEC'2020",
      semester: "2",
    };
  
    const results = [
      {
        subjectCode: "BAGEN201",
        subjectTitle: "Hindi",
        externalMax: 70,
        externalObtained: 51,
        internalMax: 30,
        internalObtained: 23,
        totalMax: 100,
        totalObtained: 74,
        result: "PASS",
      },
      {
        subjectCode: "BAGEN202",
        subjectTitle: "Environmental Science",
        externalMax: 70,
        externalObtained: 52,
        internalMax: 30,
        internalObtained: 18,
        totalMax: 100,
        totalObtained: 70,
        result: "PASS",
      },
      {
        subjectCode: "BAGEN203",
        subjectTitle: "Economics-Inter Mediate Micro Economics",
        externalMax: 70,
        externalObtained: 48,
        internalMax: 30,
        internalObtained: 20,
        totalMax: 100,
        totalObtained: 68,
        result: "PASS",
      },
      {
        subjectCode: "BAGEN204",
        subjectTitle: "English Literature – Writing of Shakespeare",
        externalMax: 70,
        externalObtained: 39,
        internalMax: 30,
        internalObtained: 20,
        totalMax: 100,
        totalObtained: 59,
        result: "PASS",
      },
      {
        subjectCode: "BAGEN209",
        subjectTitle: "Maths- II Calculus",
        externalMax: 70,
        externalObtained: 38,
        internalMax: 30,
        internalObtained: 19,
        totalMax: 100,
        totalObtained: 57,
        result: "PASS",
      },
    ];
  
    const totalMarks = results.reduce((acc, row) => acc + row.totalObtained, 0);
    const totalMarksInWords = numberToWords(totalMarks);
  
    return (
      <div style={{ padding: "20px" }}>
        {/* Header Section */}
        <div className="card-to-print">
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
          </div>
          <Typography variant="h3" gutterBottom>
            Admission Panel
          </Typography>
          <Typography variant="h6">
            Institute of Distance Education <br /> Result
          </Typography>
          <Typography variant="body1" className="mb-4">
            Examination Month : AUGUST/SEPTEMBER '2020
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
        <div className="text-center mt-5">
          <Button variant="contained" className="print-button" onClick={() => window.print()}>Print Result</Button>
          </div>
      </div>
    );
  }
  