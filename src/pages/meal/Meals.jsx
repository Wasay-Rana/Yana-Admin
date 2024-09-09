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
    <div className="p-5 bg-white w-full">
      <h1 className="text-2xl font-bold ">Meals</h1>
      <form className="bg-white p-6 rounded-lg w-full" onSubmit={handleSubmit}>
        <div className='flex w-full gap-10'>
        <h1 className='py-1 font-semibold'>Title</h1>
        <input
          type="text"
          name="title"
          placeholder="Add meal title..."
          value={newMeal.title}
          onChange={handleInputChange}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded-md text-sm bg-gray-100"
        /> </div>

        <div className="mb-4 w-full">
          <p className="mb-2 font-semibold">Add meal images (Max. 4)</p>
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
          <button type="button" className="bg-white border-2 border-red-600 text-red-600 px-4 py-2 rounded-md text-sm">Choose File</button>
          <button type="button" className="bg-red-600 text-white px-4 py-2 rounded-md text-sm ml-2">Save</button>
        </div>

        <div className="flex gap-10 mb-4 w-full">
          <div className="flex flex-col flex-1">
            <h1 className='mb-2 font-semibold'>Meal Category</h1>
            <select 
              name="category" 
              value={newMeal.category} 
              onChange={handleInputChange} 
              required
              className="p-2 border border-gray-300 rounded-md text-sm bg-gray-100"
            >
              <option value="">Select Category</option>
              {/* Add meal categories here */}
            </select>
          </div>

          <div className="flex flex-col flex-1">
            <h2 className='mb-2 font-semibold'>Vendor</h2>
            <select 
              name="vendor" 
              value={newMeal.vendor} 
              onChange={handleInputChange} 
              required
              className="p-2 border border-gray-300 rounded-md text-sm bg-gray-100"
            >
              <option value="">Select Vendor</option>
              {/* Add vendors here */}
            </select>
          </div>
        </div>


        <div className="w-full mb-4">
        <h1 className='font-semibold mb-2'>Meal Labels</h1>
        <div className="flex flex-wrap gap-24">
          <label className="flex items-center text-sm">
            <input type="checkbox" name="lowSodium" checked={newMeal.labels.lowSodium} onChange={handleInputChange} className="mr-2" /> Low-sodium
          </label>
          <label className="flex items-center text-sm">
            <input type="checkbox" name="lowSodium" checked={newMeal.labels.lowSodium} onChange={handleInputChange} className="mr-2" /> Lactose intolerant
          </label>
          <label className="flex items-center text-sm">
            <input type="checkbox" name="lowSodium" checked={newMeal.labels.lowSodium} onChange={handleInputChange} className="mr-2" /> Diabetic friendly
          </label>
          <label className="flex items-center text-sm">
            <input type="checkbox" name="lowSodium" checked={newMeal.labels.lowSodium} onChange={handleInputChange} className="mr-2" /> Vegetarian
          </label>
          <label className="flex items-center text-sm">
            <input type="checkbox" name="lowSodium" checked={newMeal.labels.lowSodium} onChange={handleInputChange} className="mr-2" /> Gluten Free
          </label>
          </div>
        </div>

        <div className="flex gap-10 mb-4 w-full">
        <div className="flex flex-col flex-1">
            <h1 className='mb-2 font-semibold'>Meal Descripition</h1>
            <textarea 
            name="description" 
            placeholder="Add meal description..." 
            value={newMeal.description} 
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md text-sm bg-gray-100 h-32"
          />
          </div>

          <div className="flex flex-col flex-1">
            <h1 className='mb-2 font-semibold'>Ingredients</h1>
            <textarea 
            name="ingredients" 
            placeholder="Add ingredients..." 
            value={newMeal.ingredients} 
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md text-sm bg-gray-100 h-32"
          />
          </div>

          <div className="flex flex-col flex-1">
            <h1 className='mb-2 font-semibold'>Nutrition Info</h1>
            <textarea 
            name="nutritionInfo" 
            placeholder="Add nutrition info..." 
            value={newMeal.nutritionInfo} 
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md text-sm bg-gray-100 h-32"
          />
          </div>

          <div className="flex flex-col flex-1">
            <h1 className='mb-2 font-semibold'>Allergies</h1>
            <textarea 
            name="allergies" 
            placeholder="Add allergies..." 
            value={newMeal.allergies} 
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md text-sm bg-gray-100 h-32"
          />
          </div>
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