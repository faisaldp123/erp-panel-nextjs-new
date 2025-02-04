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
    Checkbox,
    Button
  
  } from "@mui/material";
  import dynamic from "next/dynamic";
  import { Inter } from "next/font/google";
  import { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  
  const inter = Inter({ subsets: ["latin"] });
  
  
  export default function Dashboard() {
  
  
    const [data, setData] = useState([
      { number: 6, bgColor: "primary.main", field: "Total Leads" },
      { number: 16, bgColor: "secondary.main", field: "Follow-ups" },
      { number: 18, bgColor: "error.main", field: "Not Connected" },
      { number: 21, bgColor: "warning.main", field: "Enrolled" },
    ])
    const dash = [
      {
        sno: "1",
        important_events: "Economics-Inter Mediate Micro Economics",
        date: "BAGEN203"
      },
      {
        sno: "2",
        important_events: "	English Literature - Poetry",
        date: "BAGEN204"
      },
      {
        sno: "3",
        important_events: "Political Science – Western Political Thought",
        date: "BAGEN205"
      },
      {
        sno: "4",
        important_events: "Sociology- Basic Concept in Sociology - II",
        date: "BAGEN206"
      },
      {
        sno: "5",
        important_events: "History - History Of India Upto 1206 A.D.",
        date: "BAGEN207"
      },
      {
        sno: "6",
        important_events: "Climatology And Oceanography",
        date: "BAGEN208"
      },
      {
        sno: "7",
        important_events: "Maths- II Calculus",
        date: "BAGEN209"
      },
      {
        sno: "8",
        important_events: "Hindi Literature ( Hindi Story Literature)",
        date: "BAGEN210"
      },
      {
        sno: "9",
        important_events: "	Psychology- Foundation of Psychology",
        date: "BAGEN211"
      },
      {
        sno: "10",
        important_events: "Public Administration (Basics Of Public Administration)",
        date: "BAGEN212"
      },
    ];
  
    return (
      <div className="h-screen">
     
       
          
        
        <div className="py-2">
        {/* <DashboardFilter/> */}
          <h3 className="text-2xl mb-5" style={{borderBottom: '1px solid grey'}}>Assign Subject</h3>
          <div className=" align-middle  mb-5">
          {/* <h2 className='text-3xl'>Students Profile ({faculties.length})</h2> */}
         
          
        
          
        </div>
  
        <div className="container">
  
            
        <Card sx={{ width: {sm:'100%', md: '75%'}, margin: 'auto'}}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
  
                  <TableCell className="bg-brand-light-blue text-white" style={{fontWeight: 'bold', padding: '8px', marginLeft:'10px'}}>
                    S.No
                  </TableCell>
                  <TableCell className="bg-brand-light-blue text-white" style={{fontWeight: 'bold', padding: '8px'}}>
                  Subject Name
                  </TableCell>
                  <TableCell className="bg-brand-light-blue text-white" style={{fontWeight: 'bold', padding: '8px'}}>
                  Subject Code
                  </TableCell>
                  <TableCell className="bg-brand-light-blue text-white" style={{fontWeight: 'bold', padding: '8px'}}>Select</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              <TableRow>
          <TableCell colSpan={4} style={{ textAlign: 'center', paddingTop: '10px', paddingBottom: '10px', fontWeight: 'bold' }}>
          Elective
          </TableCell>
        </TableRow>
                {dash.map((row, index) => (
                  <TableRow
                    sx={{ '& > *': { borderBottom: 'unset' } }}
                    hover
  
                    tabIndex={-1}
                    key={row.id}
                  >
  
                    <TableCell style={{padding: '8px', marginLeft:'10px'}}>
                      {row.sno}
                    </TableCell>
                    <TableCell style={{padding: '8px'}}>
                      {row.important_events} Months
                    </TableCell>
                    <TableCell style={{padding: '8px'}}>
                      {row.date} Months
                    </TableCell>
                    <TableCell style={{padding: '8px'}}>
              <Checkbox />
            </TableCell>
                  </TableRow>
                  
  
                ))}
                <TableRow>
          <TableCell colSpan={4} style={{ textAlign: 'right', paddingTop: '10px', paddingBottom: '10px' }}>
            <Button className="bg-brand-dual" variant="contained" style={{ padding: '8px 30px' }}>
              Submit
            </Button>
          </TableCell>
        </TableRow>
              </TableBody>
              
            </Table>
          
          </TableContainer>
        </Card>
        </div>
   
        </div>
  
      </div>
    );
  }