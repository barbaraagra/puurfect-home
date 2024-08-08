import "./PetCard.css";
import maleIcon from "../../assets/images/icons/MaleIcon.png";
import femaleIcon from "../../assets/images/icons/FemaleIcon.png";


interface PetCardProps {
    image: string;
    name: string;
    age: string;
    size: string;
    gender: string;
}
const PetCard: React.FC<PetCardProps> = ({image, name, age, size, gender}) => {
  return (
    <div className="cardContainer">
        <img className="petImage" src={image} alt="Pet Image" />
        <article className="cardText">
            <h3 className="petName">{name}</h3>
            <p className="petInfo">{age}, {size}</p>
        </article>
        {gender === "male" ?  <img className="genderIcon" src={maleIcon} alt="Male Icon" />  : 
        <img className="genderIcon" src={femaleIcon} alt="Female Icon" />
        }
    </div>
  )
}

export default PetCard