import React, { useEffect, useState } from "react";
import { useBackgroundImage } from "../context/BackgroundImageContext.jsx";
import { useFetch } from "../hooks/useFetch.js";
import LoginButton from '../assets/icons/Logo.png';
import Background from '../assets/background/Background_Strand.png';
import Button from "../ui/Button.jsx";
import styles from "../assets/css/profil_edit.module.css";

const Profil_Edit = () => {
  const { setBackgroundImage } = useBackgroundImage();
  const [user, setUser] = useState(null);
  const [user_name, setUserName] = useState("");
  const [passwort, setPasswort] = useState("");
  const [email, setEmail] = useState("");
  const [urlaubstage, setUrlaubstage] = useState("");
  const [budget, setBudget] = useState("");
  const [avatar_link, setAvatarLink] = useState("");

  // const [error, backendFetchResult] = useFetch(import.meta.env.VITE_SERVER_URL + '/user');

  useEffect(() => {
    setBackgroundImage(Background);
  }, []);

  // useEffect(() => {
  //   if (backendFetchResult?.length > 0) {
  //     setUser(backendFetchResult);
  //   }
  // }, [backendFetchResult]);

  const handleProfil_Edit = (e) => {
    e.preventDefault();
    const userData = {
      user_name,
      passwort,
      email,
      urlaubstage,
      budget,
      
    };

    fetch(import.meta.env.VITE_SERVER_URL + '/user', {
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
    <div className={styles.Profil_Edit}>
            <div className={styles.blur}></div>
            <div className={styles.container}>
              <form onSubmit={handleProfil_Edit} className={styles.wrapper}>
                <div className={styles.header}>
                  <div className={styles.line}></div>
                  <span className={styles.h1}>Register</span>
                  <div>
                    <span className={styles.h2}> Änderungen Profildaten
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
                   
                    <button className={styles.styledbutton} >Änderungen Speichern</button>
                    </span>
                  </div>
                </div>
              </form>
            </div>
        </div>
    </>
  );
};

export default Profil_Edit;