import React, { useState } from "react";
import "./SearchTools.css";
import dogIcon from "../../assets/images/icons/DogIcon.png";
import catIcon from "../../assets/images/icons/CatIcon.png";
import footprintIcon from "../../assets/images/icons/FootprintIcon.png";

interface SearchToolsProps {
    onCategoryChange: (category: string) => void;
}

const SearchTools: React.FC<SearchToolsProps> = ({ onCategoryChange }) => {
    const [activeCategory, setActiveCategory] = useState<string>("all");

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        onCategoryChange(category);
    };

    return (
        <section className="searchToolsContainer">
            <h2 className="searchToolsTitle">Pet Category</h2>
            <div className="buttonsContainer">
                <button
                    className={`searchButton ${activeCategory === "dog" ? "active" : ""}`}
                    onClick={() => handleCategoryChange("dog")}
                >
                    <img className="petIcon" src={dogIcon} alt="Dog Icon" />
                </button>
                <button
                    className={`searchButton ${activeCategory === "cat" ? "active" : ""}`}
                    onClick={() => handleCategoryChange("cat")}
                >
                    <img className="petIcon" src={catIcon} alt="Cat Icon" />
                </button>
                <button
                    className={`searchButton ${activeCategory === "all" ? "active" : ""}`}
                    onClick={() => handleCategoryChange("all")}
                >
                    <img className="petIcon" src={footprintIcon} alt="Footprint Icon" />
                </button>
            </div>
            <div className="textContainer">
                <p className="searchButtonText">Dog</p>
                <p className="searchButtonText">Cat</p>
                <p className="searchButtonText">All</p>
            </div>
        </section>
    );
};

export default SearchTools;
