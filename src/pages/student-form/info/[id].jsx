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
        session: "August",
      type: "Registration",
      payable_amount: "1000",
      amount_paid: "Rs 1000",
      remain_amount: "Rs  0",
      id: 1
    },
    {
      session: "August",
    type: "Semester",
    payable_amount: "Rs 12000",
    amount_paid: "Rs 8000",
    remain_amount: "Rs  4000",
    id: 1
  },
  {
    session: "August",
  type: "Exam",
  payable_amount: "Rs 2000",
  amount_paid: "Rs 2000",
  remain_amount: "Rs  0",
  id: 1
},
{
  session: "August",
type: "Online",
payable_amount: "Rs 12000",
amount_paid: "Rs 0",
remain_amount: "Rs  0",
id: 1
},
{
  session: "August",
type: "Registration",
payable_amount: "Rs 12000",
amount_paid: "Rs 0",
remain_amount: "Rs  0",
id: 1
},
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
             <strong> Sessions</strong>
                </TableCell>
                <TableCell>
                <strong>Type</strong>
                </TableCell>

                <TableCell>
                <strong>Payable Amount</strong>
                </TableCell>
                <TableCell>
                <strong>Amount  Paid</strong>
                </TableCell>
                
                <TableCell>
                <strong>Remaining Amount </strong>
                </TableCell>
                <TableCell>
                <strong>Action</strong>
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
                    {row.session}
                  </TableCell>
                  <TableCell>
                    {row.type}
                  </TableCell>

                  <TableCell>
                    {row.payable_amount}
                  </TableCell>
                  <TableCell>
                    {row.amount_paid}
                  </TableCell>
                  

                  <TableCell>
                    {row.remain_amount}
                  </TableCell>

                  

                  <Button onClick={() => handleEditModal(row)}>
                      Pay
                    </Button>
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
          textAlign: 'center',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          bgcolor: 'background.paper',
          borderRadius: 1,
          boxShadow: 24,
          p: 4,
        }}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
           <strong>Pay Fee </strong>
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          for June 2023 - semester fee
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Payble amount <Box sx={{color: 'success.main'}}>Rs. 4000</Box>
          </Typography>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={2} className='my-5' >
                <TextField label="Enter amount"  type='number' {...register("name", { required: "Name is required" })} error={!!errors.name} helperText={errors.name?.message} />
                
                {/* <TextField label="manager" type='text' {...register("manager", { required: "manager is required" })} error={!!errors.name}/> */}
              </Stack>
              <div>
                <Button variant='outlined' color='success' className='me-5' onClick={() => handleCloseModal()}>
                  Cancel
                </Button>
                <Button  variant='outlined' color='success' type='submit'>
                  Pay
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




