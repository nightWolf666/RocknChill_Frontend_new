import React, { useEffect, useState } from "react";
import { useNavigate,useParams} from "react-router-dom";
import { useBackgroundImage } from "../context/BackgroundImageContext.jsx";
import { useFetch } from "../hooks/useFetch.js";
import Logo from '../assets/icons/Logo.png';
import Background from '../assets/background/Background_Strand.png';
import Button from "../ui/Button.jsx";
import styles from "../assets/css/event_create.module.css";
import stage from "../assets/elements/Stage_Event.png";



import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { UNSAFE_mapRouteProperties } from "react-router";
const Event_Edit = () => {
  const { setBackgroundImage } = useBackgroundImage();
  const [user, setUser] = useState([]);
  const [event, setEvent] = useState("");
  const [currentEvent, setCurrentEvent] = useState("");
  const [event_name, setEvent_name] = useState("");
  const [event_ort, setEvent_ort] = useState("");
  const [event_beschreibung_kurz, setEvent_beschreibung_kurz] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [event_genre, setEvent_genre] = useState("");
  const [userref, setUserref] = useState(""); 
  const navigate = useNavigate();
  
  const { id } = useParams();

  useEffect(() => {
    console.log('Event', event);
    console.log('CurrentEvent', currentEvent);

}); 

useEffect(() => {
  fetch(import.meta.env.VITE_SERVER_URL + '/event/' + id)
    .then(response => response.json())
    .then((data) => {setCurrentEvent(data[0]);
                     setEvent(data[0])})
    .catch(error => console.error('Error:', error));
}, []);

 

  // const [error, backendFetchResult] = useFetch('https://rocknchill-backend-new-1.onrender.com/user/1');

  useEffect(() => {
    setBackgroundImage(Background);
  }, []);

  



    const handleEvent = (e) => {
      e.preventDefault();
      console.log(user);     
      

      const user_id = user.user_id;
      const eventData = {
        event_name,
        event_ort,
        event_start:startDate,
        event_ende:endDate,
        event_beschreibung_kurz,
        event_genre,
        user_id
      };

      updateFunction();
    };

    
      
    function updateFunction(){
      fetch(import.meta.env.VITE_SERVER_URL + '/event/' + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(currentEvent)
      })
      .then(response => response.json())
      .then(data => {
        const tempData = data[0].user_id;
        setUserref(tempData);
        navigate("/dashboard/user/" + data[0].user_id);
        console.log('Server response:', data);
      }) 
      .catch((error) => {
        console.error('Error:', error);
      });
    }


      const removeEvent = (e) => {
        e.preventDefault();
        deleteFunction();
       
      };

      function deleteFunction(){
        fetch(import.meta.env.VITE_SERVER_URL + '/event/' +id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          },
          
        })
        .then(response => response.json())
        .then(data => {
          const tempData = data[0].user_id;
          setUserref(tempData);
          navigate("/dashboard/user/" + data[0].user_id);
          console.log('Server response:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

  }

  return (
    <>
    
    <div className={styles.event_create}>
        <div className={styles.event_create_container}>
        <form className={styles.event_create_wrapper}>
            <div className={styles.event_create_header}>
              <img src={Logo} alt="" />
              <div>
                <img src={stage} alt="" />
              </div>
            </div>
            <div className={styles.event_create_main}>
              <div className={styles.event_create_inputs}>
                    <input type="text" className={styles.styledinput} placeholder="Veranstaltung" value={currentEvent.event_name} onChange={(e) => setCurrentEvent({ ...currentEvent, event_name: e.target.value})} />
                    <input type="text" className={styles.styledinput} placeholder="Ort" value={currentEvent.event_ort} onChange={(e) => setCurrentEvent({ ...currentEvent, event_ort: e.target.value})} />
                    <input type="text" className={styles.styledinput} placeholder="Info" value={currentEvent.event_beschreibung_kurz} onChange={(e) => setCurrentEvent({ ...currentEvent, event_beschreibung_kurz: e.target.value})} />
                    <input type="text" className={styles.styledinput} placeholder="Genre" value={currentEvent.event_genre} onChange={(e) => setCurrentEvent({ ...currentEvent, event_genre: e.target.value})} />
                    
                    
                  
                  <div className={styles.line}></div>
                  <div className={styles.event_create_styledbuttonInline}>
                    <Button type="submit" handleEvent={handleEvent} text="Event ändern" />
                    <Button type="submit" handleEvent={removeEvent} text="Event löschen" url="/dashboard"/>
                  </div>
                  </div>
                 </div> 
              </form>
            </div>
          </div>
            
            
        
        
        
    </>

    
  );
};



export default Event_Edit;