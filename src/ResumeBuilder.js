import { useEffect, useState } from "react";

export default function ResumeBuilder() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [college, setCollege] = useState("");
  const [cgpa, setCgpa] = useState(0.0);
  const [skills, setSkills] = useState([]);
  const [submitted, setsubmitted] = useState(false);
  function HandleNameChange(newname) {
    setName(newname);
  }

  function HandleAgeChange(newage) {
    setAge(newage);
  }

  function HandleCollegeChange(newcollege) {
    setCollege(newcollege);
  }

  function HandleCgpaChange(newcgpa) {
    setCgpa(newcgpa);
  }

  function HandleCheckboxClick(skill) {
    // if check if array skill -> if already
    // if already present -> remove otherwise add
    const found = skills.includes(skill);
    if (found == false) {
      // not found
      setSkills([...skills, skill]);
    } else {
      setSkills((prevSkills) => {
        return prevSkills.filter((item) => {
          if (item == skill) {
            return false;
          }
          return true;
        });
      });
    }
  }

  function HandleButton() {
    setsubmitted(true);
  }

  return (
    <div>
      Enter name:{" "}
      <input
        type="string"
        value={name}
        onChange={(e) => {
          HandleNameChange(e.target.value);
        }}
      />
      <br />
      <br />
      Enter Age:{" "}
      <input
        type="number"
        value={age}
        onChange={(e) => {
          HandleAgeChange(e.target.value);
        }}
      />
      <br />
      <br />
      Enter College:{" "}
      <input
        type="string"
        value={college}
        onChange={(e) => {
          HandleCollegeChange(e.target.value);
        }}
      />
      <br />
      <br />
      Enter CGPA:{" "}
      <input
        type="number"
        step={0.1}
        value={cgpa}
        placeholder="upto one decimal places"
        onChange={(e) => {
          HandleCgpaChange(e.target.value);
        }}
      />
      <br />
      <br />
      Select Skills:
      <input
        type="checkbox"
        id="html"
        checked={skills.includes("HTML")}
        onChange={() => {
          //console.log(id);
          HandleCheckboxClick("HTML");
        }}
      />
      <label>HTML</label>
      <input
        type="checkbox"
        id="css"
        checked={skills.includes("CSS")}
        onChange={() => {
          HandleCheckboxClick("CSS");
        }}
      />
      <label>CSS</label>
      <input
        type="checkbox"
        id="js"
        checked={skills.includes("JS")}
        onChange={() => {
          HandleCheckboxClick("JS");
        }}
      />
      <label>JS</label>
      <input
        type="checkbox"
        id="react"
        checked={skills.includes("REACT")}
        onChange={() => {
          HandleCheckboxClick("REACT");
        }}
      />
      <label>REACT</label>
      <br />
      <br />
      <button onClick={HandleButton}>Build Resume</button>
      {submitted == false ? (
        <h5>Submit to generate resume</h5>
      ) : (
        <div>
          <h3>
            My name is {name} and my age is {age}. I am currently studying in{" "}
            {college} and my current CGPA is {cgpa}. My skillset includes-{" "}
          </h3>
          {skills.map((item) => {
            return <h3>{item}</h3>;
          })}
        </div>
      )}
    </div>
  );
}
