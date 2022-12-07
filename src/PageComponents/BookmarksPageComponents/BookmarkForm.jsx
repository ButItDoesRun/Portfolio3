import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form';

const BookmarkForm = ({ name, setName }) => {
    return (
        <Container fluid>
            <Form>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name your bookmark:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        value={name}
                        onChange={e => setName(e.target.value)} />
                </Form.Group>
            </Form>
        </Container>
    );
};

export default BookmarkForm;