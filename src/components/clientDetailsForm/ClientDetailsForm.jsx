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
        <div className="mx-[30px] bg-white p-[25px] md:p-[40px] rounded-[22px]">
            <div className="font-['Poppins',sans-serif] px-[30px]">
                <h2 className="text-[#959595] mb-[15px] text-xl">Client Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap gap-[10px] mb-[15px] w-full">
                        <div className="flex-1 min-w-[1px]">
                            <label htmlFor="firstName" className="block font-bold mb-[5px]">Client Name *</label>
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
                        <div className="flex-1 min-w-[1px]">
                            <label htmlFor="lastName" className="block font-bold mb-[5px]">&nbsp;</label>
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

                    <div className="flex flex-wrap gap-[10px] mb-[15px] w-full">
                        <div className="flex-1 min-w-[1px]">
                            <label htmlFor="medicalId" className="block font-bold mb-[5px]">Medical ID *</label>
                            <CustomInput
                                id="medicalId"
                                name="medicalId"
                                value={formData.medicalId}
                                onChange={handleInputChange}
                                required
                                className="w-full"
                            />
                        </div>
                        <div className="flex-1 min-w-[1px]">
                            <label htmlFor="insuranceId" className="block font-bold mb-[5px]">Insurance ID *</label>
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

                    <div className="mb-[15px] w-full">
                        <label htmlFor="email" className="block font-bold mb-[5px]">Client Email</label>
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

                    <div className="flex flex-wrap gap-[10px] mb-[15px] w-full">
                        <div className="flex-1 min-w-[1px]">
                            <label htmlFor="cptCode" className="block font-bold mb-[5px]">CPT Code *</label>
                            <div className="flex gap-[5px]">
                                {['W1785', 'W1760', 'W1784', 'R899'].map((code) => (
                                    <button
                                        key={code}
                                        type="button"
                                        className={`flex-1 py-2 px-4 rounded ${
                                            formData.cptCode === code
                                                ? 'bg-[#0E6D99] text-white'
                                                : 'bg-white border border-[#ccc]'
                                        } cursor-pointer`}
                                        onClick={() => setFormData({ ...formData, cptCode: code })}
                                    >
                                        {code}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 min-w-[1px]">
                            <label htmlFor="icd10Code" className="block font-bold mb-[5px]">ICD-10 Code *</label>
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

                    <div className="flex flex-col gap-[10px] mb-[15px] w-full">
                        <h3 className="font-bold">Authorization Date *</h3>
                        <div className="flex flex-row gap-[10px]">
                            <div className="flex-1 min-w-[1px]">
                                <label htmlFor="authorizationStartDate" className="block font-bold mb-[5px]">Start Date *</label>
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
                            <div className="flex-1 min-w-[1px]">
                                <label htmlFor="authorizationEndDate" className="block font-bold mb-[5px]">End Date</label>
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

                    <div className="mb-[15px] w-full">
                        <label htmlFor="allergies" className="block font-bold mb-[5px]">Allergies *</label>
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

                    <div className="flex flex-wrap gap-[10px] mb-[15px] w-full">
                        <div className="flex-1 min-w-[1px]">
                            <label htmlFor="street" className="block font-bold mb-[5px]">Client Address *</label>
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
                        <div className="flex-1 min-w-[1px]">
                            <label htmlFor="address" className="block font-bold mb-[5px]">&nbsp;</label>
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

                    <div className="flex gap-[20px] w-full mb-[15px]">
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

                    <div className="mb-[15px] w-full">
                        <label className="block font-bold mb-[5px]">No. Of Meals *</label>
                        <div className="flex gap-[20px] text-lg">
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="meals"
                                    value="7"
                                    checked={formData.meals === '7'}
                                    onChange={handleInputChange}
                                    className="w-[20px] h-[20px] mr-[10px] accent-[#0E6D99]"
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
                                    className="w-[20px] h-[20px] mr-[10px] accent-[#0E6D99]"
                                />
                                14 meals
                            </label>
                        </div>
                    </div>

                    <h2 className="text-[#959595] mb-[15px] text-xl w-full text-left">Alternate Contact</h2>

                    <div className="flex flex-wrap gap-[10px] mb-[15px] w-full">
                        <div className="flex-1 min-w-[1px]">
                            <label htmlFor="contactFirstName" className="block font-bold mb-[5px]">Contact Name *</label>
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
                        <div className="flex-1 min-w-[1px]">
                            <label htmlFor="contactLastName" className="block font-bold mb-[5px]">&nbsp;</label>
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

                    <div className="mb-[15px] w-full">
                        <label htmlFor="phoneNumber" className="block font-bold mb-[5px]">Phone Number *</label>
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

                    <div className="flex gap-[8px] mt-[20px]">
                        <button
                            type="button"
                            className="px-[30px] py-2 bg-[#CDCDCD] text-black font-bold rounded-[20px] cursor-pointer"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-[30px] py-2 bg-[#0E6D99] text-white font-bold rounded-[20px] cursor-pointer"
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