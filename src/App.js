import React from 'react'
import {BrowserRouter as Router,Route, } from 'react-router-dom';
import {Files} from './Files';
import newFile from './newFile';
import {Header} from './Header';
function App() {
  return (
    <Router>
      <Header/>
      <Route path="/" exact component={Files}/>
      <Route path="/addFile" component={newFile}/>
    </Router>
  )
}

export default App
