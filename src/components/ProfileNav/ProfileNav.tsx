import "./ProfileNav.css"
import downArrowIcon from "../../assets/images/icons/DownArrow.png"
import profilePic from "../../assets/images/profilePic.avif"

const ProfileNav = () => {
  return (
    <nav className="profileNav">
        <section className="locationSection">
            <div className="locationTitle">
                <h2>Localidade</h2>
                <img src={downArrowIcon} alt="Down Arrow Icon" />
            </div>
        <p>Lisboa, PT</p>
        </section>

        <section className="profileSection">
        <span className="profileContainer">
            <img src={profilePic} alt="Profile Picture" />
            </span>
        </section>

    </nav>
  )
}

export default ProfileNav