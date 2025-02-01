import { useState, useEffect, useMemo } from 'react';
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
  IconButton,
} from '@mui/material';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { getStudentInfo } from '@/helper/api/students';
import { useRouter } from 'next/router';
import { payFee } from '@/helper/api/fee';
import { useNotification } from '@/hooks/useNotification';
import { convertDateToSqlDate, getPaidAmount, getRemainingAmount } from '@/utils/fee';
import Transactions from '@/components/student/Transactions';
import { DatePicker } from '@mui/x-date-pickers';



const Students = () => {
  const [modal, setModal] = useState(false);

  const router = useRouter();
  const {displayNotification} = useNotification()
  const { id } = router.query;
  const [isDueDateVisisble, setIsDueDateVisible] = useState(false);
  const [studentInfo, setStudentInfo] = useState({});
  const [loading, setLoading] = useState(false)
  const [selectedSession, setSelectedSession] = useState(null);
  const remaining_amount = useMemo(() => getRemainingAmount(selectedSession?.payments, selectedSession?.fee), [selectedSession]);

  const [formData, setFormData] = useState({
    amount: 0,
    due_date: null
  })
  

  useEffect(() =>{
   getData()
  
},[id]);


function getData() {
  if(id){
    getStudentInfo(id).then(res => {
        setStudentInfo(res[0])
       
        }).catch(err => displayNotification({message: "Unable To Fetch Student Info", type: "error"}))
}
}

  const handleCloseModal = () => {
    setModal(false); 
    setSelectedSession(null);
    clearForm()
  }


  async function onSubmit(event) {
    event.preventDefault();
    console.log(formData)
    if (remaining_amount >= formData.amount) {
      setLoading(true);
       try {
      await payFee({amount: formData.amount, student_id: id, session_id: selectedSession.session_id});
      handleCloseModal();
      getData();
      displayNotification({type: 'success',message: 'Payment Success'});
    } catch (error) {
      displayNotification({type: "error", message: "Unable to submit fee"});
    } finally{
      setLoading(false)
    }
      
    }else{
      displayNotification({type: 'error',message: 'The payment exceeds the remaining amount'})
    }
   
  }

  function clearForm() {
    // reset({
    //   amount: 0
    // })
  }

  const handleEditModal = (manager) => {
    setModal(true);
    setSelectedSession(manager);

    // set({amount: getRemainingAmount(manager.payments, manager.fee)})
  }

  function handleAmountChange(event) {
    setFormData((prev) => {
      return {
        amount: event.target.value,
        due_date: null
      }
    });
  }

  function handleDueDateChange(event) {
    setFormData((prev) => {
      return {
        amount: prev.amount,
        due_date: event
      }
    })
  }


  
  return (
    <>
      <div className="flex justify-between align-middle  mb-5">
        <h2 className='text-3xl'>Student Info</h2>
        {/* <Button variant='outlined' color='success'  >
          <Link href='/students/form'>Add +</Link>
        </Button> */}
      </div>

      <Grid container sx={{marginBottom:'1.5rem'}} spacing={2}>
  <Grid item xs={4}>
    <h3><strong>Student Info :</strong></h3>
    <p><span><strong>Name</strong> : {studentInfo.name}</span><br /><span><strong>Father name</strong> : {studentInfo.father_name}</span><br /><span><strong>Email Address</strong> : {studentInfo.email}</span><br /><span><strong>Phone No.</strong> : {studentInfo.phone}</span></p>
    
    
  </Grid>
  <Grid item xs={4}>
    <h3><strong>Course Info :</strong></h3>
    <p><span><strong>Course</strong> : {studentInfo.course_name}</span><br /><span></span></p>
  </Grid>
  {/* <Grid item xs={4}>
    <h6><strong>Payment :</strong></h6>
    <p>Due data mm/dd/yyyy <br />$0.00</p>
  </Grid> */}
</Grid>

      <Card>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
              <TableCell>
            
                </TableCell>
              <TableCell>
             <strong> Sessions</strong>
                </TableCell>
                <TableCell>
                <strong>Fee type</strong>
                </TableCell>
                <TableCell>
               
                <strong>Payble Fee</strong>
                </TableCell>
                <TableCell>
                <strong>Amount Paid</strong>
                </TableCell>
                <TableCell>
                <strong>Remaining Amount</strong>
                </TableCell>
                <TableCell>
                <strong>Action</strong>
                </TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {studentInfo.sessions?.map((row, index) => (
                <Transactions row={row} handleEditModal={handleEditModal}/>

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
          for {selectedSession?.session} - {selectedSession?.fee_type}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Payble amount <Box sx={{color: 'success.main'}}>Rs. {remaining_amount}</Box>
          </Typography>
          <div>
            <form onSubmit={(onSubmit)}>
              <Stack spacing={2} className='my-5' >
                <TextField label="Enter amount" type='number' required onChange={handleAmountChange}  />
                <TextField label="Enter amount" type='date' required onChange={handleDueDateChange}  />
            {/* <DatePicker label="Due Date" sx={{width: "100%"}} onChange={handleDueDateChange} value={formData.due_date} renderInput={(params) => <TextField {...params} required={true} name='due_date' />}/> */}
                
              </Stack>
              <div>
                <Button variant='outlined' color='success' className='me-5' onClick={() => handleCloseModal()}>
                  Cancel
                </Button>
                <Button  variant='outlined' color='success' type='submit' disabled={loading}>
                  {loading ? "Wait..." : "Pay"}
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




