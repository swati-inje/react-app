import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function LandingPage() {
  const location = useLocation();
  const [show, setShow] = React.useState(location.state?.showModal || false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <h1>Welcome to the Landing Page</h1>
      <p>This is the content of the landing page.</p>

      {/* Button to trigger the modal */}
      <Button variant="primary" onClick={handleShow}>
        Add+
      </Button>

      {/* Bootstrap Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Your Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default LandingPage;
