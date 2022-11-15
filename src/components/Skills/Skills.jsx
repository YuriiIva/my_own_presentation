import React from 'react'

const Skills = () => {
  return (
    <div>
      <div>
        <img src={require("../../images/IMG_0830.jpg")} alt="" width={50}/>
      <h2>TECH SKILLS</h2>
      <ul>
        <li>
          <p>HTML5/CSS3/SASS</p>
        </li>
        <li>
          <p>GIT</p>
        </li>
        <li>
          <p>JavaScript</p>
        </li>
        <li>
          <p>React</p>
        </li>
        <li>
          <p>Redux</p>
        </li>
        <li>
          <p>Redux Toolkit</p>
        </li>
        <li>
          <p>Node.js</p>
        </li>
        <li>
          <p>MongoDB</p>
        </li>
        <li>
          <p>Mongoose</p>
        </li>
        <li>
          <p>REST API</p>
        </li>
        <li>
          <p>Netlify</p>
        </li>
      </ul>
      </div>

      <h2>SOFT SKILLS</h2>
      <ul>
        <li>
          <p>Experience working in a team</p>
        </li>
        <li>
          <p>Positive</p>
        </li>
        <li>
          <p>Autonomous</p>
        </li>
        <li>
          <p>Attentive</p>
        </li>
      </ul>
      <h2>LANGUAGE SKILLS</h2>
      <ul>
        <li>
          <p>English (intermediate)</p>
        </li>
        <li>
          <p>Ukrainian (Native)</p>
        </li>
        <li>
          <p>Russian (Native)</p>
        </li>
      </ul>
    </div>
  )
}

export default Skills