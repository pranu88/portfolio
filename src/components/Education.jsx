import React from 'react';
import myInfo from '../models/myInfo';

function Education(props) {
  return (
    <div> 
    <h3>Education</h3>
    {props.schools.map((school) => {return<li>{school}</li>})}
    </div>
  )
}

export default Education