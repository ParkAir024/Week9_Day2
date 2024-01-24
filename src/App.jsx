import Container from "react-bootstrap/esm/Container";

import { Posts } from "./components/posts";
import Header from "./components/header";
import Body from "./components/Body";
import Location from "./components/Location";
import Register from "./components/forms/Register";

export default function App() {

  return (
    <Container fluid data-bs-theme='dark' className='app'>
      <Header />
      <Body>
        {/* <Posts /> */}
        <Location />
        <Register />
      </Body>
    </Container>
  )
}