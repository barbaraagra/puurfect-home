import { useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./PetDetails.css";

const PetDetails = () => {
  const location = useLocation();
  const { pet } = location.state || {};

  if (!pet) {
    return <div>Pet not found</div>;
  }

  return (
    <div className="petDetailsLayout">
      <img className="petDetailsImage" src={pet.image} alt={pet.name} />
      <h2 className="petDetailsName">{pet.name}</h2>
      <p className="petDetailsInfo">{pet.age}, {pet.size}</p>
      <p className="petDetailsGender">{pet.gender === "male" ? "Male" : "Female"}</p>
      <p className="petDetailsDescription">{pet.description}</p>
      <NavBar />
    </div>
  );
};

export default PetDetails;
