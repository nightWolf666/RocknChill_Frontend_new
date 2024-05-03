import { useEffect } from "react";
import { useState } from "react";
import { useBackgroundImage } from "../context/BackgroundImageContext.jsx";
import { useFetch } from "../hooks/useFetch.js";
import Button from "../ui/Button.jsx";
import HomeButton from '../assets/icons/Logo.png';
import Background from '../assets/background/Background_Strand.png';


import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


function Event_Create() {

  const { setBackgroundImage } = useBackgroundImage();
  const [user, setUser] = useState([]);

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  
  console.log("startDate:" + startDate);
  console.log("endDate:" + endDate);
  

  const [error, backendFetchResult] = useFetch(import.meta.env.VITE_SERVER_URL + "/event");

  useEffect(() => {
    setBackgroundImage(Background);
  }, []);

  useEffect(() => {
    if (backendFetchResult?.length > 0) {
      setUser(backendFetchResult);
    }
  }, [backendFetchResult]);

  return (
    <div>
        <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setDateRange(update);
      }}
      withPortal
    />

      <Button className="home-button" img={HomeButton} url="/dashboard"/>
    </div>
  )
}

export default Event_Create;