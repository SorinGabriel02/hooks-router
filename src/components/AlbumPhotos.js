import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";

function AlbumPhotos() {
  const { userId, albumId } = useParams();
  const history = useHistory();
  const { authorName, albumTitle } = history.location.state;
  const [photos, setPhotos] = useState([]);

  async function getPhotosByAlbumId(albumId) {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .then((response) => response.data)
      .catch((err) => console.error(err));
    setPhotos(response);
  }

  useEffect(() => {
    getPhotosByAlbumId(albumId);
  }, [albumId]);

  const photosJSX =
    photos &&
    photos.map(({ id, title, thumbnailUrl }) => {
      return (
        <li className="users" key={id}>
          <figure>
            <img style={{ borderRadius: 3 }} src={thumbnailUrl} alt={title} />
            <figcaption>{title}</figcaption>
          </figure>
        </li>
      );
    });

  return (
    <section>
      <h1>
        Author:
        <Link
          to={{
            pathname: `/users/${userId}/albums`,
            state: {
              authorName: authorName,
            },
          }}
        >
          {authorName}
        </Link>
      </h1>
      <h2>Title: {albumTitle}</h2>
      <ul style={{ display: "flex", flexWrap: "wrap" }}>{photosJSX}</ul>
    </section>
  );
}

export default AlbumPhotos;
