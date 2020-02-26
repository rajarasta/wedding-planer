/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

// material ui icons
import MailOutline from "@material-ui/icons/MailOutline";
import Contacts from "@material-ui/icons/Contacts";
import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardText from "../../components/Card/CardText.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

// style for this view
import styles from "../../assets/jss/material-dashboard-pro-react/views/validationFormsStyle.js";

const useStyles = makeStyles(styles);

export default function ValidationForms() {
    // register form
    const [registerEmail, setregisterEmail] = React.useState("");
    const [registerEmailState, setregisterEmailState] = React.useState("");
    const [registerPassword, setregisterPassword] = React.useState("");
    const [registerPasswordState, setregisterPasswordState] = React.useState("");
    const [registerConfirmPassword, setregisterConfirmPassword] = React.useState(
        ""
    );
    const [
        registerConfirmPasswordState,
        setregisterConfirmPasswordState
    ] = React.useState("");
    const [registerCheckbox, setregisterCheckbox] = React.useState(false);
    const [registerCheckboxState, setregisterCheckboxState] = React.useState("");
    // login form
    //TODO kita
    const [loginEmail, setloginEmail] = React.useState("");
    const [loginEmailState, setloginEmailState] = React.useState("");
    const [loginPassword, setloginPassword] = React.useState("");
    const [loginPasswordState, setloginPasswordState] = React.useState("");
    const [simpleSelect, setSimpleSelect] = React.useState("");
    // type validation
    const [required, setrequired] = React.useState("");
    const [requiredState, setrequiredState] = React.useState("");
    const [typeEmail, settypeEmail] = React.useState("");
    const [typeEmailState, settypeEmailState] = React.useState("");
    const [number, setnumber] = React.useState("");
    const [numberState, setnumberState] = React.useState("");
    const [url, seturl] = React.useState("");
    const [urlState, seturlState] = React.useState("");
    const [equalTo, setequalTo] = React.useState("");
    const [whichEqualTo, setwhichEqualTo] = React.useState("");
    const [equalToState, setequalToState] = React.useState("");
    // range validation
    const [minLength, setminLength] = React.useState("");
    const [minLengthState, setminLengthState] = React.useState("");
    const [maxLength, setmaxLength] = React.useState("");
    const [maxLengthState, setmaxLengthState] = React.useState("");
    const [range, setrange] = React.useState("");
    const [rangeState, setrangeState] = React.useState("");
    const [minValue, setminValue] = React.useState("");
    const [minValueState, setminValueState] = React.useState("");
    const [maxValue, setmaxValue] = React.useState("");
    const [maxValueState, setmaxValueState] = React.useState("");
    // function that returns true if value is email, false otherwise
    const verifyEmail = value => {
        var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailRex.test(value)) {
            return true;
        }
        return false;
    };
    // function that verifies if a string has a given length or not
    const verifyLength = (value, length) => {
        if (value.length >= length) {
            return true;
        }
        return false;
    };
    // function that verifies if value contains only numbers
    const verifyNumber = value => {
        var numberRex = new RegExp("^[0-9]+$");
        if (numberRex.test(value)) {
            return true;
        }
        return false;
    };
    //Handles accomodation selection
    const handleSimple = event => {
        setSimpleSelect(event.target.value);
      };
    // verifies if value is a valid URL
    const verifyUrl = value => {
        try {
            new URL(value);
            return true;
        } catch (_) {
            return false;
        }
    };
    const registerClick = () => {
        if (registerEmailState === "") {
            setregisterEmailState("error");
        }
        if (registerPasswordState === "") {
            setregisterPasswordState("error");
        }
        if (registerConfirmPasswordState === "") {
            setregisterConfirmPasswordState("error");
        }
        if (registerCheckboxState === "") {
            setregisterCheckboxState("error");
        }
        if (requiredPhoneState === "") {
            setrequiredState("error");
        };
    };
    const loginClick = () => {
        if (loginEmailState === "") {
            setloginEmailState("error");
        }
        if (loginPasswordState === "") {
            setloginPasswordState("error");
        }
    };
    const typeClick = () => {
        if (requiredState === "") {
            setrequiredState("error");
        }
        if (typeEmailState === "") {
            settypeEmailState("error");
        }
        if (numberState === "") {
            setnumberState("error");
        }
        if (urlState === "") {
            seturlState("error");
        }
        if (equalToState === "") {
            setequalToState("error");
        }
    };
    const rangeClick = () => {
        if (minLengthState === "") {
            setminLengthState("error");
        }
        if (maxLengthState === "") {
            setmaxLengthState("error");
        }
        if (rangeState === "") {
            setrangeState("error");
        }
        if (minValueState === "") {
            setminValueState("error");
        }
        if (maxValueState === "") {
            setmaxValueState("error");
        }
    };
    const classes = useStyles();
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="rose" icon>
                        <CardIcon color="rose">
                            <MailOutline />
                        </CardIcon>
                        <h4 className={classes.cardIconTitle}>Register Forms</h4>
                    </CardHeader>
                    <CardBody>
                        <form>
                            <CustomInput
                                labelText="First Name"
                                id="firstName"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputProps={{
                                    type: "text"
                                }}
                            />
                            <CustomInput
                                labelText="Last Name"
                                id="lastName"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputProps={{
                                    type: "text"
                                }}
                            />
                            <CustomInput
                                labelText="Phone"
                                id="phone"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputProps={{
                                    type: "tel"
                                }}
                            />
                            <CustomInput
                                labelText="E-mail"
                                id="eMail"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputProps={{
                                    type: "email"
                                }}
                            />
                            <div className={classes.formCategory}>
                                <small>*</small> Required fields
                            </div>

                            <div className={classes.formCategory}>
                                Additional info, it's to be filled if you don't send invitaion online or if you know the details.
                                Can be changed later in guests list.
                                Change design to dropdown.
                            </div>

                            <CustomInput
                                labelText="Additional Adults"
                                id="firstName"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputProps={{
                                    type: "number"
                                }}
                            />
                            <CustomInput
                                labelText="Additional Children"
                                id="lastName"
                                formControlProps={{
                                    fullWidth: true
                                }}
                                inputProps={{
                                    type: "number"
                                }}
                            />

                            <GridItem xs={12} sm={6} md={5} lg={5}>
                                <FormControl
                                    fullWidth
                                    className={classes.selectFormControl}
                                >
                                    <InputLabel
                                        htmlFor="simple-select"
                                        className={classes.selectLabel}
                                    >
                                        Accomodation
                        </InputLabel>
                                    <Select
                                        MenuProps={{
                                            className: classes.selectMenu
                                        }}
                                        classes={{
                                            select: classes.select
                                        }}
                                        value={simpleSelect}
                                        onChange={handleSimple}
                                        inputProps={{
                                            name: "simpleSelect",
                                            id: "simple-select"
                                        }}
                                    >
                                        <MenuItem
                                            classes={{
                                                root: classes.selectMenuItem,
                                                selected: classes.selectMenuItemSelected
                                            }}
                                            value="1"
                                        >
                                            Not needed
                                        </MenuItem>
                                        <MenuItem
                                            classes={{
                                                root: classes.selectMenuItem,
                                                selected: classes.selectMenuItemSelected
                                            }}
                                            value="2"
                                        >
                                            Hilton
                                        </MenuItem>
                                        <MenuItem
                                            classes={{
                                                root: classes.selectMenuItem,
                                                selected: classes.selectMenuItemSelected
                                            }}
                                            value="3"
                                        >
                                            Panorama
                                        </MenuItem>
                                        <MenuItem
                                            classes={{
                                                root: classes.selectMenuItem,
                                                selected: classes.selectMenuItemSelected
                                            }}
                                            value="4"
                                        >
                                            Westin
                                        </MenuItem>
                                        
                                    </Select>
                                </FormControl>
                            </GridItem>

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        tabIndex={-1}
                                        onClick={event => {
                                            if (event.target.checked) {
                                                setregisterCheckboxState("success");
                                            } else {
                                                setregisterCheckboxState("error");
                                            }
                                            setregisterCheckbox(event.target.checked);
                                        }}
                                        checkedIcon={<Check className={classes.checkedIcon} />}
                                        icon={<Check className={classes.uncheckedIcon} />}
                                        classes={{
                                            checked: classes.checked,
                                            root: classes.checkRoot
                                        }}
                                    />
                                }
                                classes={{
                                    label:
                                        classes.label +
                                        (registerCheckboxState === "error"
                                            ? " " + classes.labelError
                                            : "")
                                }}
                                label="Generate and send link on whattsup"
                            />
                            <Button
                                color="rose"
                                onClick={registerClick}
                                className={classes.registerButton}
                            >
                                Register
                            </Button>
                        </form>
                    </CardBody>
                </Card>
            </GridItem>

        </GridContainer>
    );
}
