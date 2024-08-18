import "./IconsDetails.css";
import neuteredIcon from "../../assets/images/icons/NeuteredIcon.png";
import vaccinatedIcon from "../../assets/images/icons/VaccinatedIcon.png";
import dewormedIcon from "../../assets/images/icons/DewormedIcon.png";

interface IconsDetailsProps {
  isNeutered: boolean;
  isVaccinated: boolean;
  isDewormed: boolean;
}

const IconsDetails: React.FC<IconsDetailsProps> = ({ isNeutered, isVaccinated, isDewormed }) => {
  return (
    <div className="iconsDetailsContainer">
      {isNeutered && (
        <div className="iconDetails">
          <img className="iconDetailsImg" src={neuteredIcon} alt="Neutered Icon" />
          <p className="iconDetailsText">Neutered</p>
        </div>
      )}
      {isVaccinated && (
        <div className="iconDetails">
          <img className="iconDetailsImg" src={vaccinatedIcon} alt="Vaccinated Icon" />
          <p className="iconDetailsText">Vaccinated</p>
        </div>
      )}
      {isDewormed && (
        <div className="iconDetails">
          <img className="iconDetailsImg" src={dewormedIcon} alt="Dewormed Icon" />
          <p className="iconDetailsText">Dewormed</p>
        </div>
      )}
    </div>
  );
};

export default IconsDetails;
