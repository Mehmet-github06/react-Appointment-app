import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import { doctorData } from "../helpers/Data";

const Doctors = () => {
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>
      <Row>
        {doctorData.map(({id,img,dep,name}) => (
          <Col key={id} xl={3} lg={3} md={6} sm={12} className="g-4">
            <Card  style={{ width: '18rem' }}style={{width:"18rem"}}  className="img-thumbnail">
              <Card.Img variant="top" src={img} alt={name} className="doctor-img"/>
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  {dep}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Doctors;
