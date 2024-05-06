import React, { useEffect, useState } from "react";
import { useBackgroundImage } from "../context/BackgroundImageContext.jsx";
import { useFetch } from "../hooks/useFetch.js";
import LoginButton from '../assets/icons/Logo.png';
import Background from '../assets/background/Background_Strand.png';
import Button from "../ui/Button.jsx";
import styles from "../assets/css/login.module.css";

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
    <>
    <div className={styles.login}>
            <div className={styles.blur}></div>
            <div className={styles.container}>
              <div className={styles.wrapper}>
                <div className={styles.header}>
                  <div className={styles.line}></div>
                  <span className={styles.h1}>Register</span>
                  <div>
                    <span className={styles.h2}> Bitte registriere deinen Account
                    <input type="text" className="styledinput" placeholder="Benutzername" value={user_name} onChange={(e) => setUserName(e.target.value)} />
                    <br />
                    <input type="password" className="styledinput" placeholder="Passwort" value={passwort} onChange={(e) => setPasswort(e.target.value)} />
                    <br />
                    <input type="email" className="styledinput" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <input type="number" className="styledinput" placeholder="Urlaubstage" value={urlaubstage} onChange={(e) => setUrlaubstage(e.target.value)} />
                    <br />
                    <input type="number" className="styledinput" placeholder="Budget (optional)" value={budget} onChange={(e) => setBudget(e.target.value)} />
                    <br />
                    <input type="text" className="styledinput" placeholder="Avatar Link (optional)" value={avatar_link} onChange={(e) => setAvatarLink(e.target.value)} />
                    <br />
                    <button onClick={handleRegister}>Registrieren</button>
                    <div>
                      <Button text="Du hast bereits einen Account?" className="login-button" url="/login" />
                    </div>
                  </span>
                  </div>
                </div>
              </div>
            </div>
        </div>
    
    </>

    // <div>
    //   <h1>RocknChill</h1>      
    //   <input type="text" placeholder="Benutzername" value={user_name} onChange={(e) => setUserName(e.target.value)} />
    //   <input type="password" placeholder="Passwort" value={passwort} onChange={(e) => setPasswort(e.target.value)} />
    //   <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
    //   <input type="number" placeholder="Urlaubstage" value={urlaubstage} onChange={(e) => setUrlaubstage(e.target.value)} />
    //   <input type="number" placeholder="Budget (optional)" value={budget} onChange={(e) => setBudget(e.target.value)} />
    //   <input type="text" placeholder="Avatar Link (optional)" value={avatar_link} onChange={(e) => setAvatarLink(e.target.value)} />
    //   <button onClick={handleRegister}>Registrieren</button>
    //   {/* <button className="home-button" img={LoginButton} url="/login">Du hast bereits einen Account?</button> */}
    //   <Button text="Du hast bereits einen Account?" className="login-button" url="/login" />
    // </div>
  );
};

export default Register;