
import { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styles from "../assets/css/eventlistelement.module.css";
import { DateTime } from 'luxon';

export default function EventListElement({event_name, event_ort, startDate, endDate, event_dauer, id, setEvents, user_id}) {

const [start, setStart] = useState(startDate);
const [ende, setEnde] = useState(endDate);
const navigate = useNavigate();

    const removeEvent = (id) => {
      fetch(import.meta.env.VITE_SERVER_URL + '/event/' +id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        
      })
      .then(response => response.json())
      .then(data => {
        navigate("/dashboard/user/" + user_id);
        console.log('Server response:', data);
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      };

      const timestart = DateTime.fromISO(start);
    //   const time = startDate.toISOString();
     const  tempTimestart = timestart.setLocale('de').toFormat('yyyy LLL dd')
     
     useEffect(() => {
        setStart(tempTimestart);
      }, []);

      const timeende = DateTime.fromISO(ende);
      const tempTimeende = timeende.setLocale('de').toFormat('yyyy LLL dd')
      
      useEffect(() => {
        setEnde(tempTimeende);
      }, []);
         // "4/19/2023, 3:25:54 PM"
    //   console.log(dt.toFormat('yyyy-MM-dd')); // "2023-04-19"
    
    const handleEditEvent = (e) => {
        e.preventDefault();
        
          
          
          navigate("/event_edit/" + id);
          
          
        
        
      };

    return (
        <>
        <div className={styles.wrapper}>
            <ul className={styles.events}>
            <input type="hidden" value={id}/>
                <li onClick={handleEditEvent}>{event_name}</li>
                <li>{start}</li>
                <li>{ende}</li>
                <li>{event_ort}</li>
                <li>{event_dauer}</li>
            </ul>
            <div className={styles.buttons}>
                <button className={styles.editremove} onClick={() => removeEvent(id)}>Löschen</button>
            </div>
        </div>
        </>
    )
};
