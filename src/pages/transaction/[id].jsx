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
  Grid,
} from '@mui/material';

import Link from 'next/link';
import { useForm } from 'react-hook-form';


const Students = () => {
  const [modal, setModal] = useState(false);
  

  
  const [selectedCounsellor, setSelectedCounsellor] = useState(null);
  const [passengersList, setPassengersList] = useState([
    {
        transaction_id: "234",
      name: "faijan",
      phone: "9191919191",
      email: "test1@gmail.com",
      date: "12/12/23",
      id: 1
    },
    {
        transaction_id: "434",
      name: "faijan 1",
      phone: "9191919191",
      email: "test1@gmail.com",
      date: "12/12/23",
      
      id: 2
    },
    {
        transaction_id: "334",
      name: "faijan 2",
      phone: "9191919191",
      email: "test1@gmail.com",
      date: "12/12/23",
      
      id: 3
    },
    {
        transaction_id: "1234",
      name: "faijan 3",
      phone: "9191919191",
      email: "test1@gmail.com",
      date: "12/12/23",
      
      id: 4
    },
    {
        transaction_id: "8734",
      name: "faijan 4",
      phone: "9191919191",
      email: "test1@gmail.com",
      date: "12/12/23",
      
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
        transaction_id: "",
      name: "",
      email: "",
      phone: "",
      date: "",
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
    setSelectedCounsellor(null);
    clearForm()
  }

  const handleEditModal = (manager) => {
   
    setModal(true);
    setSelectedCounsellor(manager);
    reset(manager);
  }

  const handleAddModal = () => {
    setModal(true);
    setSelectedCounsellor(null);
    clearForm()
  }


  function onSubmit(data) {
    console.log(data)
  }

  function clearForm() {
    reset({
      name: "",
      email: "",
      phone: "",
      status: "",
      managerId: ""
    })
  }


  return (
    <>
      <div className="flex justify-between align-middle  mb-5">
        <h2 className='text-3xl'>Invoice</h2>
        {/* <Button variant='outlined' color='success'  >
          <Link href='/students/form'>Add +</Link>
        </Button> */}
      </div>

      <Grid container sx={{marginBottom:'1.5rem'}} spacing={2}>
  <Grid item xs={4}>
    <h6><strong>Bill To :</strong></h6>
    <p><span>Customer Name :</span><br /><span>Email Address :</span><br /><span>Phone No. :</span><br /><span>Street address :</span><br /><span>Zip code, city, country</span></p>
    
    
  </Grid>
  <Grid item xs={4}>
    <h6><strong>Details :</strong></h6>
    <p>Enter a brief description <br />about your job or project</p>
  </Grid>
  <Grid item xs={4}>
    <h6><strong>Payment :</strong></h6>
    <p>Due data mm/dd/yyyy <br />$0.00</p>
  </Grid>
</Grid>

      <Card>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
              <TableCell>
                  Transaction id
                </TableCell>
                <TableCell>
                Date
                </TableCell>

                <TableCell>
                  Student name
                </TableCell>
                <TableCell>
                Email
                </TableCell>
                
                <TableCell>
                Amount
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
                    {row.transaction_id}
                  </TableCell>
                  <TableCell>
                    {row.date}
                  </TableCell>

                  <TableCell>
                    {row.name}
                  </TableCell>
                  <TableCell>
                    {row.email}
                  </TableCell>
                  

                  <TableCell>
                    {row.phone}
                  </TableCell>

                  

                  {/* <TableCell>
                    <Button >
                    <Link href={`/students/form?id=${row.id}`}>View</Link>
                    </Button>
                  </TableCell> */}
                </TableRow>

              ))}
            </TableBody>
          </Table>
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
                <TextField label="email" type='text' {...register("email", { required: "email is required" })} error={!!errors.email} helperText={errors.email?.message} />
                <TextField label="phone" type='text' {...register("phone", { required: "phone is required" })} error={!!errors.phone} helperText={errors.phone?.message} />
                <TextField label="status" type='text' {...register("status", { required: "status is required" })} error={!!errors.status} helperText={errors.status?.message} />
                {/* <FormControl fullWidth error={!!errors.managerId} helperText={errors.managerId?.message}> */}
                  {/* <InputLabel id="manager">Manager</InputLabel> */}
                  <TextField
                  defaultValue={getValues().managerId}
                  select
                  error={!!errors.managerId} helperText={errors.managerId?.message}
                    labelId="manager"
                    label="manager" {...register("managerId", { required: "manager is required" })} 
                  >
                    <MenuItem value={1}>Manager 1</MenuItem>
                    <MenuItem value={2}>Manager 2</MenuItem>
                    <MenuItem value={3}>Manager 3</MenuItem>
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




