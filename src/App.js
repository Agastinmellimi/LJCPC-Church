import {Routes, Route} from 'react-router-dom'
import ViewAttendance from './Components/ViewAttendance';
import Home from './Components/Home';
import Graph from './Components/Graph';
import About from './Components/About';

import './index.css';

const App = () => (
  
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path='/children-progress' element={<Graph/>}/>
      <Route exact path="/attendance-details" element={<ViewAttendance/>} />
    </Routes>
 
)

export default App;
