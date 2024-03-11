import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bao-Jhih Shao </span>
            from <span className="purple"> Taichung, Taiwan.</span>
            <br />
            I had over 5 years work experience as software engineer in the field of e-commerce.
            I just fininshed my master's degree of computer science from UIUC, and I am actively looking for a full-time job.
            <br />
            <br />
            Some of my interests apart from programming:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Photo shooting
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
