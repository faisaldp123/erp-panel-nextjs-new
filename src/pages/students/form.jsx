import React, { useEffect, useState } from 'react';
import styles from '../../styles/students/students.module.css';
import { useFieldArray } from 'react-hook-form';
import {
  TextField,
  Grid,
  MenuItem,
  Button
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { addStudent, getStudentById, updateStudent } from '@/helper/api/students';
import { useRouter } from 'next/router';
import { getCourse } from '@/helper/api/courses';
import { useNotification } from '@/hooks/useNotification';

const Form = () => {

  const router = useRouter();
  const {displayNotification} = useNotification();
  const [defaultValuesLoading, setDefaultValuesLoading] = useState(false);

    const { id } = router.query;
    const [courses, setCourses] = useState([]);

    const [loading, setLoading] = useState(false);

  const form = useForm({
    reValidateMode: 'onChange',
    defaultValues: {
      name: "",
      father: "",
      email: "",
      phone: "",
      course: '',
      status: "",
    },
  });

  const { register, handleSubmit, formState, control, getValues, reset } = form;
  const { errors } = formState;


  const onSubmit = async (data)=>{

    try {
      setLoading(true) 
    if (id){
      let response = await updateStudent(id, data);
    } 
      else {
        let response = await addStudent(data);
      }
      displayNotification({message: `studend ${id ? 'Updated' : 'Added'}`, type: "success"});
      router.push("/students");
     
    } catch (error) {
      displayNotification({message: `Unable To ${id ? 'Update' : 'Add'} student`, type: "error"})
    } finally {
      setLoading(false)
    }
}

useEffect(() =>{
  if(id){
    setDefaultValuesLoading(true);
      getStudentById(id).then(res => {
          if(res[0]){
              reset(
                  { name: res[0].name, email: res[0].email, father_name: res[0].father_name, phone: res[0].phone, status: res[0].status, user_id: res[0].user_id, course_id: res[0].course_id },
              )
          }
      }).catch(err => displayNotification({message: `Unable To get student info`, type: "error"})).finally(() => setDefaultValuesLoading(false))
  }
},[id])

useEffect(() =>{
     
      getCourse().then(res => {
        setCourses(res.result)
      }).catch(() => displayNotification({message: `Unable To get courses`, type: "error"}))
},[])


  return (
    <>
      <div className="container">
        <div style={{ maxWidth: "50rem", margin: "auto",}}>
        <div style={{textAlign: "center"}}>
        <h2 className="text-3xl mb-5"><strong>STUDENT FORM</strong></h2>
        </div>
{
  (id ? id && !defaultValuesLoading : true) && <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
              fullWidth
                label="Name"
                type='text'
                {...register("name", { required: "Name is required" })}
                error={!!errors.name}
                helperText={errors.name?.message}
              /></Grid>

<Grid item xs={12} md={6}>
              <TextField
              fullWidth
               label="Email"
               type='text'
               {...register("email", { required: "Email is required" })}
               error={!!errors.email}
               helperText={errors.email?.message}
               />
               </Grid>

<Grid item xs={12} md={6}>
              <TextField
              fullWidth
               label="Father's name"
               type='text'
               {...register("father_name", { required: "Father name is required" })}
               error={!!errors.father_name}
               helperText={errors.father_name?.message}
               />
               </Grid>

               

              <Grid item xs={12} md={6}>
              <TextField
              fullWidth
               label="Phone"
               type='number'
               {...register("phone", { required: "Phone number is required" })}
               error={!!errors.phone}
               helperText={errors.phone?.message}
               />
               </Grid> 

               <Grid item xs={12} md={6}>
              <TextField
                defaultValue={getValues().status}
                select
                fullWidth
                error={!!errors.status} helperText={errors.status?.message}
                labelId="status"
                label="Status" {...register("status", { required: "status is required" })}
              >
                {/* <MenuItem value={1}>Manager 1</MenuItem> */}
                <MenuItem value={1}>Active</MenuItem>
                <MenuItem value={2}>Inactive</MenuItem>
              </TextField>
              </Grid>

               <Grid item xs={12} md={6}>
              <TextField
                defaultValue={getValues().course_id}
                select
                fullWidth
                error={!!errors.course_id} helperText={errors.course_id?.message}
                labelId="course"
                label="Course" {...register("course_id", { required: "Course is required" })}
              >
                {courses.map((course, index) => (
                <MenuItem value={course.course_id}>{course.course_name}</MenuItem>
                ))}
              </TextField>
              </Grid>
                 
            </Grid>

            <div className='text-center'>
              <Button variant='outlined' sx={{marginTop: "1rem"}} type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </form>
}
        
        </div>
      </div>
    </>
  );
};

export default Form;
