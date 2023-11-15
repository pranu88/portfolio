import React from 'react';
import myInfo from '../models/myInfo';
function Skills(props) {
  return (
    <div><h3>Skills</h3>    
        {props.skill.map((skl) => {return<li>{skl}</li>})}
    </div>
  )
}

export default Skills