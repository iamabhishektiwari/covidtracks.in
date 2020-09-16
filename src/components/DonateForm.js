import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function DonateForm({ open, handleClose }) {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogContent>
        <DialogContentText color="secondary">
          To donate your plasma, please enter your details here. We will contact
          you based on requirement .
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          color="secondary"
        />
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          color="secondary"
        />
        <TextField
          autoFocus
          margin="dense"
          id="mobile"
          label="Mobile No."
          type="number"
          fullWidth
          color="secondary"
        />
        <TextField
          autoFocus
          margin="dense"
          id="alternateNo"
          label="Alternate No."
          type="number"
          fullWidth
          color="secondary"
        />
        <TextField
          autoFocus
          margin="dense"
          id="pincode"
          label="Pin Code"
          type="number"
          fullWidth
          color="secondary"
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            fullWidth
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="positiveDate"
            label="Tested positive on (Approx)"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            color="secondary"
          />
          <KeyboardDatePicker
            fullWidth
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="negativeDate"
            label="Tested negative on (Approx)"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            color="secondary"
          />
        </MuiPickersUtilsProvider>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="secondary" variant="contained">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DonateForm;
