import React, { useState } from "react";
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
import { useForm } from "react-hook-form";

function DonateForm({ open, handleClose }) {
  const { register, handleSubmit } = useForm();

  const [selectedDate, setSelectedDate] = useState(
    new Date("2020-08-15T21:11:54")
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState();
  const [mob, setMob] = useState();
  const [alt, setAlt] = useState();
  const [pincode, setPincode] = useState();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleEmailChange = (str) => {
    setEmail(str);
  };
  const handleMobChange = (str) => {
    setMob(str);
  };
  const handleAltChange = (str) => {
    setAlt(str);
  };
  const handlePincodeChange = (str) => {
    setPincode(str);
  };

  const handleNameChange = (str) => {
    setName(str);
  };
  const onSubmit = (data) => {
    console.log(data);
    handleClose();
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
            To donate your plasma, please enter your details here. We will
            contact you based on requirement .
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
            onChange={handleNameChange}
          />
          <TextField
            inputRef={register}
            name="email"
            required
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            color="secondary"
            onChange={handleEmailChange}
          />
          <TextField
            inputRef={register}
            name="mobile"
            required
            margin="dense"
            id="mobile"
            label="Mobile No."
            type="number"
            fullWidth
            color="secondary"
            onChange={handleMobChange}
          />
          <TextField
            inputRef={register}
            name="altMobile"
            required
            margin="dense"
            id="alternateNo"
            label="Alternate No."
            type="number"
            fullWidth
            color="secondary"
            onChange={handleAltChange}
          />

          <TextField
            inputRef={register}
            name="pincode"
            required
            margin="dense"
            id="pincode"
            label="Pin Code"
            type="number"
            fullWidth
            color="secondary"
            onChange={handlePincodeChange}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              inputRef={register}
              name="posDate"
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
              inputRef={register}
              name="negDate"
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

          <Button color="secondary" variant="contained" type="submit">
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default DonateForm;
