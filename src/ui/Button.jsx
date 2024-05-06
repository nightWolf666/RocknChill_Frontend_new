import { Link } from "react-router-dom";

const Button = (props) => {
  const {url, img, text,className} = props
  return (
    <Link to={url}>
      <button className={className} style={{ backgroundColor: "transparent", border: "none", cursor: "pointer" }}>
        <img src={img} border="0"/>
        {text}
      </button>
    </Link>
  )
}


export default Button; 