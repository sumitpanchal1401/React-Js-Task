// MyForm.js
import React, { useState } from 'react';

const MyForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log('Form Data Submitted:', formData);
    // You can also send this data to a server here
    // Reset the form if needed
    setFormData({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;