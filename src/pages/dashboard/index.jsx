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
  TableBody

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
      important_events: "Admissions Start Date",
      date: "01 December 2019"
    },
    {
      sno: "2",
      important_events: "Last Date For Admission (Without Late Fee)",
      date: "	31 Jan 2020"
    },
    {
      sno: "3",
      important_events: "PCP (Sunday Mode) Start date",
      date: "01 March 2020"
    },
    {
      sno: "4",
      important_events: "PCP (Comprehensive For 15 Day)",
      date: "May 2020"
    },
    {
      sno: "5",
      important_events: "Examination Date (Tentative)",
      date: "June 2020"
    },
    
  ];

  return (
    <div className="h-screen">
   
     
        
      
      <div className="py-2">
      {/* <DashboardFilter/> */}
        <h3 className="text-2xl mb-5">Important Dates</h3>
        <div className=" align-middle  mb-5">
        {/* <h2 className='text-3xl'>Students Profile ({faculties.length})</h2> */}
       
        
      
        
      </div>

      <div className="container">
        <div className="text-center">
        <div className="m-auto">
        
        </div>
        <div className="text-center">
        <img 
      src="/no-profile-picture-icon.webp" 
      alt="Profile" 
      style={{ width: '120px', height: '120px', borderRadius: '50%', margin: 'auto', border: '7px solid grey' }} 
    />
        <h2 style={{ fontSize: '24px' }} className="mt-5"><strong>Welcome To Admission Panel</strong></h2>
        <p className="mb-5">
        Following are the details given by you at the time of admission. <br />Kindly check & confirm.In case of any change in contact no. or address,
        <br />you can click on <strong>Update Your Profile</strong> and request for updation.
        </p>
      </div>
        </div>

          
      <Card sx={{ width:{ xs:'100%', md:'70%'}, margin: 'auto'}}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>

                <TableCell className="bg-brand-light-blue text-white">
                  S.No
                </TableCell>
                <TableCell className="bg-brand-light-blue text-white">
                Important Event
                </TableCell>
                <TableCell className="bg-brand-light-blue text-white">
                Date
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