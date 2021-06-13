import { TextField, Container, Typography, Button, makeStyles } from '@material-ui/core'
import { useState } from 'react';


const useStyles = makeStyles({
    root: {
        marginTop: 20,
        marginBottom: 20
    }
});


function TextFields() {
    const classes = useStyles()
    const [username, setUsername] = useState('');
    const submitForm = (e) => {
        e.preventDefault();
        console.log(username);
    }
    const updateUsername = (e) => {
        if (e.target.value)
            setUsername(e.target.value)
    }
    return (
        <Container>
            <Typography color="secondary" variant="h2">
                Text Fields
            </Typography>
            <TextField label="standard"/> <br/><br/>
            <TextField label="filled" variant="filled" /> <br/><br/>
            <TextField label="outlined" variant="outlined" /> <br/><br/>
            <br/>
            <Container align="center" className={classes.root}>
                <Typography color="primary" variant="h2">
                    Login Form
                </Typography>
                <form method="POST" noValidate onSubmit={ submitForm }>
                    <TextField variant="outlined" label="username" onChange={ updateUsername }/>
                    <br/><br/>
                    <TextField variant="outlined" label="message" multiline rows={4} />
                    <br /><br /><br />
                    <Button 
                        variant="contained" 
                        type="submit" 
                        color="primary"
                        disableElevation>
                        Submit
                    </Button>
                </form>
            </Container>
        </Container>
    );
}


export default TextFields;
