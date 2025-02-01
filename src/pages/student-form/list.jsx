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


const Students = () => {
  const [modal, setModal] = useState(false);
  

  
  const [selectedCourses, setSelectedCourses] = useState(null);
  const [passengersList, setPassengersList] = useState([
    {
      name: "faijan",
      status: "inactive",
      id: 1
    },
    {
      name: "faijan 1",
      status: "active",
      
      id: 2
    },
    {
      name: "faijan 2",
      status: "active",
      
      id: 3
    },
    {
      name: "faijan 3",
      status: "inactive",
      
      id: 4
    },
    {
      name: "faijan 4",
      status: "active",
      
      id: 5
    }
  ]);
  const [passengersCount, setPassengersCount] = useState(5);

  const [controller, setController] = useState({
    page: 0,
    rowsPerPage: 10
  });
  const form = useForm({
    reValidateMode: 'onChange',
    defaultValues: {
      name: "",
      status: null
    },
  });
  const { register, handleSubmit, formState, reset, getValues } = form;
  const { errors } = formState;
  useEffect(() => {
    // const getData = async () => {
    //   const url = `https://api.instantwebtools.net/v1/passenger?page=${controller.page}&size=${controller.rowsPerPage}`
    //   try {
    //     const response = await fetch(url);
    //     if (response.statusText === 'OK') {
    //       const data = await response.json();
    //       console.log(data);
    //       setPassengersList(data.data);
    //       setPassengersCount(data.totalPassengers);
    //     } else {
    //       throw new Error('Request failed')
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // getData();
  }, [controller]);

  const handlePageChange = (event, newPage) => {
    setController({
      ...controller,
      page: newPage
    });
  };

  const handleChangeRowsPerPage = (event) => {
    setController({
      ...controller,
      rowsPerPage: parseInt(event.target.value, 10),
      page: 0
    });
  };

  const handleCloseModal = () => {
    setModal(false); 
    setSelectedCourses(null);
    clearForm()
  }
  

  const handleEditModal = (manager) => {
   
    setModal(true);
    setSelectedCourses(manager);
    reset(manager);
  }

  const handleAddModal = () => {
    setModal(true);
    setSelectedCourses(null);
    clearForm()
  }


  function onSubmit(data) {
    console.log(data)
  }

  function clearForm() {
    reset({
      name: "",
      status: null
    })
  }


  return (
    <>
      <div className="flex justify-between align-middle  mb-5">
        <h2 className='text-3xl'>Student Form (5)</h2>
        <Button variant='outlined' color='success' onClick={handleAddModal} >
          Add +
        </Button>
      </div>

      <Card>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>

                <TableCell>
                  Field Name
                </TableCell>
                <TableCell>
                  Status
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
              {passengersList.map((row, index) => (
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
                    <Chip label={row.status} color={row.status === "ACTIVE" ? "success" : "error"} variant="outlined" />

                  </TableCell>
                  <TableCell>
                    <Button onClick={() => handleEditModal(row)}>
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell>
                  <Button >
                    <Link href={`/student-form/info/id`}>View</Link>
                    </Button>
                  </TableCell>
                </TableRow>

              ))}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            onPageChange={handlePageChange}
            page={controller.page}
            count={passengersCount}
            rowsPerPage={controller.rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Card>
      <Modal
        open={modal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          bgcolor: 'background.paper',
          borderRadius: 1,
          boxShadow: 24,
          p: 4,
        }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Counsellor
          </Typography>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={2} className='my-5'>
                <TextField label="Name" type='text' {...register("name", { required: "Name is required" })} error={!!errors.name} helperText={errors.name?.message} />
                
                
                {/* <FormControl fullWidth error={!!errors.managerId} helperText={errors.managerId?.message}> */}
                  {/* <InputLabel id="manager">Manager</InputLabel> */}
                  <TextField
                  defaultValue={getValues().status}
                  select
                  error={!!errors.status} helperText={errors.status?.message}
                    labelId="status"
                    label="status" {...register("status", { required: "status is required" })} 
                  >
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="inactive">Inacive</MenuItem>
                  </TextField>
                  {/* <FormHelperText>{errors?.managerId?.message}</FormHelperText> */}
                {/* </FormControl> */}
                {/* <TextField label="manager" type='text' {...register("manager", { required: "manager is required" })} error={!!errors.name}/> */}
              </Stack>
              <div>
                <Button className='me-5' onClick={() => handleCloseModal()}>
                  Cancel
                </Button>
                <Button variant='outlined' color='success' type='submit'>
                  Save
                </Button>
              </div>
            </form>

          </div>
        </Box>
      </Modal>
    </>
  )
}

export default Students;




