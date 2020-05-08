import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Albums() {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);

  async function getAlbumsByUserId(id) {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
      .then((response) =>
        response.data.map((album) => ({ id: album.id, title: album.title }))
      )
      .catch((err) => console.log(err));
    setAlbums([response]);
  }

  useEffect(() => {
    getAlbumsByUserId(userId);
  }, [userId]);
  console.log(albums);
  return (
    <section>
      <h1>Albums works {userId}</h1>
    </section>
  );
}

export default Albums;
