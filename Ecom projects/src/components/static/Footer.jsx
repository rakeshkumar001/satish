import React from 'react'
import { Row,Col,Container } from 'react-bootstrap'

function Footer() {
  return (
    <div className='footer_wrap'>
        <Container  bg="light" expand="lg">
            <Row>
                <Col>
                <p>Links:-</p>
                <ul>
                    <li>Link 1</li>
                    <li>Link 2</li>
                </ul>
                </Col>
                <Col>
                <p>Links:-</p>
                <ul>
                    <li>Link 1</li>
                    <li>Link 2</li>
                </ul>
                </Col>
                <Col>
                <p>Links:-</p>
                <ul>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                </ul>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer