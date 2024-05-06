import React, { useEffect, useState } from "react";
import { useBackgroundImage } from "../context/BackgroundImageContext.jsx";
import Background from '../assets/background/Background_Strand.png';
import "../pages/Profil.css";

const Profil = () => {
  const { setBackgroundImage } = useBackgroundImage();
  const [user, setUser] = useState(null);

  useEffect(() => {
    setBackgroundImage(Background);
  }, []);

  useEffect(() => {
    fetch('https://pokeapi-be-5p2b.onrender.com/user')
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error:', error));
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profil-container">
      <h1>RocknChill</h1>
      <img src={Background} alt="background" />
      <p>Benutzername: {user.user_name}</p>
      <p>Email: {user.email}</p>
      <p>Urlaubstage: {user.urlaubstage}</p>
      <p>Budget: {user.budget}</p>
      <p>Avatar Link: {user.avatar_link}</p>
    </div>
  );
};

export default Profil;