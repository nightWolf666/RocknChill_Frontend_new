
import { useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import EventListElement from "./EventListElement.jsx"


const EventList = ({events, setEvents, user_id }) => {

    
    return (
        <>
            
            <div className="dasboard_list">
                <ul className="ul-list-list">
                    {events.map((event) => (
                    <EventListElement 
                    key={event.event_id} 
                    id={event.event_id}
                    event_name={event.event_name}
                    event_ort={event.event_ort}
                    startDate={event.event_start}
                    endDate={event.event_ende}
                    event_dauer={event.event_dauer}
                    setEvents={setEvents}
                    user_id={user_id}
                    />
                    ))}
                </ul>
            </div>
        </> 
        )
    };

export default EventList
