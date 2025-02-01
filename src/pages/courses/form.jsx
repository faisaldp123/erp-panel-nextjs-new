import React, { useEffect, useState } from 'react';
import styles from '../../styles/students/students.module.css';
import { useFieldArray } from 'react-hook-form';
import {
  TextField,
  Grid,
  MenuItem,
  Button,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { addCourse, getCourseById, updateCourse } from '@/helper/api/courses';
import { useRouter } from 'next/router';
import { useNotification } from '@/hooks/useNotification';


const Form = () => {

  const router = useRouter();
  const { displayNotification } = useNotification()
  const { id } = router.query;
  

  const [loading, setLoading] = useState(false);
  const [initialValuesLoading, setInitialValuesLoading] = useState(false);

  const form = useForm({
    reValidateMode: 'onChange',
    defaultValues: {
      course_name: "",
      duration: "",

      sessions: [{ session: "", fee: "", fee_type: "" }]
    },
  });

  const { register, handleSubmit, formState, control, getValues, reset } = form;
  const { errors } = formState;
  const { fields, append, remove } = useFieldArray({
    name: "sessions",
    control
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true)
      if (id) {
        let response = await updateCourse(id, data);
      }
      else {
        let response = await addCourse(data);
      }
      displayNotification({ message: `Course ${id ? "Updated" : "Added"}`, type: "success" })
      router.push("/courses");


    } catch (error) {
      displayNotification({ message: `Unable to ${id ? "Update" : "Add"} Course`, type: "error" })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (id) {
      setInitialValuesLoading(true)
      getCourseById(id).then(res => {
        if (res[0]) {
          reset(
            { course_name: res[0].course_name, duration: res[0].duration, sessions: res[0].sessions },
          )
        };
      }).catch(() => displayNotification({ message: "Unable to get course information", type: "error" })).finally(() => setInitialValuesLoading(false))
    }
  }, [id])




  return (
    <>
      <div className="container">
        <div style={{ maxWidth: "50rem", margin: "auto" }}>
          <div style={{ textAlign: "center" }}>
            <h2 className="text-3xl mb-5"><strong>COURSE FORM</strong></h2>
          </div>
          {
            // (id ? id && !initialValuesLoading : true) this code is added because mui not setting the default value for select
            (id ? id && !initialValuesLoading : true) && <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Course name"
                  type='text'
                  {...register("course_name", { required: "Course name is required" })}
                  error={!!errors.course_name}
                  helperText={errors.course_name?.message}
                /></Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  defaultValue={getValues().duration}
                  select
                  fullWidth
                  error={!!errors.duration} helperText={errors.duration?.message}
                  labelId="duration"
                  label="Duration" {...register("duration", { required: "duration is required" })}
                >

                  <MenuItem value={6}>6 months</MenuItem>
                  <MenuItem value={12}>1 year</MenuItem>
                  <MenuItem value={18}>1.6 year</MenuItem>
                  <MenuItem value={24}>2 year</MenuItem>
                  <MenuItem value={30}>2.6 year</MenuItem>
                  <MenuItem value={36}>3 year</MenuItem>
                  <MenuItem value={42}>3.6 year</MenuItem>
                  <MenuItem value={48}>4 year</MenuItem>
                  <MenuItem value={54}>4.6 year</MenuItem>
                  <MenuItem value={60}>5 year</MenuItem>
                </TextField>
              </Grid>
              {fields.map((val, i) => (

                <>
                  <Grid item md={3}>
                    <TextField
                      fullWidth
                      className="me-2 mb-2"
                      placeholder="Session"
                  
                      error={!!errors.sessions?.[i]?.session}
                      helperText={errors.sessions?.[i]?.session?.message}
                      {...register(`sessions.${i}.session`, { required: "Session is required" })}
                    />
                  </Grid>
                  <Grid item md={3}>


                    <TextField
                      fullWidth
                      className="me-2 mb-2"
                      placeholder="Fee"
                      error={!!errors.sessions?.[i]?.fee}
                      helperText={errors.sessions?.[i]?.fee?.message}
                      {...register(`sessions.${i}.fee`, { required: "Fee is required" })}
                    />
                  </Grid>

                  <Grid item md={3}>
                    <TextField
                      defaultValue={getValues().sessions[i].fee_type}
                      select
                      fullWidth
                      error={!!errors.sessions?.[i]?.fee_type}
                      helperText={errors.sessions?.[i]?.fee_type?.message}
                      labelId="fee_type"
                      label="Fee Type" {...register(`sessions.${i}.fee_type`, { required: "Please select fee type" })}
                    >
                      {/* <MenuItem value={1}>Manager 1</MenuItem> */}
                      <MenuItem value={"course"}>Course fee</MenuItem>
                      <MenuItem value={"exam"}>Exam fee</MenuItem>
                      <MenuItem value={"registration"}>Registration fee</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item md={3}>
                    <button className={`${styles.delete_btn} ms-3`} onClick={() => remove(i)} type="button">
                      Delete
                    </button>
                  </Grid>
                </>
              ))}
              <Grid item md={2}>
                <button className={`${styles.add_btn} me-3 mb-2`} onClick={() => append({ session: "", fee: "" })} type="button">
                  Add
                </button>
              </Grid>
              
            </Grid>

            <div>
              <Button type="submit" variant='outlined' sx={{ marginTop: "1rem" }} disabled={loading}>
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
