import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { useForm } from "react-hook-form";

function RequestForm({ open, handleClose }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    handleClose();
  };

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <DialogContentText color="secondary">
            Please enter your details here. We will connect you with the Donor
            ASAP.
          </DialogContentText>

          <TextField
            inputRef={register}
            name="name"
            required
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            color="secondary"
          />
          <TextField
            inputRef={register}
            name="email"
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            color="secondary"
          />
          <TextField
            name="mobile"
            inputRef={register}
            margin="dense"
            id="mobile"
            label="Mobile No."
            type="number"
            fullWidth
            color="secondary"
          />
          <TextField
            name="altMobile"
            inputRef={register}
            margin="dense"
            id="alternateNo"
            label="Alternate No."
            type="number"
            fullWidth
            color="secondary"
          />
          <TextField
            name="pincode"
            inputRef={register}
            margin="dense"
            id="pincode"
            label="Pin Code"
            type="number"
            fullWidth
            color="secondary"
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              name="posDate"
              inputRef={register}
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
          </MuiPickersUtilsProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button color="secondary" variant="contained" type="submit">
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default RequestForm;
