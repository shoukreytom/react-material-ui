import React, { useState } from "react"
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormControl from "@material-ui/core/FormControl"
import Checkbox from "@material-ui/core/Checkbox"


const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }
});


function Checkboxes() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(true);
    const classes = useStyles();
    const formSubmit = (e) => {
        e.preventDefault();
        if(username && password)
            console.log(username, password, remember);
        else
            console.log("username and password are required.");
    }
    return (
        <Container>
            <Typography variant="h3" color="secondary">Login</Typography>
            <form method="POST" onSubmit={formSubmit}>
                <TextField 
                    label="Username" 
                    className={classes.field} 
                    onChange={(e) => setUsername(e.target.value)}/>
                <TextField 
                    type="password" 
                    label="Password" 
                    className={classes.field} 
                    onChange={(e) => setPassword(e.target.value)}/>
                <FormControl className={classes.field}>
                    <FormControlLabel control={<Checkbox 
                                                    checked={remember} 
                                                    onChange={(e) => setRemember(e.target.checked)}/>} 
                                        label="Remember me"/>
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
    )
}


export default Checkboxes;
