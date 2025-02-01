import React, { useState, useEffect } from 'react';
import {
  Card,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Chip,
  Button,
  Modal,
  Box,
  Typography,
  Stack,
  TextField,
  MenuItem,
  Grid,
} from '@mui/material';

import Link from 'next/link';


import { useNotification } from '@/hooks/useNotification';
import { addFaculty, getAllFaculties } from '@/helper/api/faculties';
import { useForm } from 'react-hook-form';


const Profile = () => {
  const {displayNotification} = useNotification();
  
  const [isLoading, setIsLoading] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  // const [faculties, setFaculties] = useState([]);
  const [modal, setModal] = useState({
    open: false,
    isEditable: false,
    details: null
  })
  const form = useForm({
    reValidateMode: 'onChange',
    defaultValues: {
      name: "",
      email: null,
      phone: null,
      status: null
    },
  });
  const { register, handleSubmit, formState, reset, getValues } = form;
  const { errors } = formState;

  
  useEffect(() => {
    
    getData();
  }, []);

  const getData = async (page = 1, pageSize = 10) => {
    setIsLoading(true)
    try {

      const data = await getAllFaculties({page, pageSize});
      setFaculties(data.result)
     
    } catch (error) {
      displayNotification({message: "Unable To Get Faculties", type: "error"})

    } finally{
      setIsLoading(false);
    }
  };
  async function onSubmit(data) {
    setIsModalLoading(true)
    try {
      let response = await addFaculty(data);
      displayNotification({message: `Faculty ${modal.isEditable ? 'Updated' : 'Added'}`, type: "success"});
      handleCloseModal();
      getData();
    } catch (error) {
      displayNotification({message: `Unable to ${modal.isEditable ? 'Update' : 'Add'} Faculty`, type: "error"});
    } finally {
      setIsModalLoading(false)
    }
 
  }

  function clearForm() {
    reset({
      name: "",
      email: null,
      phone: null,
      status: null
    })
  }
  
  function handleOpenModal(details) {
    if (details) {
      setModal({
        open: true,
        isEditable: true,
        details
      });
    }else{
      setModal({
        open: true,
        isEditable: false,
        details: null
      });
    }
   
  }
  function handleCloseModal() {
    setModal({
      open: false,
      isEditable: false,
      details: null
    });
    clearForm()
  }
  const profile = [
    {
      name: "John Doe",
      enrollment: 110022,
      course: "Bachelor of Arts",
      batch: "BACHELOR OF ARTS JAN-JUNE SEM 2 2020",
      // student_id: 101,
    },
    
  ];
  const dash = [
    {
      enrollment_no: "04-07-1997",
      student_name: " Mr. JAI SINGH GURJAR",
      fathers_name:"HARDAN GURJAR",
      mother_name:"BHAGWATI DEVI",
      programme:"BACHELOR OF ARTS",
      session:"JAN-JUNE",
      year: 2020,
      gender: "Male",
      category:"OBC",
      mobile_no:	9829481845,
      email_id:"JAISINGHMALPURA97@GMAIL.COM",
      address: " Malpura, Jaipur, Rajasthan , Jaipur, Rajasthan, 303108,",
    },
    
    
  ];

  return (
    <>
      <div style={{border: '1px solid grey', borderRadius: '5px',  }}>
      <div className=" align-middle  mb-5 pt-5">
        {/* <h2 className='text-3xl'>Students Profile ({faculties.length})</h2> */}
       
        {/* <h2 className='text-3xl'>Students Profile</h2> */}
        <div className='text-center'>
        <h3 style={{marginBottom: '10px', fontSize: '24px'}}><strong>Identity Card</strong></h3>
        <div style={{width: 'fit-content', border: '1px solid grey', margin: 'auto', padding: '10px 15px', borderRadius: '5px'}}>
        <img 
      src="/no-profile-picture-icon.webp" 
      alt="Profile" 
      style={{ width: '120px', height: '120px', borderRadius: '50%', margin: 'auto', border: '7px solid grey' }} 
    />
        </div>
        <p className='bg-brand-light-blue' style={{borderRadius: '3px', width: 'fit-content', margin: 'auto', backgroundColor: '#8cbde9;', padding: '8px 24px', marginTop: '10px'}}>
        <strong>Institute Of Distance Education
        Kalinga University</strong>
        </p>
        </div>
      
        
      </div>

      <Grid container style={{width: '75%', border: '1px solid grey', borderRadius:'3px', margin:'auto', marginBottom: '25px'}}>
        <Grid item xs={12} md={8}>
            <Card>
              <TableContainer>
              <Table>
        <TableBody>
          {dash.map((row, index) => (
            <React.Fragment key={index}>
              <TableRow>
                <TableCell style={{borderRight: '1px solid grey', borderBottom: '1px solid grey', padding: '4px', width: '35%', fontWeight:'bold'}}>Enrollment No.</TableCell>
                <TableCell style={{borderRight: '1px solid grey', borderBottom: '1px solid grey', padding: '4px'}}>{row.enrollment_no}</TableCell>
              </TableRow>
              <TableRow >
                <TableCell style={{borderRight: '1px solid grey', borderBottom: '1px solid grey', padding: '4px', width: '35%', fontWeight:'bold'}}>Student Name</TableCell>
                <TableCell style={{borderRight: '1px solid grey', borderBottom: '1px solid grey', padding: '4px'}}>{row.student_name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{borderRight: '1px solid grey', borderBottom: '1px solid grey', padding: '4px', width: '35%', fontWeight:'bold'}}>Father's Name</TableCell>
                <TableCell style={{borderRight: '1px solid grey', borderBottom: '1px solid grey', padding: '4px'}}>{row.fathers_name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{borderRight: '1px solid grey', borderBottom: '1px solid grey', padding: '4px', width: '35%', fontWeight:'bold'}}>Mother's Name</TableCell>
                <TableCell style={{borderRight: '1px solid grey', borderBottom: '1px solid grey', padding: '4px'}}>{row.mother_name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{borderRight: '1px solid grey', borderBottom: '1px solid grey', padding: '4px', width: '35%', fontWeight:'bold'}}>Programme</TableCell>
                <TableCell style={{borderRight: '1px solid grey', borderBottom: '1px solid grey', padding: '4px'}}>{row.programme}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{borderRight: '1px solid grey', borderBottom: '1px solid grey', padding: '4px', width: '35%', fontWeight:'bold'}}>Session</TableCell>
                <TableCell style={{borderRight: '1px solid grey', borderBottom: '1px solid grey', padding: '4px'}}>{row.session}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{borderRight: '1px solid grey', borderBottom: '1px solid grey', padding: '4px', width: '35%', fontWeight:'bold'}}>Year</TableCell>
                <TableCell style={{borderRight: '1px solid grey', borderBottom: '1px solid grey', padding: '4px'}}>{row.year}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{borderRight: '1px solid grey', borderBottom: '1px solid grey', padding: '4px', width: '35%', fontWeight:'bold'}}>Gender</TableCell>
                <TableCell style={{borderRight: '1px solid grey', borderBottom: '1px solid grey', padding: '4px'}}>{row.gender}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{borderRight: '1px solid grey', borderBottom: '1px solid grey', padding: '4px', width: '35%', fontWeight:'bold'}}>Category</TableCell>
                <TableCell style={{borderRight: '1px solid grey', borderBottom: '1px solid grey', padding: '4px'}}>{row.category}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{borderRight: '1px solid grey', borderBottom: '1px solid grey', padding: '4px', width: '35%', fontWeight:'bold'}}>Mobile No.</TableCell>
                <TableCell style={{borderRight: '1px solid grey', borderBottom: '1px solid grey', padding: '4px'}}>{row.mobile_no}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{borderRight: '1px solid grey', borderBottom: '1px solid grey', padding: '4px', width: '35%', fontWeight:'bold'}}>Email ID</TableCell>
                <TableCell style={{borderRight: '1px solid grey', borderBottom: '1px solid grey', padding: '4px'}}>{row.email_id}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{borderRight: '1px solid grey', borderBottom: '1px solid grey', padding: '4px', width: '35%', fontWeight:'bold'}}>Address</TableCell>
                <TableCell style={{borderRight: '1px solid grey', borderBottom: '1px solid grey', padding: '4px'}}>{row.address}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{borderRight: '1px solid grey', borderBottom: '1px solid grey', padding: '4px', width: '35%', textAlign: 'center', fontWeight:'bold'}}>Register</TableCell>
                <TableCell style={{borderRight: '1px solid grey', borderBottom: '1px solid grey', padding: '4px', textAlign: 'center', fontWeight:'bold'}}>Office In Charge(Admission)</TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
      
              </TableContainer>
            </Card>
            </Grid>
            <Grid item xs={12} md={4}>
            <Card style={{ width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '203px', marginTop: '23px' }}>
          <img 
            src="/no-profile-picture-icon.webp" 
            alt="Profile" 
            style={{ width: '120px', height: '120px', borderRadius: '50%' }} 
          />
        </div>
        <TableContainer>
          <Table>
            <TableBody>
              {profile.map((row, index) => (
                <React.Fragment key={index}>
                  <TableRow>
                    <TableCell style={{borderTop: '1px solid grey', borderBottom: '1px solid grey', padding: '4px', textAlign: 'center', fontWeight: 'bold'}}>(Student's Sign)</TableCell>
                  </TableRow>
                  {/* <TableRow>
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
                  </TableRow>
                  <TableRow>
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
      
            </Grid>
            </Grid>

            
      </div>
      <div className='text-center mt-3 pb-5'>
                <button className='bg-brand text-white py-1 px-3 rounded'>Print Identity Card</button>
            </div>

      <Modal
        open={modal.open}
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
            {modal.isEditable ? "Edit" : "Add"} Faculty
          </Typography>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={2} className='my-5'>
                <TextField label="Name" type='text' {...register("name", { required: "Name is required" })} error={!!errors.name} helperText={errors.name?.message} />
                <TextField label="Email" type='email' {...register("email", { required: "Email is required" })} error={!!errors.email} helperText={errors.email?.message} />
                <TextField label="Phone" type='number' {...register("phone", { required: "Phone is required" })} error={!!errors.phone} helperText={errors.phone?.message} />
                
                
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
                <Button variant='outlined' color='success' type='submit' disabled={isModalLoading}>
                  {isModalLoading ? "Saving..." : "Save"}
                </Button>
              </div>
            </form>

          </div>
        </Box>
      </Modal>
    </>
  )
}

export default Profile;




