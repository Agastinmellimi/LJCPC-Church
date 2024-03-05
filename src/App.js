import { Component } from 'react';
import {Routes, Route} from 'react-router-dom'
import ViewAttendance from './Components/ViewAttendance';
import HandlerContext from './Context/HandlerContext';
import Home from './Components/Home';
import Graph from './Components/Graph';
import About from './Components/About';
import Services from './Components/Services';

import './index.css';

class App extends Component {
  state = {language: 'english'}

  setLanguage = (language) => {
        this.setState({language})
  }

  render() {
        const {language} = this.state
        return (
            <HandlerContext.Provider value={{language, setLanguage: this.setLanguage}}>
             <Routes>
                  <Route exact path="/" element={<Home/>} />
                  <Route exact path="/about" element={<About/>} />
                  <Route exact path='/children-progress' element={<Graph/>}/>
                  <Route exact path="/attendance-details" element={<ViewAttendance/>} />
                  <Route exact path='/church-timings' element={<Services/>}/>
              </Routes>
            </HandlerContext.Provider>
        )
  }
} 

export default App;
