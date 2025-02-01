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
  import React, { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  
  const inter = Inter({ subsets: ["latin"] });
  
  
  export default function AdmitCard() {
  
  
    const [data, setData] = useState([
      { number: 6, bgColor: "primary.main", field: "Total Leads" },
      { number: 16, bgColor: "secondary.main", field: "Follow-ups" },
      { number: 18, bgColor: "error.main", field: "Not Connected" },
      { number: 21, bgColor: "warning.main", field: "Enrolled" },
    ])
    const dash = [
        {
            dob: "04-07-1997",
            blood_group: "B Positive",
            gender: "Male",
            aadhar_no: 21283061928122,
            marital_status: "Single",
            caste_category:"OBC",
            fathers_name:"HARDAN GURJAR",
            mother_name:"BHAGWATI DEVI",
            address:"Malpura, Jaipur, Rajasthan",
            city:"Jaipur",
            state:"Rajasthan",
            pincode:303108,
            country:"India",
            mobile_no:	9829481845,
            email_id:"JAISINGHMALPURA97@GMAIL.COM",
            std_code:23455,
            landline:"091-123-123",
            occupation:"Self Employed",
            designation:"Test",
            office_address:"Rajasthan"
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
  
        <div style={{border: '1px solid grey', borderRadius: '5px', paddingBottom: '25px', borderTop: '4px dark blue', }}>
        <div className=" align-middle  mb-5 pt-5">
        {/* <h2 className='text-3xl'>Students Profile ({faculties.length})</h2> */}
       
        {/* <h2 className='text-3xl'>Students Profile</h2> */}
        <div className='text-center'>
        <h3 style={{marginBottom: '10px', fontSize:"26px"}}><strong>Student Admit Card Details</strong></h3>
        </div>
      
        
      </div>
        <Card style={{ width: '70%', margin: 'auto'}}>
          <TableContainer>
            <Table>
              <TableBody>
                  {dash.map((row, index) => (
                    <React.Fragment key={index}>
                      <TableRow>
                        <TableCell style={{padding: "15px"}}>Examination Name</TableCell>
                        {/* <TableCell>{row.dob}</TableCell> */}
                      </TableRow>
                      <TableRow>
                        <TableCell style={{padding: "7px"}}>DECEMBER</TableCell>
                        <TableCell style={{padding: "7px"}}>
                        <Button variant="contained">Please Contact to HOD.</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell style={{padding: "7px"}}>Jan - Jun</TableCell>
                        <TableCell style={{padding: "7px"}}>
                        <Button variant="contained">Please Contact to HOD.</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell style={{padding: "7px"}}>Jan - June</TableCell>
                        <TableCell style={{padding: "7px"}}>
                        <Button variant="contained">Please Contact to HOD.</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell style={{padding: "7px"}}>JULY - DEC</TableCell>
                        <TableCell style={{padding: "7px"}}>
                        <Button variant="contained">Please Contact to HOD.</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell style={{padding: "7px"}}>Reappear Exam</TableCell>
                        <TableCell style={{padding: "7px"}}>
                        <Button variant="contained">Please Contact to HOD.</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell style={{padding: "7px"}}>JAN-JUN-2022</TableCell>
                        <TableCell style={{padding: "7px"}}>
                        <Button variant="contained">Please Contact to HOD.</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell style={{padding: "7px"}}>JULY-DEC-2022</TableCell>
                        <TableCell style={{padding: "7px"}}>
                        <Button variant="contained">Please Contact to HOD.</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell style={{padding: "7px"}}>JAN-JUN-2023</TableCell>
                        <TableCell style={{padding: "7px"}}>
                        <Button variant="contained">Please Contact to HOD.</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell style={{padding: "7px"}}>JULY-DEC-2023</TableCell>
                        <TableCell style={{padding: "7px"}}>
                        <Button variant="contained">Please Contact to HOD.</Button>
                        </TableCell>
                      </TableRow>
              
                      {/* <TableRow>
                        <TableCell>Status</TableCell>
                        <TableCell>
                          {row.status === 1 ? (
                            <Chip label="Active" color="success" variant="outlined" />
                          ) : (
                            <Chip label="Inactive" color="error" variant="outlined" />
                          )}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Edit</TableCell>
                        <TableCell>
                          <Link href={`/students/form?id=${row.student_id}`}>
                            <Button>Edit</Button>
                          </Link>
                        </TableCell>
                      </TableRow> */}
                      {/* <TableRow>
                        <TableCell>View</TableCell>
                        <TableCell>
                          <Link href={`/students/info/${row.student_id}`}>
                            <Button>View</Button>
                          </Link>
                        </TableCell>
                      </TableRow> */}
                      {/* <TableRow>
                        <TableCell colSpan={2}>
                          <hr /> 
                        </TableCell>
                      </TableRow> */}
                    </React.Fragment>
                  ))}
                </TableBody>
              
            </Table>
          
          </TableContainer>
        </Card>
        </div>
        </div>
   
        </div>
  
      </div>
    );
  }