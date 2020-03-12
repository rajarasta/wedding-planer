/*
v.0.1
Table of all guest entries for an event

*/
import React, { useEffect } from "react";

// Redux stuff
import { useSelector, useDispatch } from "react-redux";
import { getAllGuests } from "../redux/actions/eventActions";

// Router stuff
import { useParams } from "react-router-dom";

// MUI stuff
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";

// Styles
const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export default function GuestTable(props) {
  // Styles
  const classes = useStyles();
  // Props
  let { eventId } = useParams();

  // Redux
  const state = useSelector(state => {
    return {
      guests: state.event.guests
    };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGuests(eventId));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="guest list">
        <TableHead>
          <TableRow>
            <TableCell>Last name</TableCell>
            <TableCell>First name</TableCell>
            <TableCell align="right">Phone number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.guests.map(row => (
            <TableRow key={row.guestId}>
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell align="right">{row.phoneNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
