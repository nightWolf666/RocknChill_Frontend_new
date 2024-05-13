import { useEffect } from "react";
import { useState } from "react";
import { useBackgroundImage } from "../context/BackgroundImageContext.jsx";
import { useFetch } from "../hooks/useFetch.js";
import Button from "../ui/Button.jsx";
import ProfilButton from '../assets/icons/electric.png';
import Background from '../assets/background/Background_Strand.png';
import styles from "../assets/css/profil.module.css";
import HomeButton from '../assets/icons/Logo.png';
import stage from "../assets/elements/Bühne_final.png";
import profil from "../assets/icons/profil.png";


function Profil() {

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
      <div className={styles.profil}>
        <div className={styles.profil_container}>
          <div className={styles.profil_wrapper}>
            <div className={styles.profil_header}>
              <img src={HomeButton} alt="" />
              <div className={styles.profileimg}>
                <img src={profil} alt="" />
              </div>
            </div>
            <div className={styles.profil_addEvent}>
            </div>

            <div className={styles.profil_main}> {/* TODO */}
              <div className={styles.line}></div>


              <div>
                <div className={styles.profil_UserStatus}>
                  <h1>Username</h1>
                  <p>Username</p>
                </div>
                <div className={styles.profil_UserStatus}>
                  <h1>Email</h1>
                  <p>Email</p>
                </div>
                <div className={styles.profil_UserStatus}>
                  <h1>Urlaubstage</h1>
                  <p>Urlaubstage</p>
                </div>
                <div className={styles.profil_UserStatus}>
                  <h1>Budget</h1>
                  <p>Budget</p>
                </div>
                <div className={styles.editpg}>
                <Button url="/dashboard" text="Zurück" />
                <Button url="/profil_edit" text="Editieren" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}
export default Profil;