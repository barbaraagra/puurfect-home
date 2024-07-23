import { Link } from "react-router-dom"
import "./Home.css"
import NavBar from "../../components/NavBar/NavBar"

const Home = () => {
  return (
    <div className="homeLayout">
        <h1>Home</h1>
        <Link to="/favorites"><h2>Favorites</h2></Link>
        <NavBar/>
    </div>
  )
}

export default Home