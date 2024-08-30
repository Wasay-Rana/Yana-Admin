// src/pages/Meals.js

import React, { useState, useEffect } from 'react';
import './meals.css';

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [newMeal, setNewMeal] = useState({
    title: '',
    images: [],
    category: '',
    vendor: '',
    labels: {
      lowSodium: false,
      lactoseIntolerant: false,
      diabeticFriendly: false,
      vegetarian: false,
      glutenFree: false
    },
    description: '',
    ingredients: '',
    nutritionInfo: '',
    allergies: ''
  });

  useEffect(() => {
    // Fetch meals data from your API
    const mockMeals = [
      { id: 1, title: 'Chicken Salad', category: 'Salads' },
      { id: 2, title: 'Vegetable Soup', category: 'Soups' },
    ];
    setMeals(mockMeals);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setNewMeal(prev => ({
        ...prev,
        labels: { ...prev.labels, [name]: checked }
      }));
    } else {
      setNewMeal(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleImageUpload = (e) => {
    // Handle image upload logic here
    console.log('Image uploaded:', e.target.files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New meal submitted:', newMeal);
    // Add logic to save the new meal
  };

  return (
    <div className="food-page">
      <h1>Meals</h1>
      <form className="add-meal-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newMeal.title}
          onChange={handleInputChange}
          required
        />

        <div className="image-upload">
          <p>Add meal images (Max. 4)</p>
          <div className="file-input-wrapper">
            <input type="file" onChange={handleImageUpload} multiple accept="image/*" />
            <span className="file-input-text">Choose Files</span>
            <span className="file-input-placeholder">No file chosen</span>
          </div>
          <button type="button" className="choose-file-button">Choose File</button>
          <button type="button" className="save-button">Save</button>
        </div>

        <div className="form-row">
          <select name="category" value={newMeal.category} onChange={handleInputChange} required>
            <option value="">Select Category</option>
            {/* Add meal categories here */}
          </select>

          <select name="vendor" value={newMeal.vendor} onChange={handleInputChange} required>
            <option value="">Select Vendor</option>
            {/* Add vendors here */}
          </select>
        </div>

        <div className="meal-labels">
          <label><input type="checkbox" name="lowSodium" checked={newMeal.labels.lowSodium} onChange={handleInputChange} /> Low-sodium</label>
          <label><input type="checkbox" name="lactoseIntolerant" checked={newMeal.labels.lactoseIntolerant} onChange={handleInputChange} /> Lactose intolerant</label>
          <label><input type="checkbox" name="diabeticFriendly" checked={newMeal.labels.diabeticFriendly} onChange={handleInputChange} /> Diabetic friendly</label>
          <label><input type="checkbox" name="vegetarian" checked={newMeal.labels.vegetarian} onChange={handleInputChange} /> Vegetarian</label>
          <label><input type="checkbox" name="glutenFree" checked={newMeal.labels.glutenFree} onChange={handleInputChange} /> Gluten Free</label>
        </div>

        <div className="form-row">
          <textarea name="description" placeholder="Meal Description" value={newMeal.description} onChange={handleInputChange}></textarea>
          <textarea name="ingredients" placeholder="Ingredients" value={newMeal.ingredients} onChange={handleInputChange}></textarea>
        </div>

        <div className="form-row">
          <textarea name="nutritionInfo" placeholder="Nutrition Info" value={newMeal.nutritionInfo} onChange={handleInputChange}></textarea>
          <textarea name="allergies" placeholder="Allergies" value={newMeal.allergies} onChange={handleInputChange}></textarea>
        </div>

        <button type="submit" className="confirm-button">Confirm</button>
      </form>
{/* 
      <table className="meals-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {meals.map(meal => (
            <tr key={meal.id}>
              <td>{meal.title}</td>
              <td>{meal.category}</td>
              <td>
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default Meals;