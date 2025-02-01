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
  const faculties = [
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
    <>
      <div className=" align-middle  mb-5">
        {/* <h2 className='text-3xl'>Students Profile ({faculties.length})</h2> */}
       
        <h2 className='text-3xl mb-4'>Students Profile</h2>
        <div>
        <h3><strong>Welcome To Admission Panel</strong></h3>
        <p>
        Following are the details given by you at the time of admission . Kindly check & confirm.In case of any change in contact no. or address,
        <br />you can click on <strong>Update Your Profile</strong> and request for updation.
        </p>
        </div>
      
        
      </div>

      <Grid container spacing={2}>
  <Grid item xs={12} md={8}>
      <Card>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px', marginTop:'10px', marginRight:'10px' }}>
    <Button className='bg-ocean' variant="contained" color="primary" onClick={() => alert('Update Profile clicked')}>
      Update Your Profile
    </Button>
  </div>
        <TableContainer>
        <Table>
  <TableBody>
    {faculties.map((row, index) => (
      <React.Fragment key={index}>
        <TableRow>
          <TableCell>Date of Birth</TableCell>
          <TableCell>{row.dob}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Blood Group</TableCell>
          <TableCell>{row.blood_group}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Gender</TableCell>
          <TableCell>{row.gender}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Aadhar Number</TableCell>
          <TableCell>{row.aadhar_no}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Marital Status</TableCell>
          <TableCell>{row.marital_status}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Caste Category</TableCell>
          <TableCell>{row.caste_category}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Father`s Name / Husband Name</TableCell>
          <TableCell>{row.fathers_name}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Mother`s Name</TableCell>
          <TableCell>{row.mother_name}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Address</TableCell>
          <TableCell>{row.address}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>City</TableCell>
          <TableCell>{row.city}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>State</TableCell>
          <TableCell>{row.state}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Post Code</TableCell>
          <TableCell>{row.pincode}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Country</TableCell>
          <TableCell>{row.country}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Mobile Number</TableCell>
          <TableCell>{row.mobile_no}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Email ID</TableCell>
          <TableCell>{row.email_id}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>STD Code</TableCell>
          <TableCell>{row.std_code}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Landline</TableCell>
          <TableCell>{row.landline}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Occupation</TableCell>
          <TableCell>{row.occupation}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Designation</TableCell>
          <TableCell>{row.designation}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Office Address</TableCell>
          <TableCell>{row.office_address}</TableCell>
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
      </Grid>
      <Grid item xs={12} md={4}>
      <Card style={{ width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
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
              <TableCell>Name</TableCell>
              <TableCell>{row.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Enrollment No.</TableCell>
              <TableCell>{row.enrollment}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Course</TableCell>
              <TableCell>{row.course}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Batch</TableCell>
              <TableCell>{row.batch}</TableCell>
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




