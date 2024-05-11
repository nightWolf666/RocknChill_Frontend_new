import { Link } from "react-router-dom";
import styles from "../assets/css/login.module.css";

const Button = (props) => {
  const {url, img, text} = props
  return (
    <Link to={url}>
      <button className={styles.styledbutton} >
        <img src={img} border="0"/>
        {text}
      </button>
    </Link>
  )
}

export default Button; 