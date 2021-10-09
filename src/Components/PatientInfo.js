import React, { useState } from "react";
import "./PatientInfo.css";
import { Box, Tab } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import InfoHeader from "./InfoHeader";
import { makeStyles } from "@material-ui/core/styles";
import TabularInfo from "./TabularInfo";

const useStyles = makeStyles((theme) => ({
  tab: {
    fontSize: "10px",
    width: "20px",
    fontWeight: "700",
    backgroundColor: "#F7F7F7",
    marginTop: "1px",
    borderRadius: "10px",
    marginRight: "5px",
  },
}));

function PatientInfo() {
  const [value, setValue] = useState("1");
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="info">
      <InfoHeader />
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                label="List Of Prior Surgeries"
                value="1"
                className={classes.tab}
              />
              <Tab
                label="List Of Medical Diagnosis"
                value="2"
                className={classes.tab}
              />
              <Tab
                label="List Of Medications"
                value="3"
                className={classes.tab}
              />
              <Tab
                label="Airway Evaluation"
                value="4"
                className={classes.tab}
              />
              <Tab
                label="Anesthesia Clearance and Recommendation"
                value="5"
                className={classes.tab}
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <TabularInfo />
          </TabPanel>
          <TabPanel value="2">Information not Available</TabPanel>
          <TabPanel value="3">Information not Available</TabPanel>
          <TabPanel value="4">Information not Available</TabPanel>
          <TabPanel value="5">Information not Available</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default PatientInfo;
