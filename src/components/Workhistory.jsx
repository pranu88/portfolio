import React from 'react';
import myInfo from '../models/myInfo';

function Workhistory(props) {
  return (
    <div>
    <h3>Work History</h3>  
    {props.jobs.map((job)=>{return <li>{job}</li>})}
    </div>
  );
}

export default Workhistory
