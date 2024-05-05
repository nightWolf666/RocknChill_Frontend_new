import React, { useEffect, useState } from "react";
import { useBackgroundImage } from "../context/BackgroundImageContext.jsx";
import { useFetch } from "../hooks/useFetch.js";
import LoginButton from '../assets/icons/Logo.png';
import Background from '../assets/background/Background_Strand.png';
import Button from "../ui/Button.jsx";
import "../pages/Register.css";


const Register = () => {
  const { setBackgroundImage } = useBackgroundImage();
  const [user, setUser] = useState([]);
  const [user_name, setUserName] = useState("");
  const [passwort, setPasswort] = useState("");
  const [email, setEmail] = useState("");
  const [urlaubstage, setUrlaubstage] = useState("");
  const [budget, setBudget] = useState("");
  const [avatar_link, setAvatarLink] = useState("");

  const [error, backendFetchResult] = useFetch('https://pokeapi-be-5p2b.onrender.com/user');

  useEffect(() => {
    setBackgroundImage(Background);
  }, []);

  useEffect(() => {
    if (backendFetchResult?.length > 0) {
      setUser(backendFetchResult);
    }
  }, [backendFetchResult]);

  const handleRegister = () => {
    const userData = {
      user_name,
      passwort,
      email,
      urlaubstage,
      budget,
      avatar_link
    };

    fetch('https://pokeapi-be-5p2b.onrender.com/user', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Server response:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className="register-container">
      <h1>RocknChill</h1>
      <img src={Background} alt="background" />
      <input type="text" placeholder="Benutzername" value={user_name} onChange={(e) => setUserName(e.target.value)} />
      <input type="password" placeholder="Passwort" value={passwort} onChange={(e) => setPasswort(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="number" placeholder="Urlaubstage" value={urlaubstage} onChange={(e) => setUrlaubstage(e.target.value)} />
      <input type="number" placeholder="Budget (optional)" value={budget} onChange={(e) => setBudget(e.target.value)} />
      <input type="text" placeholder="Avatar Link (optional)" value={avatar_link} onChange={(e) => setAvatarLink(e.target.value)} />
      <Button onClick={handleRegister}>Registrieren</Button>
      <Button className="home-button" img={LoginButton} url="/login">Du hast bereits einen Account?</Button>
    </div>
  );
};

export default Register;