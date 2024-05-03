import { Link } from "react-router-dom";

const Button = (props) => {
  const {url, img, text} = props
  return (
    <Link to={url}>
      <button text={text} style={{ backgroundColor: "transparent", border: "none", cursor: "pointer" }}>
        <img src={img} border="0" />
      </button>
    </Link>
  )
}


export default Button; 