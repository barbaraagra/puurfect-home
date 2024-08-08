import { useState, useEffect } from "react";
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
}

const pets: Pet[] = [
  { name: "Pagode", age: "7 years", size: "Medium", gender: "male", type: "dog", image: dogCard1 },
  { name: "Luna", age: "9 years", size: "Large", gender: "female", type: "dog", image: dogCard2 },
  { name: "Luna", age: "1 year", size: "Small", gender: "female", type: "cat", image: catCard1 },
];


const Home = () => {
    const [query, setQuery] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [filteredPets, setFilteredPets] = useState<Pet[]>([]);

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

    return (
        <div className="homeLayout">
            <ProfileNav />
            <SearchBar onSearch={handleSearch} />
            <Banner/>
            <SearchTools onCategoryChange={handleCategoryChange} />
            <div className="petCardsContainer">
                {filteredPets.map((pet, index) => (
                    <PetCard
                        key={index}
                        image={pet.image}
                        name={pet.name}
                        age={pet.age}
                        size={pet.size}
                        gender={pet.gender}
                    />
                ))}
            </div>
            <NavBar />
        </div>
    );
};

export default Home;
