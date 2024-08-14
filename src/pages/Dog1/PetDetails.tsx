import { useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./PetDetails.css";
import backIcon from "../../assets/images/icons/BackIcon.png";
import heartIcon from "../../assets/images/icons/Heart-icon.png";
import neuteredIcon from "../../assets/images/icons/NeuteredIcon.png";
import vaccinatedIcon from "../../assets/images/icons/VaccinatedIcon.png";
import dewormedIcon from "../../assets/images/icons/DewormedIcon.png";
import locationIcon from "../../assets/images/icons/LocationIcon.png";


const PetDetails = () => {
  const location = useLocation();
  const { pet } = location.state || {};

  if (!pet) {
    return <div>Pet not found</div>;
  }

  return (
    <div className="petDetailsLayout">
      <img className="backIcon" src={backIcon} alt="Back Icon" />
      <img className="likeIcon" src={heartIcon} alt="Like Icon" />
      <img className="petDetailsImage" src={pet.image} alt={pet.name} />

        <div className="infoContainerDetails">
          <div className="nameAndAge">
            <h2 className="petDetailsName">
              {pet.name}
            </h2>
            <p className="petDetailsAge">
              {pet.age} old
            </p>
          </div>

        <div className="iconsDetailsContainer">
          <div className="iconDetails">
            <img src={neuteredIcon} alt="NeuteredIcon" />
          </div>
          <div className="iconDetails">
            <img src={vaccinatedIcon} alt="Vaccinated Icon" />
          </div>
          <div className="iconDetails">
            <img src={dewormedIcon} alt="Dewormed Icon" />
          </div>
        </div>

        <div className="aboutDetails">
          <h3>
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
          <p className="petDetailsGender">{pet.gender === "male" ? "Male" : "Female"}</p>
        </div>
      <NavBar />
    </div>
  );
};

export default PetDetails;
