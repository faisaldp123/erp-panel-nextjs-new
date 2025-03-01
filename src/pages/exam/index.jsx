import Layout from "../../components/ExamLayout"
import { Box, Grid, Typography, Button, Card, CardContent } from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Descrition from "@mui/icons-material/Description";
import EditNote from "@mui/icons-material/EditNote";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import CancelIcon from "@mui/icons-material/Cancel";
import CalendarViewDayRounded from "@mui/icons-material/CalendarToday";

const Home = () => {
    return (
      <Layout>
        <h1 className="text-3xl ms-5 font-bold text-purple-700">Examination || Home</h1>
        <div className="flex h-screen">

    <Box sx={{ p: 3, width: '100%' }}>

      
      <Box sx={{boxShadow: 1, borderRadius: 3, padding: 3, borderTop: "4px solid #003e96"}}>
        {/* Support Home Section */}
      <Card sx={{ p: 2, mb: 3, borderRadius: 3, boxShadow: 1 }}>
        <Typography variant="h6" fontWeight="bold">
          Exam - Home
        </Typography>
      </Card>

      {/* Admission Ticket Report Section */}
      <Box sx={{ mb: 4 }}>
        

        <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            📄 Exam Report
          </Typography>
          <Button href="/exam/exam-timetable/list" variant="contained" size="small" sx={{ backgroundColor: "#8A2BE2" }}>
            View All
          </Button>
        </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <EditNote sx={{ fontSize: 40, color: "#2196F3" }} />
                <Typography variant="body2">Total Exam</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <Descrition sx={{ fontSize: 40, color: "#4CAF50" }} />
                <Typography variant="body2">Upcoming Exam</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                {/* <HourglassEmptyIcon sx={{ fontSize: 40, color: "#FFC107" }} /> */}
                <CancelIcon sx={{ fontSize: 40, color: "#F44336" }} />
                <Typography variant="body2">Cancelled Exam</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <CalendarViewDayRounded sx={{ fontSize: 40, color: "#FFC107" }} />
                <Typography variant="body2">IA-AW Status</Typography>
                <Typography variant="h6">Enabled</Typography>
              </Card>
            </Grid>
          </Grid>
        </Card>
      </Box>

      {/* Re-Registration Ticket Report Section */}
      <Box sx={{ mb: 4 }}>
        

        <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            📄 Mark Back Exams
          </Typography>
          <Button href="/exam/mark-back-exam/list" variant="contained" size="small" sx={{ backgroundColor: "#8A2BE2" }}>
            View All
          </Button>
        </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <EditNote sx={{ fontSize: 40, color: "#2196F3" }} />
                <Typography variant="body2">Total Exam</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <Descrition sx={{ fontSize: 40, color: "#4CAF50" }} />
                <Typography variant="body2">Upcoming Exam</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                {/* <HourglassEmptyIcon sx={{ fontSize: 40, color: "#FFC107" }} /> */}
                <CancelIcon sx={{ fontSize: 40, color: "#F44336" }} />
                <Typography variant="body2">Cancelled Exam</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <CalendarViewDayRounded sx={{ fontSize: 40, color: "#FFC107" }} />
                <Typography variant="body2">IA-AW Status</Typography>
                <Typography variant="h6">Enabled</Typography>
              </Card>
            </Grid>
          </Grid>
        </Card>
      </Box>

      {/* Re-Registration Ticket Report Section */}
      <Box sx={{ mb: 4 }}>
        

        <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            📄 Exam Appeared Students
          </Typography>
          <Button href="/exam/exam-appeared-students/list" variant="contained" size="small" sx={{ backgroundColor: "#8A2BE2" }}>
            View All
          </Button>
        </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <EditNote sx={{ fontSize: 40, color: "#2196F3" }} />
                <Typography variant="body2">Total Exam</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <Descrition sx={{ fontSize: 40, color: "#4CAF50" }} />
                <Typography variant="body2">Upcoming Exam</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                {/* <HourglassEmptyIcon sx={{ fontSize: 40, color: "#FFC107" }} /> */}
                <CancelIcon sx={{ fontSize: 40, color: "#F44336" }} />
                <Typography variant="body2">Cancelled Exam</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <CalendarViewDayRounded sx={{ fontSize: 40, color: "#FFC107" }} />
                <Typography variant="body2">IA-AW Status</Typography>
                <Typography variant="h6">Enabled</Typography>
              </Card>
            </Grid>
          </Grid>
        </Card>
      </Box>

      </Box>
          </Box>
          </div>
      </Layout>
    );
  };
  
  export default Home;
  