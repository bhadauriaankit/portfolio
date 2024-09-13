import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import movie from "../../Assets/Projects/movie.svg";
import medical from "../../Assets/Projects/medical.svg";
import web from "../../Assets/Projects/web.svg";
// import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

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
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col> */}
{
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web}
              isBlog={false}
              title="e-commerce website"
              description="Developed a comprehensive website for Amartech Engineers, showcasing their products and services.Increased website traffic by 20% through SEO optimization. Received positive feedback from clients on the website's usability and design."
              // ghLink="https://amartechengineers.com/"
              demoLink="https://amartechengineers.com/"              
            />
          </Col> }

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Plant AI"
              description="A movie recommender system uses algorithms to suggest movies to users based on their past preferences 
              and behaviors. It analyzes user data, extracts relevant features, and trains machine learning models to generate 
              personalized recommendations. The goal is to provide users with a list of movies they are likely to enjoy."
               ghLink="https://github.com/bhadauriaankit/movie-recommender-system"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/bhadauriaankit/Suicide-detection-using-ml"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medical}
              isBlog={false}
              title="Pneumonia Detection"
              description="Medical image segmentation for pneumonia detection involves identifying and outlining lung regions affected by pneumonia in chest X-rays or CT scans. Deep learning-based methods, such as U-Net or CNN, are 
              commonly used to automatically segment lung opacities, pleural effusions, and other pneumonia-related features. Accurate segmentation enables early diagnosis and treatment of pneumonia."
              ghLink="https://github.com/bhadauriaankit/medical-image-segmentation"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
