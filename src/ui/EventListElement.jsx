
import { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch.js";
import useForceUpdate from 'use-force-update';
import styles from "../assets/css/eventlistelement.module.css";
import { DateTime } from 'luxon';




export default function EventListElement({event_name, event_ort, startDate, endDate, event_dauer, id, setEvents, user_id}) {

const [start, setStart] = useState(startDate);
const [ende, setEnde] = useState(endDate);
const [userInstance , setUserInstance] = useState();
const [filterArray ,setFilterArray] = useState([]); 

const forceUpdate = useForceUpdate();

const [error, tmpevents, setTmpEvents] = useFetch(import.meta.env.VITE_SERVER_URL + "/event/user/" + user_id);






const navigate = useNavigate();

    

const [elementToRemove, setElementToRemove] = useState([]);

const removeEvent = () => {
    fetch(import.meta.env.VITE_SERVER_URL + '/event/' +id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      
    })
    .then(response => response.json())
    .then(data => {
      setElementToRemove(data[0]);
      updateEvents(data[0]);
            
      // navigate("/dashboard/user/" + data[0].user_id);
      console.log('Server response:', data[0]);
      console.log('Frontend response:', elementToRemove);
      
      
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    
    };

    // function someMethod() {
    //   setUserInstance({ ...userInstance });
    //  }

    function updateEvents(elementToRemove){

        console.log("To remove:",elementToRemove);

        setTmpEvents(prev => prev.filter(filterArr=> filterArr !== elementToRemove ))
        console.log(tmpevents);
        setEvents(tmpevents);
        forceUpdate();
        
    }   
    
        
  
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
