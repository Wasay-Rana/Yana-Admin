// src/pages/Meals.js

import React, { useState, useEffect } from 'react';

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
    <div className="p-5 bg-white">
      <h1 className="text-2xl font-bold mb-6">Meals</h1>
      <form className="bg-white p-6 rounded-lg shadow-md mb-6" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newMeal.title}
          onChange={handleInputChange}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded-md text-sm"
        />

        <div className="mb-4">
          <p className="mb-2">Add meal images (Max. 4)</p>
          <div className="relative inline-block border border-gray-300 rounded-md p-2 mr-2">
            <input 
              type="file" 
              onChange={handleImageUpload} 
              multiple 
              accept="image/*"
              className="absolute inset-0 opacity-0"
            />
            <span className="text-gray-700">Choose Files</span>
            <span className="text-gray-500 ml-2">No file chosen</span>
          </div>
          <button type="button" className="bg-red-600 text-white px-4 py-2 rounded-md text-sm">Choose File</button>
          <button type="button" className="bg-red-600 text-white px-4 py-2 rounded-md text-sm ml-2">Save</button>
        </div>

        <div className="flex gap-5 mb-4">
          <select 
            name="category" 
            value={newMeal.category} 
            onChange={handleInputChange} 
            required
            className="flex-1 p-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="">Select Category</option>
            {/* Add meal categories here */}
          </select>

          <select 
            name="vendor" 
            value={newMeal.vendor} 
            onChange={handleInputChange} 
            required
            className="flex-1 p-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="">Select Vendor</option>
            {/* Add vendors here */}
          </select>
        </div>

        <div className="flex flex-wrap gap-4 mb-4">
          <label className="flex items-center text-sm">
            <input type="checkbox" name="lowSodium" checked={newMeal.labels.lowSodium} onChange={handleInputChange} className="mr-2" /> Low-sodium
          </label>
          <label className="flex items-center text-sm">
            <input type="checkbox" name="lactoseIntolerant" checked={newMeal.labels.lactoseIntolerant} onChange={handleInputChange} className="mr-2" /> Lactose intolerant
          </label>
          <label className="flex items-center text-sm">
            <input type="checkbox" name="diabeticFriendly" checked={newMeal.labels.diabeticFriendly} onChange={handleInputChange} className="mr-2" /> Diabetic friendly
          </label>
          <label className="flex items-center text-sm">
            <input type="checkbox" name="vegetarian" checked={newMeal.labels.vegetarian} onChange={handleInputChange} className="mr-2" /> Vegetarian
          </label>
          <label className="flex items-center text-sm">
            <input type="checkbox" name="glutenFree" checked={newMeal.labels.glutenFree} onChange={handleInputChange} className="mr-2" /> Gluten Free
          </label>
        </div>

        <div className="flex gap-5 mb-4">
          <textarea 
            name="description" 
            placeholder="Meal Description" 
            value={newMeal.description} 
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
          />
          <textarea 
            name="ingredients" 
            placeholder="Ingredients" 
            value={newMeal.ingredients} 
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
          />
        </div>

        <div className="flex gap-5 mb-4">
          <textarea 
            name="nutritionInfo" 
            placeholder="Nutrition Info" 
            value={newMeal.nutritionInfo} 
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
          />
          <textarea 
            name="allergies" 
            placeholder="Allergies" 
            value={newMeal.allergies} 
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
          />
        </div>

        <button 
          type="submit" 
          className="bg-red-600 text-white px-6 py-3 rounded-md text-lg mx-auto block"
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Meals;
