import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
// imports related to topic
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'


const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
});


function RadioButton() {
    const [username, setUsername] = useState('');
    const [gender, setGender] = useState('male');
    const classes = useStyles();

    const submitForm = (e)=> {
        e.preventDefault();
        if (username)
            console.log(username, gender);
        else
            console.log("usernam is required.");
    }

    return (
        <Container>
            <Typography variant="h3" color="secondary">
                Create account
            </Typography>
            <form method="POST" onSubmit={submitForm}>
                <TextField
                    className={classes.field}
                    variant="standard" 
                    label="usernme"
                    onChange={(e) => setUsername(e.target.value)}
                    />
                <FormControl className={classes.field}>
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup value={gender} onChange={(e) => setGender(e.target.value)}>
                        <FormControlLabel value="male" control={<Radio />} label="Male"/>
                        <FormControlLabel value="female" control={<Radio />} label="Female"/>
                        <FormControlLabel value="other" control={<Radio />} label="Other"/>
                    </RadioGroup>
                </FormControl>
                <Button 
                    type="submit" 
                    color="secondary" 
                    variant="contained"
                    disableElevation>
                    Submit
                </Button>
            </form>
        </Container>
    );
}


export default RadioButton;
