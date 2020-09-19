import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import {
  TextField,
  Select,
  MenuItem,
  Container,
  Grid,
} from "@material-ui/core";
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
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles, responsiveFontSizes } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  radioLabel: {
    paddingTop: 15,
  },
}));

function DonateForm({ open, handleClose }) {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();

  const [selectedDatePos, setSelectedDatePos] = useState(
    new Date("2020-08-15T21:11:54")
  );

  const [selectedDateNeg, setSelectedDateNeg] = useState(
    new Date("2020-08-15T21:11:54")
  );

  const handleDatePosChange = (date) => {
    setSelectedDatePos(date);
  };

  const handleDateNegChange = (date) => {
    setSelectedDateNeg(date);
  };

  const onSubmit = (data) => {
    console.log(data);
    console.log(selectedDateNeg);
    console.log(selectedDatePos);
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
          />
          <TextField
            inputRef={register}
            name="age"
            required
            margin="dense"
            id="age"
            label="Age"
            type="number"
            fullWidth
            color="secondary"
          />

          <FormControl component="fieldset" color="secondary">
            <FormLabel className={classes.radioLabel} component="div">
              Gender
            </FormLabel>
            <RadioGroup aria-label="gender" name="gender1">
              <FormControlLabel
                value="female"
                control={
                  <Radio name="female" inputRef={register} size="small" />
                }
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={<Radio name="male" inputRef={register} size="small" />}
                label="Male"
              />
              <FormControlLabel
                value="other"
                control={
                  <Radio name="others" inputRef={register} size="small" />
                }
                label="Other"
              />
            </RadioGroup>
          </FormControl>
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
          />
          <TextField
            inputRef={register}
            name="altMobile"
            margin="dense"
            id="alternateNo"
            label="Alternate No."
            type="number"
            fullWidth
            color="secondary"
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
              value={selectedDatePos}
              onChange={handleDatePosChange}
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
              value={selectedDateNeg}
              onChange={handleDateNegChange}
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
