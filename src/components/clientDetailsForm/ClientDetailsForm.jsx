import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CrossButton from '../../elements/crossButton/CrossButton';
import CustomInput from '../../elements/customInput/CustomInput';

const Chat = ({ onClose }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        medicalId: '',
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
        onClose();
    };

    const handleCancel = () => {
        navigate(-1);
    };

    return (
        <div className="mx-8 bg-white p-6 md:p-10 rounded-[22px]">
            <div className="font-barlow px-8">
                <h2 className="text-gray mb-4 text-xl">Client Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap gap-2.5 mb-4">
                        <div className="flex-1 min-w-0">
                            <label htmlFor="firstName" className="block font-bold mb-1.5">Client Name *</label>
                            <CustomInput
                                id="firstName"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                required
                                className="w-full"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <label htmlFor="lastName" className="block font-bold mb-1.5">&nbsp;</label>
                            <CustomInput
                                id="lastName"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                required
                                className="w-full"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2.5 mb-4">
                        <div className="flex-1 min-w-0">
                            <label htmlFor="medicalId" className="block font-bold mb-1.5">Medical ID *</label>
                            <CustomInput
                                id="medicalId"
                                name="medicalId"
                                value={formData.medicalId}
                                onChange={handleInputChange}
                                required
                                className="w-full"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <label htmlFor="insuranceId" className="block font-bold mb-1.5">Insurance ID *</label>
                            <CustomInput
                                id="insuranceId"
                                name="insuranceId"
                                value={formData.insuranceId}
                                onChange={handleInputChange}
                                required
                                className="w-full"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block font-bold mb-1.5">Client Email</label>
                        <CustomInput
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full"
                        />
                    </div>

                    <div className="flex flex-wrap gap-2.5 mb-4">
                        <div className="flex-1 min-w-0">
                            <label htmlFor="cptCode" className="block font-bold mb-1.5">CPT Code *</label>
                            <div className="flex gap-1.5">
                                {['W1785', 'W1760', 'W1784', 'R899'].map((code) => (
                                    <button
                                        key={code}
                                        type="button"
                                        className={`flex-1 py-2 px-4 rounded ${
                                            formData.cptCode === code
                                                ? 'bg-blue text-white'
                                                : 'bg-white border border-gray'
                                        }`}
                                        onClick={() => setFormData({ ...formData, cptCode: code })}
                                    >
                                        {code}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <label htmlFor="icd10Code" className="block font-bold mb-1.5">ICD-10 Code *</label>
                            <CustomInput
                                id="icd10Code"
                                name="icd10Code"
                                value={formData.icd10Code}
                                onChange={handleInputChange}
                                required
                                className="w-full"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <h3 className="font-bold mb-2">Authorization Date *</h3>
                        <div className="flex gap-2.5">
                            <div className="flex-1 min-w-0">
                                <label htmlFor="authorizationStartDate" className="block font-bold mb-1.5">Start Date *</label>
                                <CustomInput
                                    type="date"
                                    id="authorizationStartDate"
                                    name="authorizationStartDate"
                                    value={formData.authorizationStartDate}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <label htmlFor="authorizationEndDate" className="block font-bold mb-1.5">End Date</label>
                                <CustomInput
                                    type="date"
                                    id="authorizationEndDate"
                                    name="authorizationEndDate"
                                    value={formData.authorizationEndDate}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="allergies" className="block font-bold mb-1.5">Allergies *</label>
                        <CustomInput
                            type="text"
                            id="allergies"
                            name="allergies"
                            value={formData.allergies}
                            onChange={handleInputChange}
                            required
                            className="w-full"
                        />
                    </div>

                    <div className="flex flex-wrap gap-2.5 mb-4">
                        <div className="flex-1 min-w-0">
                            <label htmlFor="street" className="block font-bold mb-1.5">Client Address *</label>
                            <CustomInput
                                type="text"
                                id="street"
                                name="street"
                                placeholder="Street"
                                value={formData.street}
                                onChange={handleInputChange}
                                required
                                className="w-full"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <label htmlFor="address" className="block font-bold mb-1.5">&nbsp;</label>
                            <CustomInput
                                type="text"
                                id="address"
                                name="address"
                                placeholder="Address"
                                value={formData.address}
                                onChange={handleInputChange}
                                className="w-full"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-5 mb-4">
                        <div className="flex-1 min-w-[150px]">
                            <CustomInput
                                type="text"
                                id="city"
                                name="city"
                                placeholder="City"
                                value={formData.city}
                                onChange={handleInputChange}
                                required
                                className="w-full"
                            />
                        </div>
                        <div className="flex-1 min-w-[150px]">
                            <CustomInput
                                type="text"
                                id="state"
                                name="state"
                                placeholder="State"
                                value={formData.state}
                                onChange={handleInputChange}
                                required
                                className="w-full"
                            />
                        </div>
                        <div className="flex-1 min-w-[150px]">
                            <CustomInput
                                type="text"
                                id="zipCode"
                                name="zipCode"
                                placeholder="Zip Code"
                                value={formData.zipCode}
                                onChange={handleInputChange}
                                required
                                className="w-full"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block font-bold mb-1.5">No. Of Meals *</label>
                        <div className="flex gap-5 text-lg">
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="meals"
                                    value="7"
                                    checked={formData.meals === '7'}
                                    onChange={handleInputChange}
                                    className="w-5 h-5 mr-2.5 accent-blue"
                                />
                                7 meals
                            </label>
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="meals"
                                    value="14"
                                    checked={formData.meals === '14'}
                                    onChange={handleInputChange}
                                    className="w-5 h-5 mr-2.5 accent-blue"
                                />
                                14 meals
                            </label>
                        </div>
                    </div>

                    <h2 className="text-gray mb-4 text-xl">Alternate Contact</h2>

                    <div className="flex flex-wrap gap-2.5 mb-4">
                        <div className="flex-1 min-w-0">
                            <label htmlFor="contactFirstName" className="block font-bold mb-1.5">Contact Name *</label>
                            <CustomInput
                                type="text"
                                id="contactFirstName"
                                name="contactFirstName"
                                placeholder="First Name"
                                value={formData.contactFirstName}
                                onChange={handleInputChange}
                                required
                                className="w-full"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <label htmlFor="contactLastName" className="block font-bold mb-1.5">&nbsp;</label>
                            <CustomInput
                                type="text"
                                id="contactLastName"
                                name="contactLastName"
                                placeholder="Last Name"
                                value={formData.contactLastName}
                                onChange={handleInputChange}
                                required
                                className="w-full"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block font-bold mb-1.5">Phone Number *</label>
                        <CustomInput
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            required
                            className="w-full"
                        />
                    </div>

                    <div className="flex gap-2 mt-5">
                        <button
                            type="button"
                            className="px-8 py-2 bg-[#CDCDCD] text-black font-bold rounded-full"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-8 py-2 bg-black text-white font-bold rounded-full"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Chat;