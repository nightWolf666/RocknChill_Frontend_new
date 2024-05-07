
import React, { useEffect, useState } from "react";
import styles from "../assets/css/profil.module.css";

const Profil = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://rocknchill-backend-new-1.onrender.com/user')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setUser(data[0]); // Set the first user
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setError(error.toString());
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.profil}>
      <div className={styles.blur}></div>
      <div className={styles.container}>
        <form className={styles.wrapper}>
          <div className={styles.header}>
            <div className={styles.line}></div>
            <span className={styles.h1}>Profil</span>
            <div>
              <span className={styles.h2}>Benutzername:</span> 
              <span className={styles.styledinput}>{user.user_name}</span>
              <br />
              <span className={styles.h2}>Email:</span> 
              <span className={styles.styledinput}>{user.email}</span>
              <br />
              <span className={styles.h2}>Passwort:</span> 
              <span className={styles.styledinput}>{user.passwort}</span>
              <br />
              <span className={styles.h2}>Urlaubstage:</span> 
              <span className={styles.styledinput}>{user.urlaubstage}</span>
              <br />
              <span className={styles.h2}>Budget:</span> 
              <span className={styles.styledinput}>{user.budget}</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profil;