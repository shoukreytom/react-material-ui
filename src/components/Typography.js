import { Typography as Typo, Container } from '@material-ui/core'


function Typography() {
    return (
        <Container>
            <Typo variant="h1" color="secondary">H1</Typo>
            <Typo variant="h2" color="secondary">H2</Typo>
            <Typo variant="h3" color="secondary">H3</Typo>
            <Typo variant="h4" color="secondary">H4</Typo>
            <Typo variant="h5" color="secondary">h5</Typo>
            <Typo variant="h6" color="secondary">H6</Typo>
            <Typo variant="body1" color="primary" align="justify" gutterBottom>
                It is a long established fact that a reader will be distracted by 
                the readable content of a page when looking at its layout. The point 
                of using Lorem Ipsum is that it has a more-or-less normal distribution 
                of letters, as opposed to using 'Content here, content here', making it 
                look like readable English. Many desktop publishing packages and web page 
                editors now use Lorem Ipsum as their default model text, and a search for 
                'lorem ipsum' will uncover many web sites still in their infancy. Various 
                versions have evolved over the years, sometimes by accident, sometimes on 
                purpose (injected humour and the like).
            </Typo>
            <Typo variant="body2" color="textSecondary" align="justify">
                It is a long established fact that a reader will be distracted by 
                the readable content of a page when looking at its layout. The point 
                of using Lorem Ipsum is that it has a more-or-less normal distribution 
                of letters, as opposed to using 'Content here, content here', making it 
                look like readable English. Many desktop publishing packages and web page 
                editors now use Lorem Ipsum as their default model text, and a search for 
                'lorem ipsum' will uncover many web sites still in their infancy. Various 
                versions have evolved over the years, sometimes by accident, sometimes on 
                purpose (injected humour and the like).
            </Typo>
        </Container>
    );
}


export default Typography
