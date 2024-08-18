import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import IconsDetails from "../../components/IconsDetails/IconsDetails";
import "./PetDetails.css";
import backIcon from "../../assets/images/icons/BackIcon.png";
import heartIcon from "../../assets/images/icons/Heart-icon.png";
import locationIcon from "../../assets/images/icons/LocationIcon.png";
import maleIcon from "../../assets/images/icons/MaleIconYellow.png";
import femaleIcon from "../../assets/images/icons/FemaleIcon.png";
import dogIcon from "../../assets/images/icons/DogIcon.png";
import catIcon from "../../assets/images/icons/CatIcon.png";
import { useFavorites } from "../../context/FavoritesContext";

const PetDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pet } = location.state || {};
  const { addFavoritePet } = useFavorites();

  if (!pet) {
    return <div>Pet not found</div>;
  }

  const handleAddToFavorites = () => {
    addFavoritePet(pet);
  };

  return (
    <div className="petDetailsLayout">
      <img
        className="backIcon"
        src={backIcon}
        alt="Back Icon"
        onClick={() => navigate("/")}
      />
      <img
        className="likeIcon"
        src={heartIcon}
        alt="Like Icon"
        onClick={handleAddToFavorites} // Add to favorites on click
      />
      <img className="petDetailsImage" src={pet.image} alt={pet.name} />

      <div className="infoContainerDetails">
        <div className="nameAgeGenderContainer">
          <div className="nameAndAge">
            <h2 className="petDetailsName">
              {pet.name}
              <img
                className="petTypeIcon"
                src={pet.type === "dog" ? dogIcon : catIcon}
                alt={`${pet.type === "dog" ? "Dog" : "Cat"} Icon`}
              />
            </h2>
            <p className="petDetailsAge">
              {pet.age} old
            </p>
          </div>

          <img
            className="petDetailsGenderIcon"
            src={pet.gender === "male" ? maleIcon : femaleIcon}
            alt={`${pet.gender === "male" ? "Male" : "Female"} Icon`}
          />
        </div>

        <IconsDetails 
          isNeutered={pet.isNeutered} 
          isVaccinated={pet.isVaccinated} 
          isDewormed={pet.isDewormed} 
        />

        <div className="aboutDetails">
          <h3 className="petDetailsTitle">
            About me:
          </h3>
          <p className="petDetailsDescription">
            {pet.description}
          </p>
        </div>

        <div className="LocationAndMessage">
          <div className="locationDetails">
            <img className="locationIcon" src={locationIcon} alt="Location Icon" />
            <p>{pet.location}</p>
          </div>

          <button className="messageButton">
            <p className="messageButtonText">Message me!</p>
          </button>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default PetDetails;
