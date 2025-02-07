import {

  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Card,
  Grid,
  CardContent,
  Stack,
  Autocomplete,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button

} from "@mui/material";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const inter = Inter({ subsets: ["latin"] });


export default function Result() {


  const [data, setData] = useState([
    { number: 6, bgColor: "primary.main", field: "Total Leads" },
    { number: 16, bgColor: "secondary.main", field: "Follow-ups" },
    { number: 18, bgColor: "error.main", field: "Not Connected" },
    { number: 21, bgColor: "warning.main", field: "Enrolled" },
  ])
  const dash = [
    {
      exam_name: "FIRST SEMESTER EXAM",
      session: "JAN-JUNE'2020",
      semester: "Semester 1",
      view_result: "/admit-card/semester-one"
    },
    {
      exam_name: "SECOND SEMESTER EXAM",
      session: "JULY-DEC'2020",
      semester: "Semester 2",
      view_result: "/admit-card/semester-two"
    },
    {
      exam_name: "THIRD SEMESTER EXAM",
      session: "JAN-JUNE'2021",
      semester: "Semester 3",
      view_result: "/admit-card/semester-three"
    },
    {
      exam_name: "FOURTH SEMESTER EXAM",
      session: "JULY-DEC'2021",
      semester: "Semester 4",
      view_result: "/admit-card/semester-four"
    },
    {
      exam_name: "FIFTH SEMESTER EXAM",
      session: "JAN-JUNE'2022",
      semester: "Semester 5",
      view_result: "/admit-card/semester-five"
    },
    {
      exam_name: "SIXTH SEMESTER EXAM",
      session: "JULY-DEC'2022",
      semester: "Semester 6",
      view_result: "/admit-card/semester-six"

    },
    
  ];

  return (
    <div className="h-screen">
   
     
        
      
      <div className="py-2">
      {/* <DashboardFilter/> */}
        <h3 className="text-2xl mb-5" style={{borderBottom: '2px solid', paddingBottom: '10px'}}>Admit Card</h3>
        <div className=" align-middle  mb-5">
        {/* <h2 className='text-3xl'>Students Profile ({faculties.length})</h2> */}
       
        
      
        
      </div>

      <div className="container">

          
      <Card sx={{ width:{ xs:'100%', md:'70%'}, margin: 'auto', marginTop: '40px'}}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>

                {/* <TableCell className="bg-brand-light-blue text-white">
                  Exam Name
                </TableCell> */}
                <TableCell className="bg-brand-light-blue text-white">
                Session
                </TableCell>
                <TableCell className="bg-brand-light-blue text-white">
                Semester
                </TableCell>
                <TableCell className="bg-brand-light-blue text-white">
                Admit Card
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dash.map((row, index) => (
                <TableRow
                  sx={{ '& > *': { borderBottom: 'unset' } }}
                  hover

                  tabIndex={-1}
                  key={row.id}
                >

                  <TableCell>
                    {row.session}
                  </TableCell>
                  <TableCell>
                    {row.semester}
                  </TableCell>
                  <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        href={row.view_result}
                      >
                        Download
                      </Button>
                    </TableCell>
                </TableRow>

              ))}
            </TableBody>
          </Table>
        
        </TableContainer>
      </Card>
      </div>
 
      </div>

    </div>
  );
}