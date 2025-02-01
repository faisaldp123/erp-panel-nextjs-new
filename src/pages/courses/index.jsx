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
import { getCourse, getCourses } from '@/helper/api/courses';
import { useNotification } from '@/hooks/useNotification';


const Students = () => {
  const {displayNotification} = useNotification();

  const [isLoading, setIsLoading] = useState(false)
  const [courses, setCourses] = useState([]);


  useEffect(() => {
    
    getData();
  }, []);

  const getData = async (page = 1, pageSize = 10) => {
    setIsLoading(true)
    try {
   
        const data = await getCourse({page, pageSize});
        setCourses(data.result)
     
    } catch (error) {
      
      displayNotification({message: "Unable to get courses", type: "error"})
    } finally{
      setIsLoading(false);
    }
  };



  return (
    <>
      <div className="flex justify-between align-middle  mb-5">
        <h2 className='text-3xl'>Courses ({courses.length})</h2>
        <Button variant='outlined' color='success' >
          <Link href='/courses/form'>Add +</Link>
        </Button>
      </div>

      <Card>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>

                <TableCell>
                  Course name
                </TableCell>
                <TableCell>
                  Duration
                </TableCell>
                <TableCell>
                  Edit
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.map((row, index) => (
                <TableRow
                  sx={{ '& > *': { borderBottom: 'unset' } }}
                  hover

                  tabIndex={-1}
                  key={row.id}
                >

                  <TableCell>
                    {row.course_name}
                  </TableCell>
                  <TableCell>
                    {row.duration} Months
                  </TableCell>
                  <TableCell>
                    
                    <Link href={`/courses/form?id=${row.course_id}`}><Button >Edit</Button></Link>
                    
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




