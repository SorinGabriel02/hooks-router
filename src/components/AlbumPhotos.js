import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";

function AlbumPhotos() {
  const { userId, albumId } = useParams();
  const history = useHistory();
  const { authorName, albumTitle } = history.location.state;

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
      <ul></ul>
    </section>
  );
}

export default AlbumPhotos;
