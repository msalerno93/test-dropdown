import React, { useState } from "react";
import {
  Box,
  Card,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Grid,
  TextField,
  Divider,
} from "@mui/material";

const DropDown = () => {
  const [value, setValue] = useState("");
  const [issue, setIssue] = useState("");

  const coreApplications = [
    { id: 1, name: "SIS Complete", label: "SIS Complete" },
    { id: 2, name: "Surgical Notes SNChart", label: "Surgical Notes SNChart" },
    { id: 3, name: "Surgical Notes ScanChart", label: "Surgical Notes ScanChart" },
  ];

  const SISCompleteIssues = [
    { id: 1, name: "Schedule Feed Issue", label: "Schedule Feed Issue" },
    { id: 2, name: "Patient Demographics Feed Issue", label: "Patient Demographics Feed Issue" },
    { id: 3, name: "Other", label: "Other" },
  ];

  const ScanChartIssues = [
    { id: 1, name: "Add a Printer", label: "Add a Printer" },
    { id: 2, name: "Unable to Print", label: "Unable to Print" },
    { id: 3, name: "Unable to Print Patient Chart", label: "Unable to Print Patient Chart" },
    { id: 4, name: "ScanConsole Install", label: "ScanConsole Install" },
    { id: 5, name: "Clear Print Queue", label: "Clear Print Queue" },
  ];

  const SNChartIssues = [
    { id: 1, name: "Remote Visit", label: "Remote Visit" },
    { id: 2, name: "Dictation Issues", label: "Dictation Issues" },
    { id: 3, name: "Other", label: "Other" },
  ];

  const addPrinter = [
    { id: 1, label: "Printer Make/Model" },
    { id: 2, label: "Printer IP Address" },
    { id: 3, label: "Name for ScanChart" },
  ];

  const scanConsoleInstall = [
    { id: 1, label: "Scanner Make/Model" },
    { id: 2, label: "IP Address of PC" },
  ];

  const clientInfo = [
    { id: 1, label: "Client Name" },
    { id: 2, label: "Phone Number" },
    { id: 3, label: "Email Address" },
    { id: 4, label: "Facility Name" },
  ];

  const clearPrintQueue = [
    { id: 1, label: "Printer Name" },
    { id: 2, label: "Printer Make/Model" },
  ];

  const unableToPrintPatient = [
    { id: 1, label: "Patient Name 1" },
    { id: 2, label: "Date of Service" },
    { id: 3, label: "Which Chart Pack Should Print" },
    { id: 4, label: "Error Message" },
    { id: 5, label: "Patient Name 2" },
    { id: 6, label: "Date of Service" },
    { id: 7, label: "Which Chart Pack Should Print" },
    { id: 8, label: "Error Message" },
  ];

  const unableToPrint = [
    { id: 1, label: "Printer Name" },
    { id: 2, label: "Error Message" },
    { id: 3, label: "Is the entire facility affected?" },
  ];

  const sectionBox = {
    mt: 3,
    p: 3,
    borderRadius: 3,
    background: "linear-gradient(145deg, #f9fafc, #eef1f6)",
    boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
  };

  const textFieldStyle = {
    background: "#fff",
    borderRadius: 2,
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #eef2f7, #e3e8ee)",
        p: 2,
      }}
    >
      <Card
        sx={{
          p: { xs: 3, md: 5 },
          width: "100%",
          maxWidth: 950,
          borderRadius: 4,
          boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
        }}
      >
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Support Request
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>
          Tell us about your issue and we’ll help you resolve it quickly.
        </Typography>

        <Divider sx={{ mb: 3 }} />

        {/* APPLICATION SELECT */}
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel>Application</InputLabel>
          <Select
            value={value}
            label="Application"
            onChange={(e) => {
              setValue(e.target.value);
              setIssue("");
            }}
            sx={{ borderRadius: 2, background: "#fafafa" }}
          >
            {coreApplications.map(({ id, name, label }) => (
              <MenuItem key={id} value={label}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* ISSUE SELECT */}
        {(value === "SIS Complete" ||
          value === "Surgical Notes SNChart" ||
          value === "Surgical Notes ScanChart") && (
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Issue Type</InputLabel>
            <Select
              label="Issue Type"
              onChange={(e) => setIssue(e.target.value)}
              sx={{ borderRadius: 2, background: "#fafafa" }}
            >
              {(value === "SIS Complete"
                ? SISCompleteIssues
                : value === "Surgical Notes SNChart"
                ? SNChartIssues
                : ScanChartIssues
              ).map(({ id, name, label }) => (
                <MenuItem key={id} value={label}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}

        {/* DYNAMIC SECTIONS */}
        {issue === "Add a Printer" && (
          <Box sx={sectionBox}>
            <Typography fontWeight={600} mb={2}>
              Printer Details
            </Typography>
            <Grid container spacing={2}>
              {addPrinter.map(({ id, label }) => (
                <Grid item xs={12} sm={6} key={id}>
                  <TextField fullWidth required label={label} sx={textFieldStyle} />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {issue === "Unable to Print" && (
          <Box sx={sectionBox}>
            <Typography fontWeight={600} mb={2}>
              Printing Issue
            </Typography>
            <Grid container spacing={2}>
              {unableToPrint.map(({ id, label }) => (
                <Grid item xs={12} sm={6} key={id}>
                  <TextField fullWidth required label={label} sx={textFieldStyle} />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {issue === "Unable to Print Patient Chart" && (
          <Box sx={sectionBox}>
            <Typography fontWeight={600} mb={2}>
              Patient Chart Issue
            </Typography>
            <Grid container spacing={2}>
              {unableToPrintPatient.map(({ id, label }) => (
                <Grid item xs={12} sm={6} key={id}>
                  <TextField fullWidth required label={label} sx={textFieldStyle} />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {issue === "ScanConsole Install" && (
          <Box sx={sectionBox}>
            <Typography fontWeight={600} mb={2}>
              Scan Console Setup
            </Typography>
            <Grid container spacing={2}>
              {scanConsoleInstall.map(({ id, label }) => (
                <Grid item xs={12} sm={6} key={id}>
                  <TextField fullWidth required label={label} sx={textFieldStyle} />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {issue === "Clear Print Queue" && (
          <Box sx={sectionBox}>
            <Typography fontWeight={600} mb={2}>
              Print Queue Details
            </Typography>
            <Grid container spacing={2}>
              {clearPrintQueue.map(({ id, label }) => (
                <Grid item xs={12} sm={6} key={id}>
                  <TextField fullWidth required label={label} sx={textFieldStyle} />
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {/* ADDITIONAL INFO */}
        <Box sx={sectionBox}>
          <Typography fontWeight={600} mb={2}>
            Additional Information
          </Typography>
          <TextField
            fullWidth
            multiline
            minRows={4}
            label="Additional Information"
            placeholder="Provide any extra details..."
            sx={textFieldStyle}
          />
        </Box>

        {/* CONTACT INFO */}
        <Box sx={sectionBox}>
          <Typography fontWeight={600} mb={2}>
            Contact Information
          </Typography>
          <Grid container spacing={2}>
            {clientInfo.map(({ id, label }) => (
              <Grid item xs={12} sm={6} key={id}>
                <TextField fullWidth required label={label} sx={textFieldStyle} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Card>
    </Box>
  );
};

export default DropDown;