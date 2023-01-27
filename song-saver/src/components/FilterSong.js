import React from "react";

function FilterSong(props) {
  return (
    <div className="filter-field">
      <select
        value={props.data.genre}
        name="genre"
        onChange={props.setFilterGenre}
      >
        <option value="">Genre filter</option>
        <option value="rock">Rock</option>
        <option value="jazz">Jazz</option>
        <option value="pop">Pop</option>
      </select>

      <select
        value={props.data.rating}
        name="genre"
        onChange={props.setFilterRating}
      >
        <option value="">Rating filter</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="4">5</option>
      </select>
    </div>
  );
}

export default FilterSong;
