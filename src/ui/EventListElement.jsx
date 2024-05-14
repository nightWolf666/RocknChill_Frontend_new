
import { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styles from "../assets/css/eventlistelement.module.css";
import { DateTime } from 'luxon';

export default function EventListElement({event_name, event_ort, startDate, endDate, id, setEvents}) {

const [start, setStart] = useState(startDate);
const [ende, setEnde] = useState(endDate);
const navigate = useNavigate();

    const removeEvent = (id) => {
        setEvents((prev) =>
          prev.filter((item) => item.id !== id)
        );
      };

      let time = DateTime.fromISO(start);
    //   const time = startDate.toISOString();
     let tempTime = time.setLocale('de').toFormat('yyyy LLL dd')
     
     useEffect(() => {
        setStart(tempTime);
      }, []);

      time = DateTime.fromISO(ende);
      tempTime = time.setLocale('de').toFormat('yyyy LLL dd')
      
      useEffect(() => {
        setEnde(tempTime);
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
            </ul>
            <div className={styles.buttons}>
                <button className={styles.editremove} onClick={() => removeEvent(id)}>Löschen</button>
            </div>
        </div>
        </>
    )
};
