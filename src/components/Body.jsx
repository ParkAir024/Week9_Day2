import Container from "react-bootstrap/esm/Container";
import Stack from "react-bootstrap/Stack";

import Sidebar from "./Sidebar";
import { Posts } from "./posts";

export default function Body({ children }) {

    return (
        <Container>
            <Stack direction='horizontal'>
                <Sidebar />
                <Container>
                { children }
                </Container>
            </Stack>
        </Container>
    )
}
