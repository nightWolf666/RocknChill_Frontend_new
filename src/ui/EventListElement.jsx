import { useState} from "react";
import styles from "../assets/css/dashboard.module.css";

export default function EventListElement({event_name, event_ort, startDate, endDate, id, setEvents}) {

    const removeEvent = (id) => {
        setEvents((prev) =>
          prev.filter((item) => item.id !== id)
        );
      };


    

    return (
        <>
        {/* <li className="li-list-element" > */}
            <ul className={styles.dasboard_ul_list_element}>
                <li className={styles.dasboard_li_list_element}>{event_name}</li>
                <li className={styles.dasboard_li_list_element}>{startDate}</li>
                <li className={styles.dasboard_li_list_element}>{endDate}</li>
                <li className={styles.dasboard_li_list_element} >{event_ort}</li>
                
            </ul>
            <span className={styles.dasboard_ul_list_btn}>
                <button>Ändern</button>
                <button onClick={() => removeEvent(id)}>Löschen</button>
            </span>
        
        </>
    )
};