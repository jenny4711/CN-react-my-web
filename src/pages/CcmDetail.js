import React from "react";
import "../CSS/CcmDetail.css";
import { Container, Row, Col } from "react-bootstrap";

const CcmDetail = ({ id, name, url, sheet }) => {
  return (
    
    
       <div className='CcmDetail'>
      <h3>{name}</h3>
      <iframe width="350" height="250" src={url} allowfullscreen></iframe>
      <img class="img" src={sheet} alt="sheet" />
      </div>
    
    
  );
};

export default CcmDetail;
