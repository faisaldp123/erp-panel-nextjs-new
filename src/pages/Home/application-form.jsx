import React, { useState } from "react";
import styles from '../../styles/application-form/application.module.css';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Grid,
  TextField,
  Typography,
  Box,
  MenuItem,
} from "@mui/material";
import { Controller, useFieldArray } from "react-hook-form";
import { useForm } from 'react-hook-form';

const steps = ["Personal Info", "Address", "Academic Details", "More Qualification", "Course Details"];

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    fatherName: "",
    motherName: "",
    aadhar: "",
  });

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

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Application No."
                name="applicationno"
                value={formData.fatherName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Admission Session"
                name="admissionsession"
                value={formData.motherName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Application Type."
                name="applicationtype"
                value={formData.fatherName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Year"
                name="year"
                value={formData.motherName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Full Name"
                name="fullname"
                value={formData.motherName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Email Id"
                name="emailid"
                value={formData.motherName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Contact Number"
                name="contactnumber"
                value={formData.motherName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Father's Name"
                name="fathersname"
                value={formData.motherName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Mother's Name"
                name="mothersname"
                value={formData.motherName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Date of Birth"
                name="dateofbirth"
                value={formData.motherName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Gender"
                name="gender"
                value={formData.motherName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Aadhar No."
                name="aadharno"
                value={formData.motherName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography className="text-grey mb-2">Upload Your Photograph</Typography>
              <Button
                            variant="contained"
                            sx={{ backgroundColor: "#6C27F7", color: "#fff", width: "15%", marginRight:'10px' }}
                            onClick={() => documentInputRef.current.click()}
                          >
                            Upload
                          </Button>
                          <Button
                            variant="text"
                            sx={{ width: "5%" }}
                            onClick={() => documentInputRef.current.click()}
                          >
                            View
                          </Button>
            </Grid>
            <Grid item xs={12} md={6}>
            <Typography className="text-grey mb-2">Upload Your Aadhar Photo</Typography>
              <Button
                            variant="contained"
                            sx={{ backgroundColor: "#6C27F7", color: "#fff", width: "15%", marginRight:'10px' }}
                            onClick={() => documentInputRef.current.click()}
                          >
                            Upload
                          </Button> 
                          <Button
                            variant="text"
                            sx={{ width: "5%" }}
                            onClick={() => documentInputRef.current.click()}
                          >
                            View
                          </Button> 
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Address"
                name="address"
                value={formData.fatherName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="State"
                name="state"
                value={formData.motherName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="City / Town"
                name="citytown"
                value={formData.fatherName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Pin Code"
                name="pincode"
                value={formData.motherName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Area"
                name="area"
                value={formData.motherName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Nationality"
                name="nationality"
                value={formData.motherName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Category"
                name="category"
                value={formData.motherName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Empleyment Status"
                name="employementstatus"
                value={formData.motherName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
  {/* Left side with Typography */}
  <Typography sx={{ marginBottom: "5px" }}>Details of Educational Qualifications - 10th Academic Details</Typography>
  <TextField
  label="Board"
    name="board"
    value={formData.applicationno}
    onChange={handleChange}
    fullWidth
    required
  />
</Grid>

<Grid item xs={12} md={6}>
  {/* Right side without Typography but with paddingTop to align */}
  <TextField
  label="Subjects"
    name="subjects"
    value={formData.admissionsession}
    onChange={handleChange}
    fullWidth
    required
    sx={{ marginTop: "27px" }} // Adjust as needed
  />
</Grid>
<Grid item xs={12} md={6}>
              <TextField
                label="Year of Passing"
                name="yearofpassing"
                value={formData.motherName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Division / Grade"
                name="division/grade"
                value={formData.motherName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12}>
                <Typography className="text-grey mb-2">Upload Your 10th Certificate</Typography>
              <Button
                            variant="contained"
                            sx={{ backgroundColor: "#6C27F7", color: "#fff", width: "15%", marginRight:'10px' }}
                            onClick={() => documentInputRef.current.click()}
                          >
                            Upload
                          </Button>
                          <Button
                            variant="text"
                            sx={{ width: "5%" }}
                            onClick={() => documentInputRef.current.click()}
                          >
                            View
                          </Button>
            </Grid>



            <Grid item xs={12} md={6}>
  {/* Left side with Typography */}
  <Typography sx={{ marginBottom: "5px" }}>Details of Educational Qualifications - 12th Academic Details</Typography>
  <TextField
  label="Board"
    name="board"
    value={formData.applicationno}
    onChange={handleChange}
    fullWidth
    required
  />
</Grid>

<Grid item xs={12} md={6}>
  {/* Right side without Typography but with paddingTop to align */}
  <TextField
  label="Subjects"
    name="subjects"
    value={formData.admissionsession}
    onChange={handleChange}
    fullWidth
    required
    sx={{ marginTop: "27px" }} // Adjust as needed
  />
</Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Year of Passing"
                name="yearofpassing"
                value={formData.motherName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Division / Grade"
                name="division/grade"
                value={formData.motherName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12}>
                <Typography className="text-grey mb-2">Upload Your 12th Certificate</Typography>
              <Button
                            variant="contained"
                            sx={{ backgroundColor: "#6C27F7", color: "#fff", width: "15%", marginRight:'10px' }}
                            onClick={() => documentInputRef.current.click()}
                          >
                            Upload
                          </Button>
                          <Button
                            variant="text"
                            sx={{ width: "5%" }}
                            onClick={() => documentInputRef.current.click()}
                          >
                            View
                          </Button>
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
        );
      case 3:
        return (
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
  {/* Left side with Typography */}
  <Typography sx={{ marginBottom: "5px" }}>More Qualification - Graduation</Typography>
  <TextField
  label="University"
    name="university"
    value={formData.applicationno}
    onChange={handleChange}
    fullWidth
    required
  />
</Grid>

<Grid item xs={12} md={6}>
  {/* Right side without Typography but with paddingTop to align */}
  <TextField
  label="Course"
    name="course"
    value={formData.admissionsession}
    onChange={handleChange}
    fullWidth
    required
    sx={{ marginTop: "27px" }} // Adjust as needed
  />
</Grid>
<Grid item xs={12} md={6}>
              <TextField
                label="Year of Passing"
                name="yearofpassing"
                value={formData.motherName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Division / Grade"
                name="division/grade"
                value={formData.motherName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12}>
                <Typography className="text-grey mb-2">Upload Your Graduation Certificate</Typography>
              <Button
                            variant="contained"
                            sx={{ backgroundColor: "#6C27F7", color: "#fff", width: "15%", marginRight:'10px' }}
                            onClick={() => documentInputRef.current.click()}
                          >
                            Upload
                          </Button>
                          <Button
                            variant="text"
                            sx={{ width: "5%" }}
                            onClick={() => documentInputRef.current.click()}
                          >
                            View
                          </Button>
            </Grid>



            <Grid item xs={12} md={6}>
  {/* Left side with Typography */}
  <Typography sx={{ marginBottom: "5px" }}>More Qualification - Post Graduation</Typography>
  <TextField
  label="University"
    name="university"
    value={formData.applicationno}
    onChange={handleChange}
    fullWidth
    required
  />
</Grid>

<Grid item xs={12} md={6}>
  {/* Right side without Typography but with paddingTop to align */}
  <TextField
  label="Course"
    name="course"
    value={formData.admissionsession}
    onChange={handleChange}
    fullWidth
    required
    sx={{ marginTop: "27px" }} // Adjust as needed
  />
</Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Year of Passing"
                name="yearofpassing"
                value={formData.motherName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Division / Grade"
                name="division/grade"
                value={formData.motherName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12}>
                <Typography className="text-grey mb-2">Upload Your Post Graduation Certificate</Typography>
              <Button
                            variant="contained"
                            sx={{ backgroundColor: "#6C27F7", color: "#fff", width: "15%", marginRight:'10px' }}
                            onClick={() => documentInputRef.current.click()}
                          >
                            Upload
                          </Button>
            </Grid>

            <Grid item xs={12} md={6}>
  {/* Left side with Typography */}
  <Typography sx={{ marginBottom: "5px" }}>More Qualification - Other Qualification</Typography>
  <TextField
  label="University"
    name="university"
    value={formData.applicationno}
    onChange={handleChange}
    fullWidth
    required
  />
</Grid>

<Grid item xs={12} md={6}>
  {/* Right side without Typography but with paddingTop to align */}
  <TextField
  label="Course"
    name="course"
    value={formData.admissionsession}
    onChange={handleChange}
    fullWidth
    required
    sx={{ marginTop: "27px" }} // Adjust as needed
  />
</Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Year of Passing"
                name="yearofpassing"
                value={formData.motherName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Division / Grade"
                name="division/grade"
                value={formData.motherName}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12}>
                <Typography className="text-grey mb-2">Upload Your Other Qualification Certificate</Typography>
              <Button
                            variant="contained"
                            sx={{ backgroundColor: "#6C27F7", color: "#fff", width: "15%", marginRight:'10px' }}
                            onClick={() => documentInputRef.current.click()}
                          >
                            Upload
                          </Button>
            </Grid>
            

          </Grid>
        );
      case 4:
        return (
            <Grid container spacing={2}>
            {/* First Fee Type Select */}
            <Grid item xs={12}>
              <Controller
                name="feeType1"
                control={control}
                rules={{ required: "Please select fee type" }}
                render={({ field, fieldState }) => (
                  <TextField
                    select
                    fullWidth
                    label="Program"
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    {...field}
                  >
                    <MenuItem value="course">Course fee</MenuItem>
                    <MenuItem value="exam">Exam fee</MenuItem>
                    <MenuItem value="registration">Registration fee</MenuItem>
                  </TextField>
                )}
              />
            </Grid>
      
            {/* Second Fee Type Select */}
            <Grid item xs={12}>
              <Controller
                name="feeType2"
                control={control}
                rules={{ required: "Please select fee type" }}
                render={({ field, fieldState }) => (
                  <TextField
                    select
                    fullWidth
                    label="Course"
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    {...field}
                  >
                    <MenuItem value="course">Course fee</MenuItem>
                    <MenuItem value="exam">Exam fee</MenuItem>
                    <MenuItem value="registration">Registration fee</MenuItem>
                  </TextField>
                )}
              />
            </Grid>
      
            {/* Third Fee Type Select */}
            <Grid item xs={12}>
              <Controller
                name="feeType3"
                control={control}
                rules={{ required: "Please select fee type" }}
                render={({ field, fieldState }) => (
                  <TextField
                    select
                    fullWidth
                    label="Branches"
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    {...field}
                  >
                    <MenuItem value="course">Course fee</MenuItem>
                    <MenuItem value="exam">Exam fee</MenuItem>
                    <MenuItem value="registration">Registration fee</MenuItem>
                  </TextField>
                )}
              />
            </Grid>
          </Grid>
        );
      default:
        return <Typography variant="h6">Unknown Step</Typography>;
    }
  };

  return (
    <div>
        <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: '20px' }}>Application Form</Typography>
        <Box sx={{margin: "auto", padding: 3, border: '1px solid', borderRadius: '10px' }}>
        <div className="mb-5">
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>Himanshu Singh : Admission</Typography>
        <Typography className="text-grey" variant="p">Himanshu Singh : Admission</Typography>
        </div>
      {/* Stepper */}
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Form Content */}
      <Box sx={{ mt: 4 }}>{renderStepContent(activeStep)}</Box>

      {/* Navigation Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ backgroundColor: "#F44336", color: "#fff" }}
        >
          Back
        </Button>
        {activeStep === steps.length - 1 ? (
          <Button variant="contained" sx={{ backgroundColor: "#6C27F7", color: "#fff" }}>
            Submit
          </Button>
        ) : (
          <Button variant="contained" onClick={handleNext} sx={{ backgroundColor: "#6C27F7", color: "#fff" }}>
            Next
          </Button>
        )}
      </Box>
    </Box>
    </div>
  );
};

export default MultiStepForm;
