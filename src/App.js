import React, { useEffect, useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Contest from './components/Contest';
import { List } from '@mui/icons-material';
const API = "https://kontests.net/api/v1/all";

function App() {
  const [contest, setContest] = useState("all");

  const [alldata, setAlldata] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [platformList, setPlatformList] = useState();

  const handleContest = (value) => {
    setContest(value);

  }

  const handlePlatform = (name) => {

    if (name == "all") {
      setOngoing(alldata.filter(data => data.status === "CODING" && data.start_time.slice(11, 16) != data.end_time.slice(11, 16)))
      setUpcoming(alldata.filter(data => data.status === "BEFORE" && data.start_time.slice(11, 16) != data.end_time.slice(11, 16)))
    }
    else {
      setOngoing(alldata.filter(data => data.status === "CODING" && name == data.site && data.start_time.slice(11, 16) != data.end_time.slice(11, 16)))
      setUpcoming(alldata.filter(data => data.status === "BEFORE" && name == data.site && data.start_time.slice(11, 16) != data.end_time.slice(11, 16)))
    }
  }

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(datas => {
        setAlldata(datas)
        setOngoing(datas.filter(data => data.status === "CODING" && data.start_time.slice(11, 16) != data.end_time.slice(11, 16)))
        setUpcoming(datas.filter(data => data.status === "BEFORE" && data.start_time.slice(11, 16) != data.end_time.slice(11, 16)))

        setPlatformList(datas.map(data => data.site));

      });
  }, []);

  const checkContest = () => {
    if (contest == "all") {
      return (
        <div>
          <Contest name="Ongoing Contests" content={ongoing} />
          <Contest name="Upcoming Contests" content={upcoming} />
        </div>
      )
    }
    else if (contest == "Ongoing") {
      return (
        <Contest name="Ongoing Contests" content={ongoing} />
      )
    }
    else if (contest == "Upcoming") {
      return (
        <Contest name="Upcoming Contests" content={upcoming} />
      )
    }
  }

  return (
    <div className="App">
      <Navbar handleContest={handleContest} handlePlatform={handlePlatform} platformList={platformList} />
      {checkContest()}

    </div>
  );
}

export default App;
