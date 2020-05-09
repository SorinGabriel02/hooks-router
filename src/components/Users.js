import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import image from "../imgs/default-avatar.jpg";

function Users() {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) =>
        response.data.map((user) => ({
          id: user.id,
          name: user.name,
        }))
      )
      .catch((err) => console.log(err));

    setUsers([...response]);
  }

  useEffect(() => {
    getUsers();
  }, []);

  const userList =
    users &&
    users.map(({ id, name }) => {
      return (
        <li className="users" key={id}>
          <Link
            style={{
              textDecoration: "none",
              color: "brown",
              textAlign: "center",
            }}
            to={{
              pathname: `/users/${id}/albums`,
              state: {
                authorName: name,
              },
            }}
          >
            <img src={image} alt="avatar" />
            {name}
          </Link>
        </li>
      );
    });

  return (
    <main>
      <h2>Pease choose an user to see their photo albums</h2>

      {userList.length ? (
        <ul className="users-list">{userList}</ul>
      ) : (
        <h1>Loading user info...</h1>
      )}
    </main>
  );
}

export default Users;
