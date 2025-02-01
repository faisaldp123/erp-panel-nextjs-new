import { useState } from 'react';
import React from 'react';
import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Stack, TextField, Typography } from '@mui/material';
import { loginUser } from "@/helper/api/login";

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useFieldArray } from 'react-hook-form';
import Cookies from "js-cookie";
import { useRouter } from 'next/router';
import { useNotification } from '@/hooks/useNotification';

const login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {displayNotification} = useNotification()
  const form = useForm({
    reValidateMode: 'onChange',
    defaultValues: {
      email: "",
      password: ""
    },
  });

  const { register, handleSubmit, formState, control, getValues } = form;
  const { errors } = formState;
 


    const onSubmit = async (data)=>{
      setLoading(true);
      try {
        let response = await loginUser(data);
        // console.log(response.role)
        if (response.token) {
          Cookies.set("access_token", response.token);
          Cookies.set("role", response.role);
          router.push("/")
        }
        
      } catch (error) {
        
        displayNotification({type: 'error',message: 'Invalid Credentials'})
      } finally {
        setLoading(false)
      }
       
  }
  


  return (
    <>
    <Container component="main" maxWidth="xs">
           <CssBaseline />
           <div>
             <Grid align='center'>
             <Avatar>
               {/* <LockOutlinedIcon /> */}
             </Avatar>
             <Typography component="h1" variant="h5">
               Login
             </Typography>
             </Grid>
             
             <form onSubmit={handleSubmit(onSubmit)} noValidate>
             <Stack spacing={2} className='my-5'>
             <TextField
              fullWidth
                label="Email"
                type='text'
                {...register("email", { required: "Email is required" })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
              <TextField
              fullWidth
                label="Password"
                type='password'
                {...register("password", { required: "Password is required" })}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
           </Stack>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="success"
                
              >
                {loading ? "Signing In..." : "Sign In"}
              </Button>
         
            </form>
          </div>
         
        </Container>
        </>
  )
}

export default login