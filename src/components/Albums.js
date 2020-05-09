import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import axios from "axios";

function Albums() {
  const { userId } = useParams();
  const { state } = useLocation();
  const [albums, setAlbums] = useState([]);
  async function getAlbumsByUserId(id) {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
      .then((response) => response.data)
      .catch((err) => console.log(err));
    setAlbums([...response]);
  }

  useEffect(() => {
    getAlbumsByUserId(userId);
  }, [userId]);

  const albumList =
    albums.length &&
    albums.map(({ userId, id, title }) => {
      return (
        <li className="users" key={id}>
          <Link
            style={{
              textDecoration: "none",
              color: "brown",
              textAlign: "center",
            }}
            to={{
              pathname: `/users/${userId}/albums/${id}/photos`,
              state: {
                authorName: state.authorName,
                albumTitle: title,
              },
            }}
          >
            {title}
          </Link>
        </li>
      );
    });

  return (
    <section>
      <h1>
        Author: {state.authorName ? state.authorName : null}. Choose an album...
      </h1>
      {albumList ? (
        <ul className="users-list">{albumList}</ul>
      ) : (
        <h1>Loading albums info...</h1>
      )}
    </section>
  );
}

export default Albums;
