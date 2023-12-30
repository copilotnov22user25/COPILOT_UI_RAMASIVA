import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

export default function WorldOfAi({heading}) {
  

    const url = "https://jnboverseas.apcfss.in/apdistman";
    const [data, setData] = useState([]);
    function getData() {
      try {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setData(data.APCFSS_Districts);
            console.log(data.APCFSS_Districts);
          });
      } catch (error) {
        console.log(error);
      }
  
    }
    useEffect(() => { getData(); }, []);
  
  //list of indian states
  const states = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", 
  "Chhattisgarh","Goa", "Gujarat", "Haryana", "Himachal Pradesh", 
  "Jammu and Kashmir","Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
  "Maharashtra","Manipur", "Meghalaya", "Mizoram", "Nagaland", 
  "Odisha","Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal","Andaman and Nicobar Islands",
   "Chandigarh", "Dadra and Nagar Haveli","Daman and Diu", "Lakshadweep", 
   "National Capital Territory of Delhi","Puducherry"];
  
  
    return (
      <div className="text-center mt-2">
        <h1 className="text-primary">{heading}</h1>
        <Row className="m-5 p-5 border border-primary">
          <Col md={6}>
        <h3 className="text-primary">List of Indian States</h3>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <ul className="list-group">
                {states.map((state, index) => {
                  return (
                    <li key={index} className="list-group-item text-capitalize">
                      {state}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
      </div>
      </Col>
      <Col md={6}>
      <h3 className="text-primary">List of Districts in Andhra Pradesh</h3>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <ul className="list-group">
                {data.map((district, index) => {
                  return (
                    <li key={index} className="list-group-item text-capitalize">
                      {district.distName}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          </div>
          </Col>
          </Row>
      </div>
    );
  
}

