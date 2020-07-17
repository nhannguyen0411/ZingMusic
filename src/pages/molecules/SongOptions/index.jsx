import React from "react";

const SongOptions = (props) => {
  return (
    <div className="song-options">
      <NavbarIcon icon="fab fa-youtube" />
      <NavbarIcon icon="fab fa-download" />
      <NavbarIcon icon="fab fa-plus" />
      <NavbarIcon icon="fas fa-share-alt" />
    </div>
  );
};

export default SongOptions;
