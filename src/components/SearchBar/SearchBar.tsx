import { ChangeEvent } from "react";
import "./SearchBar.css";
import searchIcon from "../../assets/images/icons/SearchIcon.png";
import settingsIcon from "../../assets/images/icons/SettingsIcon.png"

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
    };

    return (
        <div className="searchBarContainer">
            <div className="inputWrapper">
                <img className="searchIcon" src={searchIcon} alt="Search Icon" />
                <input
                    className="searchBarInput"
                    type="text"
                    onChange={handleInputChange}
                    placeholder="Search"
                />
            </div>
            <button className="settingsButton">
                <img className="settingsIcon" src={settingsIcon} alt="Settings Icon" />
            </button>
        </div>
    );
};

export default SearchBar;
