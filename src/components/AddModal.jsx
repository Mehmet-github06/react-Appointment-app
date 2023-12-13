import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function AddModal({ show, handleClose, drName }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");


  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(name,date)
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{drName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name..."
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Appointment Date</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder="date"
                onChange={(e)=>setDate(e.target.value)}
                required
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="primary" type="submit">
                Save
              </Button>
              <Button variant="danger" type="button" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModal;
