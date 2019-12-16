import React from 'react'
import Time from './Time'
import {Col, Row,} from 'react-bootstrap'
import Buttons from "./Buttons";

const Tweet = ({item: {userName, avatar, handleName, message, timeStamp, retweet, like}}) => (
    <div className="bg-white rounded border border-secondary p-3 align-content-center">
        <Row>
            <Col sm={4} md={2}>
                <img  src={avatar} width="100rem" className="rounded-lg" alt={"avatar"}/>
            </Col>
            <Col sm={8} md={10}>
                <div>
                    <span style={{fontWeight: "bold"}}>{userName}</span>
                    <span className="text-black-50"> @{handleName}</span>
                    <Time time={timeStamp}/>
                </div>
                <div className="py-3">{message}</div>
                <Buttons retweet={retweet} like={like}/>
            </Col>
        </Row>
    </div>
)

export default Tweet
