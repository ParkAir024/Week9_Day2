import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


export default function Header() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container >
                <Navbar.Brand href="#home">#1 Place I want to vacation to!</Navbar.Brand>
            </Container>
        </Navbar>
    )
}