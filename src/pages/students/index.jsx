import { useState, useEffect } from 'react';
import {
  Card,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  Checkbox,
  TableContainer,
  Chip,
  Button,
  Modal,
  Box,
  Typography,
  Stack,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
} from '@mui/material';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { getStudent } from '@/helper/api/students';
import { useNotification } from '@/hooks/useNotification';


const Students = () => {
  const {displayNotification} = useNotification();
  
  const [isLoading, setIsLoading] = useState(false)
  const [students, setStudents] = useState([]);
  

  
  useEffect(() => {
    
    getData();
  }, []);

  const getData = async (page = 1, pageSize = 10) => {
    setIsLoading(true)
    try {

      const data = await getStudent({page, pageSize});
      setStudents(data.result)
     
    } catch (error) {
      displayNotification({message: "Unable To Get Students", type: "error"})

    } finally{
      setIsLoading(false);
    }
  };


  return (
    <>
      <div className="flex justify-between align-middle  mb-5">
        <h2 className='text-3xl'>Students ({students.length})</h2>
        
          <Link href='/students/form'>
          <Button variant='outlined' color='success'  >Add +</Button>
          </Link>
        
      </div>

      <Card>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>

                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                Email
                </TableCell>
                <TableCell>
                FAther name
                </TableCell>
                <TableCell>
                  Phone no.
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
           
                <TableCell>
                  Course
                </TableCell>
                <TableCell>
                  Edit
                </TableCell>
                <TableCell>
                  View
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((row, index) => (
                <TableRow
                  sx={{ '& > *': { borderBottom: 'unset' } }}
                  hover

                  tabIndex={-1}
                  key={row.id}
                >

                  <TableCell>
                    {row.name}
                  </TableCell>

                  <TableCell>
                    {row.email}
                  </TableCell>

                  <TableCell>
                    {row.father_name}
                  </TableCell>
                  <TableCell>
                    {row.phone}
                  </TableCell>

                  <TableCell>
                  {
                        row.status == 1 ? <Chip label={"active"} color={"success"} variant="outlined" /> : <Chip label={"inactive"} color={"error"} variant="outlined" />
                    }

                  </TableCell>
        
                  <TableCell>
                    {row.course}
                  </TableCell>
                  <TableCell>
                    
                    <Link href={`/students/form?id=${row.student_id}`}><Button >Edit</Button></Link>
                    
                  </TableCell>
                  <TableCell>
                    
                    <Link href={`/students/info/${row.student_id}`}><Button >View</Button></Link>
                    
                  </TableCell>
                </TableRow>

              ))}
            </TableBody>
          </Table>
       
        </TableContainer>
      </Card>

    </>
  )
}

export default Students;




