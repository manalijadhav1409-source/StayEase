import { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (!city.trim()) {
      alert("Please enter city.");
      return;
    }

    onSearch(city);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">

        <div className="col-md-8">

          <div className="input-group">

            <input
              type="text"
              className="form-control"
              placeholder="Search hotels by city..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <button
              className="btn btn-primary"
              onClick={handleSearch}
            >
              Search
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default SearchBar;