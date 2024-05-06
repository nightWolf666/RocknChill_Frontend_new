import { useEffect } from "react";
import { useState } from "react";
import { useBackgroundImage } from "../context/BackgroundImageContext.jsx";
import { useFetch } from "../hooks/useFetch.js";
import Button from "../ui/Button.jsx";
import HomeButton from '../assets/icons/Logo.png';
import Background from '../assets/background/Background_Strand.png';
import styles from "../assets/css/login.module.css";
import stage from "../assets/elements/Bühne_final.png";




const Login = () => {

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
    <>
          <div className={styles.login}>
            <div className={styles.blur}></div>
            <div className={styles.container}>
              <div className={styles.wrapper}>
                <div className={styles.header}>
                  <span className={styles.h1}>Login</span>
                  <div>
                    <span className={styles.h2}> Bitte log dich mit deinen Account ein
                    <input type="text" className={styles.styledinput} />
                    <br />
                    <input type="text" className={styles.styledinput} />
                    <br />
                    <button className={styles.styledbutton}>Login</button>
                    <br />
                    <br />
                    <div className={styles.line}></div>
                    <br />
                    <div className={styles.bereitsreg}>
                      <span className={styles.first}>Du hast noch keinen Account?</span>
                      <a href="http://localhost:5173/register">
                        <span className={styles.reg}>Registrieren</span>
                      </a>
                    </div>
                  </span>
                  </div>
                  </div>
              </div>
            </div>
        </div>
    <div>
      <Button className="home-button" img={HomeButton} url="/dashboard"/>
    </div>
  </>
  )
}

export default Login;


