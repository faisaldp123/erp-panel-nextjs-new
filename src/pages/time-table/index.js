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
  
  
  export default function TimeTable() {
  
  
    const [data, setData] = useState([
      { number: 6, bgColor: "primary.main", field: "Total Leads" },
      { number: 16, bgColor: "secondary.main", field: "Follow-ups" },
      { number: 18, bgColor: "error.main", field: "Not Connected" },
      { number: 21, bgColor: "warning.main", field: "Enrolled" },
    ])
    const dash = [
      {
        day_time: "CLASS I 09:00 AM To 09:40 AM",
        sunday: "ENGLISH - I (BAGEN101)",
        monday: "ENGLISH - I (BAGEN101)",
        tuesday: "ENGLISH - I (BAGEN101)",
        wednesday: "ENGLISH - I (BAGEN101)",
        thursday: "ENGLISH - I (BAGEN101)",
        friday: "ENGLISH - I (BAGEN101)",
        saturday: "ENGLISH - I (BAGEN101)",
      },
      {
        day_time: "CLASS II 09:40 AM To 10:20 AM",
        sunday: "FUNDAMENTALS OF INFORMATION TECHNOLOGY (BAGEN102)",
        monday: "FUNDAMENTALS OF INFORMATION TECHNOLOGY (BAGEN102)",
        tuesday: "FUNDAMENTALS OF INFORMATION TECHNOLOGY (BAGEN102)",
        wednesday: "FUNDAMENTALS OF INFORMATION TECHNOLOGY (BAGEN102)",
        thursday: "FUNDAMENTALS OF INFORMATION TECHNOLOGY (BAGEN102)",
        friday: "FUNDAMENTALS OF INFORMATION TECHNOLOGY (BAGEN102)",
        saturday: "FUNDAMENTALS OF INFORMATION TECHNOLOGY (BAGEN102)",
      },
      {
        day_time: "CLASS III 10:20 AM To 11:00 AM",
        sunday: "SOCIOLOGY- SOCIOLOGY OF DEVELOPMENT (BAGEN106)",
        monday: "SOCIOLOGY- SOCIOLOGY OF DEVELOPMENT (BAGEN106)",
        tuesday: "SOCIOLOGY- SOCIOLOGY OF DEVELOPMENT (BAGEN106)",
        wednesday: "SOCIOLOGY- SOCIOLOGY OF DEVELOPMENT (BAGEN106)",
        thursday: "SOCIOLOGY- SOCIOLOGY OF DEVELOPMENT (BAGEN106)",
        friday: "SOCIOLOGY- SOCIOLOGY OF DEVELOPMENT (BAGEN106)",
        saturday: "SOCIOLOGY- SOCIOLOGY OF DEVELOPMENT (BAGEN106)",
      },
      {
        day_time: "CLASS IV 11:00 AM To 11:40 AM",
        sunday: "ECONOMICS-CONSUMER BEHAVIOR (BAGEN103)",
        monday: "ECONOMICS-CONSUMER BEHAVIOR (BAGEN103)",
        tuesday: "ECONOMICS-CONSUMER BEHAVIOR (BAGEN103)",
        wednesday: "ECONOMICS-CONSUMER BEHAVIOR (BAGEN103)",
        thursday: "ECONOMICS-CONSUMER BEHAVIOR (BAGEN103)",
        friday: "ECONOMICS-CONSUMER BEHAVIOR (BAGEN103)",
        saturday: "ECONOMICS-CONSUMER BEHAVIOR (BAGEN103)",
      },
      {
        day_time: "CLASS V 11:40 AM To 12:20 AM",
        sunday: "POLITICAL SCIENCE- POLITICAL THEORY & INSTITUTIONS (BAGEN105)",
        monday: "POLITICAL SCIENCE- POLITICAL THEORY & INSTITUTIONS (BAGEN105)",
        tuesday: "POLITICAL SCIENCE- POLITICAL THEORY & INSTITUTIONS (BAGEN105)",
        wednesday: "POLITICAL SCIENCE- POLITICAL THEORY & INSTITUTIONS (BAGEN105)",
        thursday: "POLITICAL SCIENCE- POLITICAL THEORY & INSTITUTIONS (BAGEN105)",
        friday: "POLITICAL SCIENCE- POLITICAL THEORY & INSTITUTIONS (BAGEN105)",
        saturday: "POLITICAL SCIENCE- POLITICAL THEORY & INSTITUTIONS (BAGEN105)",
      },
      {
        day_time: "CLASS VI 12:20 AM To 1:00 PM",
        sunday: "PUBLIC ADMINISTRATION (ADMINISTRATIVE THEORY) (BAGEN112)",
        monday: "PUBLIC ADMINISTRATION (ADMINISTRATIVE THEORY) (BAGEN112)",
        tuesday: "PUBLIC ADMINISTRATION (ADMINISTRATIVE THEORY) (BAGEN112)",
        wednesday: "PUBLIC ADMINISTRATION (ADMINISTRATIVE THEORY) (BAGEN112)",
        thursday: "PUBLIC ADMINISTRATION (ADMINISTRATIVE THEORY) (BAGEN112)",
        friday: "PUBLIC ADMINISTRATION (ADMINISTRATIVE THEORY) (BAGEN112)",
        saturday: "PUBLIC ADMINISTRATION (ADMINISTRATIVE THEORY) (BAGEN112)",
      },
      {
        day_time: "CLASS VII 1:00 PM To 1:40 PM",
        sunday: "HISTORY- HISTORY OF INDIA UPTO 1206 A.D. (BAGEN107)",
        monday: "HISTORY- HISTORY OF INDIA UPTO 1206 A.D. (BAGEN107)",
        tuesday: "HISTORY- HISTORY OF INDIA UPTO 1206 A.D. (BAGEN107)",
        wednesday: "HISTORY- HISTORY OF INDIA UPTO 1206 A.D. (BAGEN107)",
        thursday: "HISTORY- HISTORY OF INDIA UPTO 1206 A.D. (BAGEN107)",
        friday: "HISTORY- HISTORY OF INDIA UPTO 1206 A.D. (BAGEN107)",
        saturday: "HISTORY- HISTORY OF INDIA UPTO 1206 A.D. (BAGEN107)",
      },
      {
        day_time: "CLASS VIII 1:40 PM To 2:20 PM",
        sunday: "PHYSICAL GEOGRAPHY (BAGEN108)",
        monday: "PHYSICAL GEOGRAPHY (BAGEN108)",
        tuesday: "PHYSICAL GEOGRAPHY (BAGEN108)",
        wednesday: "PHYSICAL GEOGRAPHY (BAGEN108)",
        thursday: "PHYSICAL GEOGRAPHY (BAGEN108)",
        friday: "PHYSICAL GEOGRAPHY (BAGEN108)",
        saturday: "PHYSICAL GEOGRAPHY (BAGEN108)",
      },
      {
        day_time: "CLASS IX 2:20 PM To 3:00 PM",
        sunday: "HINDI LITERATURE (ANCIENT HINDI LITERATURE) (BAGEN110)",
        monday: "HINDI LITERATURE (ANCIENT HINDI LITERATURE) (BAGEN110)",
        tuesday: "HINDI LITERATURE (ANCIENT HINDI LITERATURE) (BAGEN110)",
        wednesday: "HINDI LITERATURE (ANCIENT HINDI LITERATURE) (BAGEN110)",
        thursday: "HINDI LITERATURE (ANCIENT HINDI LITERATURE) (BAGEN110)",
        friday: "HINDI LITERATURE (ANCIENT HINDI LITERATURE) (BAGEN110)",
        saturday: "HINDI LITERATURE (ANCIENT HINDI LITERATURE) (BAGEN110)",
      },
      {
        day_time: "CLASS X 3:00 PM To 3:40 PM",
        sunday: "PSYCHOLOGY- FUNDAMENTAL OF PSYCHOLOGY (BAGEN111)",
        monday: "PSYCHOLOGY- FUNDAMENTAL OF PSYCHOLOGY (BAGEN111)",
        tuesday: "PSYCHOLOGY- FUNDAMENTAL OF PSYCHOLOGY (BAGEN111)",
        wednesday: "PSYCHOLOGY- FUNDAMENTAL OF PSYCHOLOGY (BAGEN111)",
        thursday: "PSYCHOLOGY- FUNDAMENTAL OF PSYCHOLOGY (BAGEN111)",
        friday: "PSYCHOLOGY- FUNDAMENTAL OF PSYCHOLOGY (BAGEN111)",
        saturday: "PSYCHOLOGY- FUNDAMENTAL OF PSYCHOLOGY (BAGEN111)",
      },
      {
        day_time: "CLASS XII 4:20 PM To 5:00 PM",
        sunday: "MATHS-I (BAGEN109)",
        monday: "MATHS-I (BAGEN109)",
        tuesday: "MATHS-I (BAGEN109)",
        wednesday: "MATHS-I (BAGEN109)",
        thursday: "MATHS-I (BAGEN109)",
        friday: "MATHS-I (BAGEN109)",
        saturday: "MATHS-I (BAGEN109)",
      },
      
    ];
    const handleOpenFile = (fileUrl) => {
      window.open(fileUrl, "_blank");
    };
  
    return (
      <div className="h-screen">
     
       
          
        
        <div className="py-2">
        {/* <DashboardFilter/> */}
          <h3 className="text-2xl mb-5 bg-brand-light-blue pb-3 pt-2 text-white rounded" style={{borderBottom: '1px solid grey', textAlign: 'center',}}>"Easy Learning From Home Online classes Started"<br />
          "Stay Home Stay Safe Happy Learning"</h3>
          <div className=" align-middle  mb-5" style={{borderTop: '1px solid black'}}>
          <h2 className='text-3xl text-center m-auto pt-3' style={{borderBottom: '3px solid black', width: 'fit-content'}}>TIMETABLE 1</h2>
         
          
        
          
        </div>
  
        <div className="container">
          <div className="text-center">
          <div className="m-auto">
          
          </div>
          </div>
  
            
        <Card style={{ width: '100%', margin: 'auto'}}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
  
                  <TableCell className="bg-brand-light-blue text-white">
                  Days/Time
                  </TableCell>
                  <TableCell className="bg-brand-light-blue text-white">
                  Sunday
                  </TableCell>
                  <TableCell className="bg-brand-light-blue text-white">
                  Monday
                  </TableCell>
                  <TableCell className="bg-brand-light-blue text-white">
                  Tuesday
                  </TableCell>
                  <TableCell className="bg-brand-light-blue text-white">
                  Wednesday
                  </TableCell>
                  <TableCell className="bg-brand-light-blue text-white">
                    Thursday
                  </TableCell>
                  <TableCell className="bg-brand-light-blue text-white">
                    Friday
                  </TableCell>
                  <TableCell className="bg-brand-light-blue text-white">
                    Saturday
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
                      {row.day_time}
                    </TableCell>
                    <TableCell>
                      {row.sunday}
                    </TableCell>
                    <TableCell>
                      {row.monday}
                    </TableCell>
                    <TableCell>
                     {row.tuesday}
                    </TableCell>
                    <TableCell>
                     {row.wednesday}
                    </TableCell>
                    <TableCell>
                     {row.thursday}
                    </TableCell>
                    <TableCell>
                     {row.friday}
                    </TableCell>
                    <TableCell>
                     {row.saturday}
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