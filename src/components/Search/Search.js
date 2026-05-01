import "./Search.css";

function Search() {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search a song of your choice"
      />

      <button>
        Search
      </button>
    </div>
  );
}

export default Search;