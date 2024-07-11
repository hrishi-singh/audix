import Home from "./Frontend/Home";
import Navbar from "./Frontend/Navbar";
import AllAudioBooks from "./Frontend/AllAudioBooks";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./Frontend/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import BookDescription from "./Frontend/BookDescription";
function App() {
  const [mainData, setMainData] = useState([]);
  const getData = async () => {
    const res = await axios.get(`https://audix-api.vercel.app/audiobooks`);
    setMainData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={mainData} />} />
        <Route
          path="/all-audiobooks"
          element={<AllAudioBooks data={mainData.slice(0,24)} />}
        />
         <Route
          path="/details/:id"
          element={<BookDescription/>}
        
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
