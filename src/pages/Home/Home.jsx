import SearchBar from "../../components/SearchBar/SearchBar";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">

      <div className="search-box">

        <h1>Firm Explorer</h1>

        <SearchBar />

      </div>

    </div>
  );
}

export default Home;