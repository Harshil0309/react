import { useEffect, useState } from "react";

export default function ResumeBuilder() {
  const skillset = ["HTML", "CSS", "JS", "REACT"];
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [college, setCollege] = useState("");
  const [cgpa, setCgpa] = useState(0.0);
  const [skills, setSkills] = useState([]);
  const [submitted, setsubmitted] = useState(false);
  function HandleNameChange(newname) {
    setName(newname);
  }

  function handleAgeChange(newage) {
    setAge(newage);
  }

  function handleCollegeChange(newcollege) {
    setCollege(newcollege);
  }

  function handleCgpaChange(newcgpa) {
    setCgpa(newcgpa);
  }

  function handleCheckboxClick(skill) {
    const found = skills.includes(skill);
    if (found == false) {
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
          handleAgeChange(e.target.value);
        }}
      />
      <br />
      <br />
      Enter College:{" "}
      <input
        type="string"
        value={college}
        onChange={(e) => {
          handleCollegeChange(e.target.value);
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
          handleCgpaChange(e.target.value);
        }}
      />
      <br />
      <br />
      Select Skills:
      {skillset.map((item) => {
        return (
          <div>
            <input
              type="checkbox"
              checked={skills.includes(item)}
              onChange={() => {
                handleCheckboxClick(item);
              }}
            />{" "}
            <label>{item}</label>
          </div>
        );
      })}
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
