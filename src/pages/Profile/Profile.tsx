import { Link } from "react-router-dom";
import "./Profile.css";
import profilePic from "../../assets/images/profilePic.avif";
import locationIcon from "../../assets/images/icons/LocationIcon.png";
import PetCard from "../../components/PetCard/PetCard";
import NavBar from "../../components/NavBar/NavBar";
import backIcon from "../../assets/images/icons/BackIcon.png";
import { useFavorites } from "../../context/FavoritesContext";

const Profile = () => {
  const { favoritePets } = useFavorites();

  return (
    <div className="profileLayout">
      <div className="headerSection">
        <Link to="/">
          <img className="backButtonProfile" src={backIcon} alt="Back Icon" />
        </Link>
        <Link to="/edit-profile">
          <p className="editButtonProfile">Edit</p>
        </Link>
        <div className="profileImageContainer">
          <img src={profilePic} alt="Profile" className="profileImage" />
        </div>
        <div className="profileDetails">
          <h1>Hello, Alana!</h1>
          <p>alana.lee@gmail.com</p>
          <div className="locationContainer">
            <img src={locationIcon} alt="Location Icon" />
            <p>Lisbon, PT</p>
          </div>
        </div>
      </div>

      <div className="buttonsContainerProfile">
        <Link to="/messages" className="profileButton">My Messages</Link>
        <Link to="/adoption-rules" className="profileButton">Rules of Adoption</Link>
      </div>

      <div className="favoritePetsSection">
        <h2>Favorite Pets</h2>
        <div className="favoritePetsContainer">
          {favoritePets.length > 0 ? (
            favoritePets.map((pet, index) => (
              <PetCard
                key={index}
                image={pet.image}
                name={pet.name}
                age={pet.age}
                size={pet.size}
                gender={pet.gender}
              />
            ))
          ) : (
            <p>No favorite pets yet!</p>
          )}
        </div>
      </div>

      <NavBar />
    </div>
  );
};

export default Profile;
