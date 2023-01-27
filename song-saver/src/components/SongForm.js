import React from "react";

const initialState = { song: "", artist: "", genre: "", rating: "" };

class SongForm extends React.Component {
  constructor() {
    super();
    this.state = {
      ...initialState,
    };

    this.setInputValue = this.setInputValue.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }
  setInputValue(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onButtonPress() {
    if (this.state.song !== "") {
      this.props.addSong(this.state);
    }

    this.setState({
      ...initialState,
    });
  }

  render() {
    return (
      <div className="input-field">
        <input
          type="text"
          name="song"
          placeholder="Song"
          onChange={this.setInputValue}
          value={this.state.song}
          autoComplete="off"
        />
        <input
          type="text"
          name="artist"
          placeholder="Artist"
          onChange={this.setInputValue}
          value={this.state.artist}
          autoComplete="off"
        />
        <select
          value={this.state.genre}
          name="genre"
          onChange={this.setInputValue}
        >
          <option value=""></option>
          <option value="rock">Rock</option>
          <option value="jazz">Jazz</option>
          <option value="pop">Pop</option>
        </select>
        <select
          value={this.state.rating}
          name="rating"
          onChange={this.setInputValue}
        >
          <option value=""></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <button
          onClick={this.onButtonPress}
          placeholder="Add song"
          className="addButton"
        >
          Add
        </button>
      </div>
    );
  }
}
export default SongForm;
