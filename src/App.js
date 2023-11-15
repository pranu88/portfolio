
import './App.css';
import {useState} from 'react';
import myInfo from './models/myInfo';
import Contact from './components/Contact';
import Education from './components/Education';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Workhistory from './components/Workhistory';

function App() {
const [data, setData] = useState(myInfo)

  return (
    <div className="App">
      
      <h1> {data.name}</h1>
      <Contact mail = {myInfo.contact}/>   
      <Education schools = {myInfo.education} />
      <Workhistory jobs = {myInfo.jobExp}/>     
      <Skills skill = {myInfo.languages}/>
      
    </div>
  );
}

export default App;
