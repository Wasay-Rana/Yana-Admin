import React, { useState } from 'react';
import './clientDetailsForm.css';

const ClientDetailsForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    medicaidId: '',
    insuranceId: '',
    email: '',
    cptCode: 'W1784',
    icd10Code: '',
    authorizationStartDate: '',
    authorizationEndDate: '',
    allergies: '',
    street: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    meals: '7',
    contactFirstName: '',
    contactLastName: '',
    phoneNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content client-details-form">
        <h2>Client Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">Client Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">&nbsp;</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="medicaidId">Medicaid ID *</label>
              <input
                type="text"
                id="medicaidId"
                name="medicaidId"
                value={formData.medicaidId}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="insuranceId">Insurance ID *</label>
              <input
                type="text"
                id="insuranceId"
                name="insuranceId"
                value={formData.insuranceId}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Client Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="cptCode">CPT Code *</label>
              <div className="cpt-code-group">
                <button type="button" className={formData.cptCode === 'W1785' ? 'active' : ''} onClick={() => setFormData({ ...formData, cptCode: 'W1785' })}>W1785</button>
                <button type="button" className={formData.cptCode === 'W1760' ? 'active' : ''} onClick={() => setFormData({ ...formData, cptCode: 'W1760' })}>W1760</button>
                <button type="button" className={formData.cptCode === 'W1784' ? 'active' : ''} onClick={() => setFormData({ ...formData, cptCode: 'W1784' })}>W1784</button>
                <button type="button" className={formData.cptCode === 'R899' ? 'active' : ''} onClick={() => setFormData({ ...formData, cptCode: 'R899' })}>R899</button>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="icd10Code">ICD-10 Code *</label>
              <input
                type="text"
                id="icd10Code"
                name="icd10Code"
                value={formData.icd10Code}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="authorizationStartDate">Authorization Date *</label>
              <input
                type="date"
                id="authorizationStartDate"
                name="authorizationStartDate"
                value={formData.authorizationStartDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="authorizationEndDate">&nbsp;</label>
              <input
                type="date"
                id="authorizationEndDate"
                name="authorizationEndDate"
                value={formData.authorizationEndDate}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="allergies">Allergies *</label>
            <input
              type="text"
              id="allergies"
              name="allergies"
              value={formData.allergies}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="street">Client Address *</label>
              <input
                type="text"
                id="street"
                name="street"
                placeholder="Street"
                value={formData.street}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">&nbsp;</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-row three-columns">
            <div className="form-group">
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="state"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                placeholder="Zip Code"
                value={formData.zipCode}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>No. Of Meals *</label>
            <div className="meal-options">
              <label>
                <input
                  type="radio"
                  name="meals"
                  value="7"
                  checked={formData.meals === '7'}
                  onChange={handleInputChange}
                />
                7 meals
              </label>
              <label>
                <input
                  type="radio"
                  name="meals"
                  value="14"
                  checked={formData.meals === '14'}
                  onChange={handleInputChange}
                />
                14 meals
              </label>
            </div>
          </div>

          <h3>Alternate Contact</h3>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contactFirstName">Contact Name *</label>
              <input
                type="text"
                id="contactFirstName"
                name="contactFirstName"
                placeholder="First Name"
                value={formData.contactFirstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contactLastName">&nbsp;</label>
              <input
                type="text"
                id="contactLastName"
                name="contactLastName"
                placeholder="Last Name"
                value={formData.contactLastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number *</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-actions">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary">Done</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientDetailsForm;