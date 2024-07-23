import "./NavBar.css"
import { Link } from "react-router-dom"
import homeIcon from "../../assets/images/icons/icons8-home-48.png"
import chatIcon from "../../assets/images/icons/icons8-chat.png"
import heartIcon from "../../assets/images/icons/Heart-icon.png"
import userIcon from "../../assets/images/icons/User-icon.png"
import pawIcon from "../../assets/images/icons/Cat Footprint.png"


const NavBar = () => {
  return (
    <div className="navContainer">
    <div className="iconsGroup leftGroup">
      <Link to="/"> <img src={homeIcon} alt="Home Icon" /></Link>
      <Link to="/"> <img src={chatIcon} alt="Chat Icon" /></Link>
    </div>
    <div className="centerIcon">
      <Link to="/"> <img src={pawIcon} alt="Paw Icon" /></Link>
    </div>
    <div className="iconsGroup rightGroup">
      <Link to="/favorites"> <img src={heartIcon} alt="Heart Icon" /></Link>
      <Link to="/"> <img src={userIcon} alt="User Icon" /></Link>
    </div>
  </div>
  )
}

export default NavBar