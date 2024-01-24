import  Navbar  from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

export default function Sidebar() {
  return (
    <Navbar sticky ='top' className='flex-column sidebar'>
        <Nav.Item>
           <Nav.Link href = '/'>Feed</Nav.Link> 
        </Nav.Item>
        <Nav.Item>
           <Nav.Link href = '/'>My Page</Nav.Link> 
        </Nav.Item>
        <Nav.Item>
           <Nav.Link href = '/'>Japan Journey</Nav.Link> 
        </Nav.Item>
    </Navbar>
  )
}
