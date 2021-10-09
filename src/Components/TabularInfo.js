import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    width: "400px",
    marginBottom: "50px",
  },

  tableCell: {
    backgroundColor: "#E8F5FE",
    minWidth: "20px",
    width: "25px",
  },
  tableDataCell: {
    backgroundColor: "#F7F7F7",
  },
}));

function createData(name) {
  return { name };
}

function createSurgeryData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [createData("No")];
const row = [createData("Yes")];
const info = [
  createData(
    "Lorem ipsum dolor sit amet  consectetur adipisicing elit. Quod ipsum neque aspernatur consectetur adipisicing elit. Quod ipsum neque aspernatur consectetur adipisicing elit. Quod ipsum neque aspernatur."
  ),
];

const surgeryDetails = [
  createSurgeryData(
    "Shoulder Reconstruction",
    "January 2008",
    "General Breathing Tube",
    "No",
    "No"
  ),
];

function TabularInfo() {
  //
  const classes = useStyles();

  return (
    <div>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={12} className={classes.tableCell}>
                First Time Surgery
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  className={classes.tableDataCell}
                >
                  {row.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/*  */}
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={12} className={classes.tableCell}>
                Family History of Surgical Complications
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {row.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  className={classes.tableDataCell}
                >
                  {row.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/*  */}
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={12} className={classes.tableCell}>
                If Yes Please Provide More Details
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {info.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  className={classes.tableDataCell}
                >
                  {row.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/*  */}
      <Typography>Previous Surgeries</Typography>

      {/* Surgey Details */}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}>Surgery Type</TableCell>
              <TableCell className={classes.tableCell} align="center">
                Date
              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                Anesthesia Type
              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                Surgical Complications
              </TableCell>
              <TableCell className={classes.tableCell} align="center">
                Anesthetic Complications (nausea, vomating)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {surgeryDetails.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  className={classes.tableDataCell}
                  component="th"
                  scope="row"
                >
                  {row.name}
                </TableCell>
                <TableCell className={classes.tableDataCell} align="center">
                  {row.calories}
                </TableCell>
                <TableCell className={classes.tableDataCell} align="center">
                  {row.fat}
                </TableCell>
                <TableCell className={classes.tableDataCell} align="center">
                  {row.carbs}
                </TableCell>
                <TableCell className={classes.tableDataCell} align="center">
                  {row.protein}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TabularInfo;
