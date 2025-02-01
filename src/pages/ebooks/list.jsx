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


export default function EBooks() {


  const [data, setData] = useState([
    { number: 6, bgColor: "primary.main", field: "Total Leads" },
    { number: 16, bgColor: "secondary.main", field: "Follow-ups" },
    { number: 18, bgColor: "error.main", field: "Not Connected" },
    { number: 21, bgColor: "warning.main", field: "Enrolled" },
  ])
  const dash = [
    {
      sno: "1",
      important_events: "Hindi-I",
      date: "BAGEN201",
      fileUrl: "/ebooks/hindi.pdf",
      fileUrl: "/syllabus/MUJ_Domestics_MBA-1.pdf",
    },
    {
      sno: "2",
      important_events: "Environmental Science",
      date: "BAGEN202",
      fileUrl: "/ebooks/hindi.pdf",
      fileUrl: "/syllabus/MUJ_Domestics_MBA-1.pdf",
    },
    {
      sno: "3",
      important_events: "Mathematic-I",
      date: "BAGEN202",
      fileUrl: "/ebooks/hindi.pdf",
      fileUrl: "/syllabus/MUJ_Domestics_MBA-1.pdf",
    },
    {
      sno: "4",
      important_events: "English-II",
      date: "BAGEN205",
      fileUrl: "/ebooks/hindi.pdf",
      fileUrl: "/syllabus/MUJ_Domestics_MBA-1.pdf",
    },
    {
      sno: "5",
      important_events: "Science-III",
      date: "BAGEN207",
      fileUrl: "/syllabus/MUJ_Domestics_MBA-1.pdf",
    },
    
  ];
  const handleOpenFile = (fileUrl) => {
    window.open(fileUrl, "_blank");
  };

  return (
    <div className="h-screen">
   
     
        
      
      <div className="py-2">
      {/* <DashboardFilter/> */}
        <h3 className="text-2xl mb-5" style={{borderBottom: '1px solid grey'}}>Manage E-Books</h3>
        <div className=" align-middle  mb-5">
        {/* <h2 className='text-3xl'>Students Profile ({faculties.length})</h2> */}
       
        
      
        
      </div>

      <div className="container">
        <div className="text-center">
        <div className="m-auto">
        
        </div>
        </div>

          
      <Card style={{ width: '70%', margin: 'auto'}}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>

                <TableCell className="bg-brand-light-blue text-white">
                  S.No
                </TableCell>
                <TableCell className="bg-brand-light-blue text-white">
                Subject Name
                </TableCell>
                <TableCell className="bg-brand-light-blue text-white">
                Subject Code
                </TableCell>
                <TableCell className="bg-brand-light-blue text-white">
                E-Books
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
                    {row.sno}
                  </TableCell>
                  <TableCell>
                    {row.important_events} Months
                  </TableCell>
                  <TableCell>
                    {row.date} Months
                  </TableCell>
                  <TableCell>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleOpenFile(row.fileUrl)}
                        >
                          Open E-Book
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