import React from "react";
import SongList from "./SongList";
import SongForm from "./SongForm";
import FilterSong from "./FilterSong";

class SongOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // my collection
      songs: [],
      // ordering
      order: "song",
      // filter
      genre: "",
      // filter
      rating: "",
    };
    this.addSong = this.addSong.bind(this);
    this.setFilterGenre = this.setFilterGenre.bind(this);
    this.setFilterRating = this.setFilterRating.bind(this);
  }

  addSong = (song) => {
    this.state.songs.push({
      id: this.state.songs.length + 1,
      ...song,
    });

    this.setState({ songs: this.state.songs });
  };

  setFilterGenre = (e) => {
    this.setState({ genre: e.target.value });
  };

  setFilterRating = (e) => {
    this.setState({ rating: e.target.value });
  };

  sort = (field) => {
    this.setState({ order: field });
  };

  deleteSong = (id) => {
    this.setState({ songs: this.state.songs.filter((item) => item.id !== id) });
  };

  sorting = (a, b) => a[this.state.order].localeCompare(b[this.state.order]);

  filterGenre = (item) => {
    return this.state.genre !== "" ? item.genre === this.state.genre : true;
  };

  filterRating = (item) => {
    return this.state.rating !== "" ? item.rating === this.state.rating : true;
  };

  render() {
    return (
      <div>
        <SongForm addSong={this.addSong} />

        <FilterSong
          data={this.state}
          setFilterGenre={this.setFilterGenre}
          setFilterRating={this.setFilterRating}
        />

        <main>
          <table style={{ width: "100%" }}>
            <thead>
              <tr className="song-header">
                <th
                  className="song-row__item"
                  onClick={() => this.sort("song")}
                >
                  Song
                </th>
                <th
                  className="song-row__item"
                  onClick={() => this.sort("artist")}
                >
                  Artist
                </th>
                <th className="song-row__item">Genre</th>
                <th className="song-row__item">Rating</th>
                <th className="song-row__item"></th>
              </tr>
            </thead>
            <SongList
              items={this.state.songs
                .sort(this.sorting)
                .filter(this.filterGenre)
                .filter(this.filterRating)}
              deleteSong={this.deleteSong}
            />
          </table>
        </main>
      </div>
    );
  }
}

export default SongOverview;
