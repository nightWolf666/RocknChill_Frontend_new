import { Link } from "react-router-dom";
import styles from "../assets/css/event_create.module.css";

const Button = (props) => {
  const {url, img, text,type} = props
  
  return (
    <Link to={url}>
      <button onClick={props.handleEvent} type={type} className={styles.styledbutton} >
        <img src={img} border="0"/>
        {text}
      </button>
    </Link>
  )
}

export default Button; 