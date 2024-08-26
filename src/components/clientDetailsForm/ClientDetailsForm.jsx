import React, { useState } from 'react';
import './clientDetailsForm.css'


const ClientDetailsForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    medicaidId: '',
    insuranceId: '',
    email: '',
    cptCode: '',
    icdCode: '',
    authorizationStartDate: '',
    authorizationEndDate: '',
    allergies: '',
    street: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    meals: '7',
    altContactFirstName: '',
    altContactLastName: '',
    altContactPhone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic idhar
    console.log('Form data:', formData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content client-form">
        <h2>Client Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
            <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
          </div>
          <div className="form-row">
            <input type="text" name="medicaidId" placeholder="Medicaid ID" onChange={handleChange} required />
            <input type="text" name="insuranceId" placeholder="Insurance ID" onChange={handleChange} required />
          </div>
          <input type="email" name="email" placeholder="Client Email" onChange={handleChange} required />
          <div className="form-row">
            <select name="cptCode" onChange={handleChange} required>
              <option value="">Select CPT Code</option>
              <option value="W1795">W1795</option>
              <option value="W1760">W1760</option>
              <option value="W1760$">W1760$</option>
              <option value="R65">R65</option>
            </select>
            <input type="text" name="icdCode" placeholder="ICD-10 Code" onChange={handleChange} required />
          </div>
          <div className="form-row">
            <input type="date" name="authorizationStartDate" onChange={handleChange} required />
            <input type="date" name="authorizationEndDate" onChange={handleChange} required />
          </div>
          <input type="text" name="allergies" placeholder="Allergies" onChange={handleChange} required />
          <div className="form-row">
            <input type="text" name="street" placeholder="Street" onChange={handleChange} required />
            <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
          </div>
          <div className="form-row">
            <input type="text" name="city" placeholder="City" onChange={handleChange} required />
            <input type="text" name="state" placeholder="State" onChange={handleChange} required />
            <input type="text" name="zipCode" placeholder="Zip Code" onChange={handleChange} required />
          </div>
          <div className="form-row">
            <label>
              <input type="radio" name="meals" value="7" checked={formData.meals === '7'} onChange={handleChange} />
              7 meals
            </label>
            <label>
              <input type="radio" name="meals" value="14" checked={formData.meals === '14'} onChange={handleChange} />
              14 meals
            </label>
          </div>
          <h3>Alternate Contact</h3>
          <div className="form-row">
            <input type="text" name="altContactFirstName" placeholder="First Name" onChange={handleChange} required />
            <input type="text" name="altContactLastName" placeholder="Last Name" onChange={handleChange} required />
          </div>
          <input type="tel" name="altContactPhone" placeholder="Phone Number" onChange={handleChange} required />
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">Done</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientDetailsForm;