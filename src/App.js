import './App.css';
import { APIOptions } from './Components/APIOptions';
import { Routes } from "react-router-dom"
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';


import topUsers from './Components/topUsers';
import trendingPost from './Components/Feed';
import Feed from './Components/trendingPost';
import TopUsers from './Components/topUsers';
import TrendingPost from './Components/Feed';
function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<APIOptions/>}/>
      <Route path="/topUsers" element={<TopUsers/>}/>
      <Route path ="/trendingPost" element={<TrendingPost/>}/>
      <Route path="/feed" element={<Feed/>}/>

      </Routes>
      </BrowserRouter>
  
  );
}

export default App;
