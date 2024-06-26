import { useEffect } from "react";
import { useState } from "react";
import { useNavigate,useParams} from "react-router-dom";
import { useBackgroundImage } from "../context/BackgroundImageContext.jsx";
import { useFetch } from "../hooks/useFetch.js";
import Button from "../ui/Button.jsx";
import Background from '../assets/background/Background_Strand.png';
import styles from "../assets/css/dashboard.module.css";
import HomeButton from '../assets/icons/Logo.png';
import stage from "../assets/elements/Stage_Dashboard.png";
import EventList from "../ui/EventList.jsx";



function Dashboard() {

  const { setBackgroundImage } = useBackgroundImage();
  // const [user, setUser] = useState([]);
  // const [events, setEvents] = useState ([])
  const navigate = useNavigate();
  const { id } = useParams();

    const [error, events, setEvents] = useFetch(import.meta.env.VITE_SERVER_URL + "/event/user/" + id);

  const [errorres, user, setUser] = useFetch(import.meta.env.VITE_SERVER_URL + "/user/" + id);
  
  



  
  useEffect(() => {
    setBackgroundImage(Background);
  }, []);

  
    // if (backendFetchResult?.length > 0) {
    //   console.log('Events:',backendFetchResult);
    //   setEvents(backendFetchResult);
    // }
  

  
    // if (userFetchResult?.length > 0) {
    //   console.log('User:',userFetchResult);
    //   setUser(userFetchResult);
    // }
  


  const handleAddEvent = (e) => {
    e.preventDefault();
    
      
      
      navigate("/event_create/user/" + id);
      
      
    
    
  };

  return (
    <>
      <div className={styles.dasboard}>
        <div className={styles.dasboard_container}>
          <div className={styles.dasboard_wrapper}>
            <div className={styles.dasboard_header}>
              <img src={HomeButton} alt="" />
              <div>
                <img src={stage} alt="" />
              </div>
              <div>
                <h2>Veranstaltung</h2>
                <h2>Datum</h2>
                <h2>Ort</h2>
                <h2>Dauer</h2>
              </div>
            </div>
            <div className={styles.dasboard_addEvent}>
              <Button handleEvent={handleAddEvent} text="Hinzufügen" />
            </div>
            
            <div className={styles.dasboard_main}>
                <div className={styles.line}></div>
                <EventList events={events} setEvents={setEvents} user_id={id}/>

              {/* <ul>
                <li>
                  <div></div>
                  <div></div>
                  <div></div>
                  <span>x</span>
                </li>
                <li>
                  <div></div>
                  <div></div>
                  <div></div>
                  <span>x</span>
                </li>
                <li>
                  <div></div>
                  <div></div>
                  <div></div>
                  <span>x</span>
                </li>
              </ul> */}
            </div>
            <div>
              <div className={styles.dasboard_UserStatus}>
                <h1>Übrige Urlaubstage</h1>
                <p>{user[0]?.urlaubstage}</p>
              </div>
              <div className={styles.dasboard_UserStatus}>
                <h1>Budget</h1>
                <p>{user[0]?.budget}</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>

    </>
  )
}
export default Dashboard;