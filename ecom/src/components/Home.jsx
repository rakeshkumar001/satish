import React from 'react'
import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import HP1 from "../assets/images/krishnaStatue.jpg";
import HP2 from "../assets/images/copperBottle.jpeg";
import HP3 from "../assets/images/copperJug.jpg";
import HP4 from "../assets/images/matka.jpeg";
import HP5 from "../assets/images/poojaThali.jpg";
import HP6 from "../assets/images/poojaThali2.jpg";

function Home() {
  return (
    <div className='homepage'>
      <Container>
        <Row>
          <Col md="3">
            <Card className='shadow'>
              <Card.Img variant="top" src={HP1} />
              <Card.Body>
                <Card.Title>Sri Krishna Statue</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <div className="addToCart">
                  <p className='price'> Rs 120 /-</p>
                  <Button variant="primary">Add To Cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="3">
            <Card className='shadow'>
              <Card.Img variant="top" src={HP2} />
              <Card.Body>
                <Card.Title>Copper Bottle</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <div className="addToCart">
                  <p className='price'> Rs 120 /-</p>
                  <Button variant="primary">Add To Cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="3">
            <Card className='shadow'>
              <Card.Img variant="top" src={HP3} />
              <Card.Body>
                <Card.Title>Copper Jug</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <div className="addToCart">
                  <p className='price'> Rs 120 /-</p>
                  <Button variant="primary">Add To Cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="3">
            <Card className='shadow'>
              <Card.Img variant="top" src={HP4} />
              <Card.Body>
                <Card.Title>Kalash</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <div className="addToCart">
                  <p className='price'> Rs 120 /-</p>
                  <Button variant="primary">Add To Cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="3">
            <Card className='shadow'>
              <Card.Img variant="top" src={HP5} />
              <Card.Body>
                <Card.Title>Pooja Thali 1</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <div className="addToCart">
                  <p className='price'> Rs 120 /-</p>
                  <Button variant="primary">Add To Cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="3">
            <Card className='shadow'>
              <Card.Img variant="top" src={HP6} />
              <Card.Body>
                <Card.Title>Pooja Thali 2</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <div className="addToCart">
                  <p className='price'> Rs 120 /-</p>
                  <Button variant="primary">Add To Cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home