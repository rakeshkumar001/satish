import { Carousel, Row, Col, Container, Card, Button } from 'react-bootstrap';
import React from 'react'
import LP1 from "../assets/images/LP_1.png";
import LP2 from "../assets/images/LP_2.png";
import LP3 from "../assets/images/LP_3.png";
import { FaTruck, FaMoneyBillWave, FaPercent } from "react-icons/fa";

function LandingPage() {
    return (
        <div className='landing_page'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={LP1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        {/* <p>Image 1</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={LP2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        {/* <p>Image 2</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={LP3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        {/* <p>Image 3</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container>
                <div className="features_list">
                    <h3>FEATURES</h3>
                    <Row>
                        <Col md="4">
                            <div className="feature">
                                <div className="image shadow">
                                    <FaTruck />
                                </div>
                                <div className="description">
                                    <p className='title'> Faster Delivery</p>
                                    <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                                </div>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="feature">
                                <div className="image shadow">
                                    <FaPercent />
                                </div>
                                <div className="description">
                                    <p className='title'> Best Discount</p>
                                    <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>

                                </div>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="feature">
                                <div className="image shadow">
                                    <FaMoneyBillWave />
                                </div>
                                <div className="description">
                                    <p className='title'> 100% Money Refund</p>
                                    <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>

                                </div>
                            </div>
                        </Col>

                    </Row>
                </div>
                <div className="samples">
                    <h3>FEW OF OUR SAMPLES</h3>
                    <Row>
                        <Col md="4">
                            <Card className='shadow'>
                                <Card.Img variant="top" src={LP1} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className='shadow'>
                                <Card.Img variant="top" src={LP2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className='shadow'>
                                <Card.Img variant="top" src={LP3} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div >
    )
}

export default LandingPage