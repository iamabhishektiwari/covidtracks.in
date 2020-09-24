import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { TextField, CircularProgress, Select } from "@material-ui/core";
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
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "./../firebase";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles((theme) => ({
  radioLabel: {
    paddingTop: 15,
  },
  selectLabel: {
    paddingTop: 0,
  },
}));

function RequestForm({ open, handleClose }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [blood, setBlood] = useState("-");
  const classes = useStyles();
  const { register, handleSubmit } = useForm();

  const [selectedDatePos, setSelectedDatePos] = useState(
    new Date("2020-08-15T21:11:54")
  );

  const handleDatePosChange = (date) => {
    setSelectedDatePos(date);
  };

  const handleBloodChange = (bl) => {
    setBlood(bl.target.value);
  };

  const onSubmit = (data) => {
    setLoading(true);

    let gender = "";
    if (data.male === "male") {
      gender = "male";
    } else {
      gender = data.female === "female" ? "female" : "others";
    }

    const req = {
      name: data.name,
      age: data.age,
      bloodGroup: data.bloodSelect,
      mobile: data.mobile,
      email: data.email,
      gender: gender,
      pincode: data.pincode,
      posdate: selectedDatePos,
    };
    const db = firebase.firestore();
    db.collection("requests").add(req);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1400);
    setTimeout(() => {
      handleClose();
    }, 3000);

    setTimeout(() => {
      setSuccess(false);
    }, 10000);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {!loading && !success && (
          <DialogContent>
            <DialogContentText color="secondary">
              To search for donor, please enter your details here. We will
              contact within 24 hrs.
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
              fullWidth
              inputRef={register}
              name="age"
              required
              margin="dense"
              id="age"
              label="Age"
              type="number"
              color="secondary"
            />
            <FormControl
              className={classes.formControl}
              fullWidth
              color="secondary"
            >
              <InputLabel
                className={classes.selectLabel}
                htmlFor="age-native-simple"
              >
                Select Blood Group
              </InputLabel>
              <Select
                name="bloodSelect"
                native
                value={blood}
                fullWidth
                inputRef={register}
                onChange={handleBloodChange}
              >
                <option aria-label="None" value="" />
                <option value={"A"}>A</option>
                <option value={"B"}>B</option>
                <option value={"O"}>O</option>
                <option value={"AB"}>AB</option>
              </Select>
            </FormControl>

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
                  control={
                    <Radio name="male" inputRef={register} size="small" />
                  }
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
            </MuiPickersUtilsProvider>
          </DialogContent>
        )}
        {!loading && !success && (
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>

            <Button color="secondary" variant="contained" type="submit">
              Submit
            </Button>
          </DialogActions>
        )}
        {!loading && success && (
          <DialogContent>
            <DialogContentText color="secondary">
              Thanks, we will get back to you soon. Stay Safe.
            </DialogContentText>
          </DialogContent>
        )}
        {loading && (
          <DialogContent>
            <CircularProgress color="secondary" />
          </DialogContent>
        )}
      </form>
    </Dialog>
  );
}

export default RequestForm;
