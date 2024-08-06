import { useState, useEffect } from "react";
import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import ProfileNav from "../../components/ProfileNav/ProfileNav";
import SearchBar from "../../components/SearchBar/SearchBar";

const data: string[] = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
];

const Home = () => {
    const [query, setQuery] = useState<string>("");
    const [filteredResults, setFilteredResults] = useState<string[]>([]);

    useEffect(() => {
        if (query === '') {
            setFilteredResults([]);
        } else {
            const results = data.filter(item =>
                item.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredResults(results);
        }
    }, [query]);

    const handleSearch = (query: string) => {
        setQuery(query);
    };

    return (
        <div className="homeLayout">
            <ProfileNav />
            <div></div>
            <SearchBar onSearch={handleSearch} />
            <ul>
                {filteredResults.map((result, index) => (
                    <li key={index}>{result}</li>
                ))}
            </ul>
            <NavBar />
        </div>
    );
};

export default Home;
