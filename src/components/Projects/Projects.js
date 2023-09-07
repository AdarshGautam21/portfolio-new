import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="MarsDelight"
              description="Runner-Up at MLH SRM Hackathon, 2023. Mars restaurant food delivery applications displaying the menu using Pinata SDK (IPFS). Works on both Solana and Ethereum Chains.
Skills- Solidity, Rust, React.js, Redux.js, Next.js, WalletConnect, Pinata SDK, IPFS, Phantom Wallet, Metamask."
              demoLink="https://mars-delight.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ShardZ (Under Development)"
              description="ShardZ is a decentralized Video platform under development. Aims to add more value to your content streaming. It aims to scale as an 
interactive decentralized platform combined with a marketplace where creators can sell there merchandize and items in auction. Creates Video \& Audio NFTs, which can be invested in. 
The technology includes use of IPFS/IPNS, LightHouse, EVM, Velas Chain, Polygon Chain. 
Skills Used- Solidity, React.js, Next.js, Javascript, Bootstrap CSS, HTML/CSS."
             // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
             // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Vista-RCM"
              description="Vista-RCM was created for a business owner. This project was a paid freelance project. Technology used- React.js, Redux.js, Node.js, JavaScript, CSS, HTML,"
              //ghLink=""
             demoLink="https://vista-rcm.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="MedStory"
              description="MedStory is a blockchain based patient data tracker site. It saves the patient's data and presciption reports in the form of images and displays them to the medical practitioner, doctor or laboratory. Medstory was built with the idea that it will be provided to the medical entities on a SaaS model."
             ghLink="https://github.com/AdarshGautam21/MedStory"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
