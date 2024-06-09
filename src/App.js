import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

const App = () => {

  const pageSize = 10;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progress}
            height={3}
          />
          <Routes>
            <Route exact path='/business' element={<News pageSize={pageSize} setProgress={setProgress} apiKey = {apiKey} key="business" country='in' category='Business' />}></Route>
            <Route exact path='/entertainment' element={<News pageSize={pageSize} setProgress={setProgress} apiKey = {apiKey} key="entertainment" country='in' category='Entertainment' />}></Route>
            <Route exact path='/general' element={<News pageSize={pageSize} setProgress={setProgress} apiKey = {apiKey} key="general" country='in' category='General' />}></Route>
            <Route exact path='/health' element={<News pageSize={pageSize} setProgress={setProgress} apiKey = {apiKey} key="health" country='in' category='Health' />}></Route>
            <Route exact path='/science' element={<News pageSize={pageSize} setProgress={setProgress} apiKey = {apiKey} key="science" country='in' category='Science' />}></Route>
            <Route exact path='/sports' element={<News pageSize={pageSize} setProgress={setProgress} apiKey = {apiKey} key="sports" country='in' category='Sports' />}></Route>
            <Route exact path='/technology' element={<News pageSize={pageSize} setProgress={setProgress} apiKey = {apiKey} key="technology" country='in' category='Technology' />}></Route>
          </Routes>
        </Router>
      </div>
    )
}


  export default App;