import "./styles.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Portfolio() {
  return (
    <div className="color">
      <ProjectCard
        name="Gulshan Jangid"
        description="I am becoming a Designer"
      />
    </div>
  );
}

function ProjectCard(props) {
  const [likes, setLikes] = useState(57);

  return (
    <div className="links">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <button onClick={() => setLikes(likes + 1)}>{likes}</button>
      <h2>Projects</h2>
      <Link to="/projectone">First</Link>
      <Link to="/projecttwo">Second</Link>
      <Link to="/projectthree">Third</Link>
    </div>
  );
}
function ProjectOne() {
  return (
    <div>
      <h2>Learning HTML</h2>
      <p>
        HTML (HyperText Markup Language) is the standard language used to create
        and structure web pages. It acts as the "skeleton" of a website,
        defining where headings, paragraphs, images, and links appear before
        they are styled with CSS or made interactive with JavaScript.
      </p>
      <Link to="/">Go Back</Link>
    </div>
  );
}
function ProjectTwo() {
  return (
    <div>
      <h2>Learning CSS</h2>
      <p>
        Css is the language used to style and lay out web pages. While HTML
        provides the structure (the bones), CSS provides the visual design (the
        skin, clothes, and makeup)
      </p>
      <Link to="/">Go Back</Link>
    </div>
  );
}
function ProjectThree() {
  return (
    <div>
      <h2>Learning JAVA</h2>
      <p>
        JavaScript (JS): This is the third part of the web "trifecta" (HTML for
        structure, CSS for style, JS for interactivity). It runs directly in
        your web browser.
      </p>
      <Link to="/">Go Back</Link>
    </div>
  );
}
export default function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projectone" element={<ProjectOne />} />
        <Route path="/projecttwo" element={<ProjectTwo />} />
        <Route path="/projectthree" element={<ProjectThree />} />
      </Routes>
    </BrowserRouter>
  );
}
