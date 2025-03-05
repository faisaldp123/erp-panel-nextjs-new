import Layout from "../../components/AccountsLayout"
import { Box, Grid, Typography, Button, Card, CardContent } from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Descrition from "@mui/icons-material/Description";
import EditNote from "@mui/icons-material/EditNote";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import CancelIcon from "@mui/icons-material/Cancel";
import CalendarViewDayRounded from "@mui/icons-material/CalendarToday";
import { Moving, PublishedWithChanges, TaskAlt } from "@mui/icons-material";

const Home = () => {
    return (
      <Layout>
        <h1 className="text-3xl ms-5 font-bold text-purple-700">Accounts || Home</h1>
        <div className="flex h-screen">

    <Box sx={{ p: 3, width: '100%' }}>

      
      <Box sx={{boxShadow: 1, borderRadius: 3, padding: 3, borderTop: "4px solid #003e96"}}>
        {/* Support Home Section */}
      <Card sx={{ p: 2, mb: 3, borderRadius: 3, boxShadow: 1 }}>
        <Typography variant="h6" fontWeight="bold">
          Accounts - Home
        </Typography>
      </Card>

      {/* Admission Ticket Report Section */}
      <Box sx={{ mb: 4 }}>
        

        <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            📄 Students
          </Typography>
          <Button href="/exam/exam-timetable/list" variant="contained" size="small" sx={{ backgroundColor: "#8A2BE2" }}>
            View All
          </Button>
        </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <Descrition sx={{ fontSize: 40, color: "#2196F3" }} />
                <Typography variant="body2">Pending Students</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <Moving sx={{ fontSize: 40, color: "#FFC107" }} />
                <Typography variant="body2">Processable Students</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                {/* <HourglassEmptyIcon sx={{ fontSize: 40, color: "#FFC107" }} /> */}
                <TaskAlt sx={{ fontSize: 40, color: "#4CAF50" }} />
                <Typography variant="body2">Processing Students</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ borderRadius: 3, boxShadow: 1, p: 2, textAlign: "center" }}>
                <PublishedWithChanges sx={{ fontSize: 40, color: "#F44336" }} />
                <Typography variant="body2">Processed Students</Typography>
                <Typography variant="h6" fontWeight="bold">0</Typography>
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
  