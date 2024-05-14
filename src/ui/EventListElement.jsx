
import { useState} from "react";
import styles from "../assets/css/eventlistelement.module.css";

export default function EventListElement({event_name, event_ort, startDate, endDate, id, setEvents}) {

    const removeEvent = (id) => {
        setEvents((prev) =>
          prev.filter((item) => item.id !== id)
        );
      };


    

    return (
        <>
        <div className={styles.wrapper}>
            <ul className={styles.events}>
            <input type="hidden" value={id}/>
                <li>{event_name}</li>
                <li>{startDate}</li>
                <li>{endDate}</li>
                <li>{event_ort}</li>
            </ul>
            <div className={styles.buttons}>
                <button className={styles.editremove} onClick={() => removeEvent(id)}>Löschen</button>
            </div>
        </div>
        </>
    )
};
