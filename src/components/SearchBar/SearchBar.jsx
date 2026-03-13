import { useState } from "react";
import { useNavigate } from "react-router-dom";
import companies from "../../data/companies.json";
import "./SearchBar.css";

function SearchBar() {

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const funMessages = [
    "🤔 Searching for invisible companies?",
    "😅 You forgot to type a company!",
    "> Try Google, OpenAI, or Microsoft!",
    "🧐 Type something first!"
  ];

  const handleChange = (e) => {

    const value = e.target.value;

    setQuery(value);
    setError("");

    if (value.length > 0) {

      const filtered = companies
        .filter((company) =>
          company.name.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 5);

      setSuggestions(filtered);

    } else {

      setSuggestions([]);

    }

  };

  const handleSearch = (companyName) => {

    if (!companyName || companyName.trim() === "") {

      const randomMessage =
        funMessages[Math.floor(Math.random() * funMessages.length)];

      setError(randomMessage);

      return;

    }

    navigate(`/company/${companyName}`);
    setSuggestions([]);

  };

  const handleKeyDown = (e) => {

    if (e.key === "Enter") {

      handleSearch(query);

    }

  };

  return (
    <div className="search-wrapper">

      <div className="search-container">

        <input
          type="text"
          placeholder="Search company..."
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />

        <button onClick={() => handleSearch(query)}>
          Search
        </button>

      </div>

      {suggestions.length > 0 && (

        <div className="suggestions-box">

          {suggestions.map((company) => (

            <div
              key={company.domain}
              className="suggestion-item"
              onClick={() => handleSearch(company.name)}
            >
              {company.name}

            </div>

          ))}

        </div>

      )}

      {error && (

        <div className="search-error">
          {error}
        </div>

      )}

    </div>
  );

}

export default SearchBar;