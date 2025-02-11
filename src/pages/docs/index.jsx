import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Avatar,
} from "@mui/material";
import BookIcon from "@mui/icons-material/MenuBook";

const materials = [
  {
    title: "Marksheet",
    icon: <BookIcon style={{ color: "#fff" }} />,
    docs_result: '/docs/marksheet/list'
  },
  {
    title: "CMM",
    icon: <BookIcon style={{ color: "#fff" }} />,
    docs_result: '/docs/cmm/list'
  },
  {
    title: "Original Degree",
    icon: <BookIcon style={{ color: "#fff" }} />,
    docs_result: '/docs/original-degree'
  },
  {
    title: "Provisional",
    icon: <BookIcon style={{ color: "#fff" }} />,
    docs_result: '/docs/provisional'
  },
  {
    title: "E-Marksheet",
    icon: <BookIcon style={{ color: "#fff" }} />,
    docs_result: '/docs/e-marksheet'
  },
  {
    title: "Consignment",
    icon: <BookIcon style={{ color: "#fff" }} />,
    docs_result: '/docs/consignment'
  },
];

const Docs = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom style={{ color: "#6C27F7" }}>
        Home || Documents
      </Typography>
      <Grid container spacing={3}>
        {materials.map((material, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                padding: "10px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                position: "relative",
              }}
            >

              {/* Content */}
              <CardContent sx={{ textAlign: "center" }}>
                <Avatar
                  sx={{
                    backgroundColor: "#6C27F7",
                    width: 56,
                    height: 56,
                    margin: "0 auto 10px",
                  }}
                >
                  {material.icon}
                </Avatar>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold", fontSize: "16px" }}
                >
                  {material.title}
                </Typography>
                <Button
                href={material.docs_result}
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ marginTop: "10px", textTransform: "none" }}
                >
                  Open
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Docs;
