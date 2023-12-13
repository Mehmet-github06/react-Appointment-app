import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { doctorData } from "../helpers/Data";
import AddModal from "./AddModal";
import { useState } from "react";

const Doctors = ({ handleAdd }) => {
  const [show, setShow] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const [drName, setDrName] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (name) => {
    setShow(true);
    setDrName(name);
  };

  const handleShowImage = (doctor) => {
    if (selectedDoctor === doctor) {
      setSelectedDoctor(null); // Eğer aynı doktora tekrar tıklanırsa, seçili doktoru temizle
    } else {
      setSelectedDoctor(doctor);
    }
  };

  return (
    <Container className="p-2 ">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>
      <Row>
        {doctorData.map(({ id, img, dep, name }) => (
          <Col key={id} xl={3} lg={3} md={6} className="g-4 ">
            <Card className="img-thumbnail caards">
              <Card.Img
                variant="top"
                src={selectedDoctor === id ? "./indir.png" : img}
                alt={name}
                className="doctor-img"
                onClick={() => handleShowImage(id)}
              />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{dep}</Card.Text>
                <Button
                  variant="outline-success"
                  onClick={() => handleShow(name)}
                >
                  Appointment
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <AddModal
        handleClose={handleClose}
        show={show}
        drName={drName}
        handleAdd={handleAdd}
      />
    </Container>
  );
};

export default Doctors;
