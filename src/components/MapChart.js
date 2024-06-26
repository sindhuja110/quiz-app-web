import React from "react";
import { Row, Col } from "react-bootstrap";
import DatamapsIndia from "react-datamaps-india";

const MapChart = () => {
  return (
    <Row>
      <Col xs={12} md={6} lg={8} > 
        <DatamapsIndia
          regionData={{
            Maharashtra: {
              value: 10
            },
            Rajasthan: {
              value: 1000
            },
            Gujarat: {
              value: 800
            },
            Karnataka: {
              value: 700
            },
            TamilNadu: {
              value: 190
            },
            Kerala: {
              value: 890
            }
          }}
          hoverComponent={({ value }) => {
            return (
              <div>
                <div>{value.value} tenders</div>
              </div>
            );
          }}
          mapLayout={{
            title: "Statewise",
            legendTitle: "Number of Tenders",
            startColor: "#FFDAB9",
            endColor: "#FF6347",
            hoverTitle: "Count",
            noDataColor: "#f5f5f5",
            borderColor: "#8D8D8D",
            hoverBorderColor: "#8D8D8D",
            hoverColor: "green"
            
          }}
        />
      </Col>
    </Row>
  );
};

export default MapChart;
