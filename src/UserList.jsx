import { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setListOfUsers(response.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filteredUsers = listOfUsers.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleClick = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  if (loading) return <p className="message">Loading users...</p>;
  if (error) return <p className="message error">Error: {error}</p>;

  return (
    <div className="user-list">
      <input
        className="search"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.length === 0 && <p className="message">No user found</p>}

      {filteredUsers.map((user) => (
        <div key={user.id} className="card" onClick={() => handleClick(user.id)}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p className="company">{user.company.name}</p>

          {selectedId === user.id && (
            <div className="details">
              <p>📍 {user.address.street}, {user.address.city}</p>
              <p>📞 {user.phone}</p>
              <p>🌐 {user.website}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default UserList;
