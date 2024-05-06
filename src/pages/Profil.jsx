import { useEffect } from "react";
import { useState } from "react";
import { useBackgroundImage } from "../context/BackgroundImageContext.jsx";
import { useFetch } from "../hooks/useFetch.js";
import Button from "../ui/Button.jsx";
import HomeButton from '../assets/icons/Logo.png';
import Background from '../assets/background/Background_Strand.png';



const Profil = () => {

  const { setBackgroundImage } = useBackgroundImage();
  const [user, setUser] = useState([]);

  const [error, backendFetchResult] = useFetch(import.meta.env.VITE_SERVER_URL + "/user");

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
      <Button className="home-button" img={HomeButton} url="/dashboard"/>
    </div>
  )
}

export default Profil;