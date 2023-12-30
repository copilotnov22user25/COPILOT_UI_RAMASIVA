import React, { useState, useEffect } from "react";
import { CardComponent, FetchDist } from "./CommonCalls";
import {Col, Row} from "react-bootstrap";


export default function Cards() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await FetchDist();
            setData(result);
        };
        fetchData();
    }, []);

    return (
        <div>
            <Row>
                <Col md={2}></Col>
                <Col md={8}>
            <Row>
           {data.map((map,index) => {
            return <React.Fragment key={index}>
                <CardComponent distCode={map.distCode} distName={map.distName} />
                </React.Fragment>
                })}
            </Row>
            </Col>
            <Col md={2}></Col>
            </Row>
        </div>
    );
}