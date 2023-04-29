import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Developer with <span className="purple">expertise in developing  </span>
            and <span className="purple"> implementing blockchain solutions {" "}</span>
            using various frameworks and programming languages.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Boxing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Blockchain: The technology of trust."{" "}
          </p>
          <footer className="blockquote-footer">Adarsh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
