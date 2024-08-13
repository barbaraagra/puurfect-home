import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import ProfileNav from "../../components/ProfileNav/ProfileNav";
import SearchBar from "../../components/SearchBar/SearchBar";
import Banner from "../../components/Banner/Banner";
import SearchTools from "../../components/SearchTools/SearchTools";
import PetCard from "../../components/PetCard/PetCard";
import dogCard1 from "../../assets/images/dogCard1.png"
import dogCard2 from "../../assets/images/DogCard2.png"
import catCard1 from "../../assets/images/CatCard1.png"

interface Pet {
  name: string;
  age: string;
  size: string;
  gender: string;
  type: "dog" | "cat";
  image: string;
  description: string;
}

const pets: Pet[] = [
  {
    name: "Pagode",
    age: "7 years",
    size: "Medium",
    gender: "male",
    type: "dog",
    image: dogCard1,
    description: "Pagode is a loyal and gentle dog with a heart of gold. He enjoys long walks and is always up for a game of fetch. Pagode is great with kids and other pets, making him the perfect addition to any family."
  },
  {
    name: "Luna",
    age: "9 years",
    size: "Large",
    gender: "female",
    type: "dog",
    image: dogCard2,
    description: "Luna is a wise and calm companion who loves to relax in the sun. Despite her age, she still enjoys a good stroll and is incredibly affectionate. Luna is looking for a peaceful home where she can spend her golden years."
  },
  {
    name: "Nina",
    age: "8 months",
    size: "Small",
    gender: "female",
    type: "cat",
    image: catCard1,
    description: "Nina is a playful and curious kitten who loves to explore her surroundings. She’s full of energy and loves chasing after toys. Nina is perfect for a household looking for a lively and loving cat."
  },
  {
    name: "PawPaw",
    age: "1 year",
    size: "Small",
    gender: "male",
    type: "cat",
    image: catCard1,
    description: "PawPaw is an affectionate and playful young cat with a love for cuddles. He’s gentle and friendly, always ready to make new friends. PawPaw is the ideal companion for someone looking for a cat with a big heart."
  },
];



const Home = () => {
    const [query, setQuery] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [filteredPets, setFilteredPets] = useState<Pet[]>([]);

    const navigate = useNavigate(); 

    useEffect(() => {
        let filtered = pets;

        if (selectedCategory !== "all") {
            filtered = filtered.filter(pet => pet.type === selectedCategory);
        }

        if (query) {
            filtered = filtered.filter(pet =>
                pet.name.toLowerCase().includes(query.toLowerCase())
            );
        }

        setFilteredPets(filtered);
    }, [query, selectedCategory]);

    const handleSearch = (query: string) => {
        setQuery(query);
    };

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };
    
    const handleCardClick = (pet: Pet) => {
      navigate("/petDetails", { state: { pet } });
    };
    

    return (
        <div className="homeLayout">
            <ProfileNav />
            <SearchBar onSearch={handleSearch} />
            <Banner/>
            <SearchTools onCategoryChange={handleCategoryChange} />
            <div className="petCardsContainer">
                {filteredPets.map((pet, index) => (
                  <div onClick={() => handleCardClick(pet)} key={index}>
                    <PetCard
                        image={pet.image}
                        name={pet.name}
                        age={pet.age}
                        size={pet.size}
                        gender={pet.gender}
                    />
                     </div>
                ))}
            </div>
            <NavBar />
        </div>
    );
};

export default Home;
