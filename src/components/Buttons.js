import {Container, Button, ButtonGroup, Typography} from '@material-ui/core'



function Buttons() {
    return (
        <Container>
            <Button>Default</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <br/>
            <Typography variant="h2" color="secondary">
                Button Groups
            </Typography>
            <ButtonGroup variant="contained" disableElevation>
                <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="textSecondary" disabled>Disabled</Button>
                <Button color="priamry" href="typography">Link</Button>
            </ButtonGroup>
        </Container>
    );
}


export default Buttons
