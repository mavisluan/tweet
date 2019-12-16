import React from 'react'
import {Row, Col} from 'react-bootstrap'
const Buttons = ({ retweet, like }) => (
    <Row className="text-black-50">
        <Col xs={3}><i className="fas fa-reply"></i></Col>
        <Col xs={3}><i className="fas fa-retweet"> {retweet}</i></Col>
        <Col xs={3}><i className="fas fa-heart"> {like}</i></Col>
        <Col xs={3}><i className="fas fa-ellipsis-h"></i> </Col>
    </Row>
)

export default Buttons
