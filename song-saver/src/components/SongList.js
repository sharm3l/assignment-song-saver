import React from "react";

function SongList({ items, deleteSong }) {
  return (
    <tbody className="app-list">
      {items.map((item) => (
        <tr key={item.id} className="list-item">
          <td className="item">{item.song}</td>
          <td className="item">{item.artist}</td>
          <td className="item">{item.genre}</td>
          <td className="item">{item.rating}</td>
          <td className="item-button">
            <button
              className="delete-button"
              onClick={() => deleteSong(item.id)}
            >
              x
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default SongList;
