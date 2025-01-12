// src/UserManagement.js
import React, { useState } from 'react';

const UserManagement = () => {
  // State to hold user data
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Add new user
  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      if (isEditing) {
        // Update existing user
        const updatedUsers = [...users];
        updatedUsers[editIndex] = newUser;
        setUsers(updatedUsers);
        setIsEditing(false);
        setEditIndex(null);
      } else {
        // Add new user
        setUsers([...users, newUser]);
      }
      setNewUser({ name: '', email: '' });
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  // Handle editing user
  const handleEditUser = (index) => {
    setNewUser(users[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  // Handle deleting user
  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h1>User Management</h1>

      <div>
        <h2>{isEditing ? 'Edit User' : 'Add New User'}</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newUser.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleInputChange}
        />
        <button onClick={handleAddUser}>{isEditing ? 'Save Changes' : 'Add User'}</button>
      </div>

      <div>
        <h2>User List</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.name} - {user.email}
              <button onClick={() => handleEditUser(index)}>Edit</button>
              <button onClick={() => handleDeleteUser(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserManagement;
