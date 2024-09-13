import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomInput from '../../elements/customInput/CustomInput';

const ClientDetailsForm = ({ onClose, data }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        memberId: '',
        medicalId: '',
        insuranceId: '',
        email: '',
        cptCode: '',
        authUnitsApproved: '',
        DoB: '',
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

    useEffect(() => {
        if (data) {
            const { potentialCustomer, insurance, coordinator } = data;
            setFormData({
                firstName: potentialCustomer.Name.split(' ')[0],
                lastName: potentialCustomer.Name.split(' ')[1],
                medicalId: potentialCustomer.MedicaidID,
                insuranceId: insurance.InsuranceID,
                email: coordinator.Email,
                cptCode: insurance.CPT,
                authUnitsApproved: '', // ICD-10 Code not available in provided data
                authorizationStartDate: '', // Authorization dates not available in provided data
                authorizationEndDate: '', // Authorization dates not available in provided data
                allergies: potentialCustomer.Allergies || '',
                street: '', // Address not available in provided data
                address: '', // Address not available in provided data
                city: '', // Address not available in provided data
                state: '', // Address not available in provided data
                zipCode: '', // Address not available in provided data
                meals: insurance.Note.split('Tot-')[1]?.split('.')[0] || '7', // Extract meals count from note
                contactFirstName: potentialCustomer.AlternateContactName?.split(' ')[0] || '',
                contactLastName: potentialCustomer.AlternateContactName?.split(' ')[1] || '',
                phoneNumber: potentialCustomer.AlternateContactPhone || coordinator.Phone,
            });
        }
    }, [data]);

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
                <h1 className="text-[#959595] mb-[15px] font-bold text-2xl">Client Details</h1>
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
                            <label htmlFor="memberId" className="block font-bold mb-[5px]">Member ID *</label>
                            <CustomInput
                                id="medicalId"
                                name="medicalId"
                                value={formData.memberId}
                                onChange={handleInputChange}
                                required
                                className="w-full"
                            />
                        </div>
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
                        <div className="flex-1 min-w-[1px]">
                            <label htmlFor="coordinatorId" className="block font-bold mb-[5px]">Coordinator Id *</label>
                            <CustomInput
                                id="coordinatorId"
                                name="coordinatorId"
                                value={formData.coordinatorId}
                                onChange={handleInputChange}
                                required
                                className="w-full"
                            />
                        </div>
                        <div className="flex-1 min-w-[1px]">
                            <label htmlFor="status" className="block font-bold mb-[5px]">Status *</label>
                            <CustomInput
                                id="status"
                                name="status"
                                value={formData.status}
                                onChange={handleInputChange}
                                placeholder={'Pending'}
                                required
                                className="w-full"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-[10px] mb-[15px] w-full">
                        <div className="flex-1 min-w-[1px]">
                            <label htmlFor="DoB" className="block font-bold mb-[5px]">Date of Birth *</label>
                            <CustomInput
                                type="date"
                                id="DoB"
                                name="DoB"
                                value={formData.DoB}
                                onChange={handleInputChange}
                                required
                                className="w-full"
                            />
                        </div>
                        <div className="flex-1 min-w-[1px]">
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
                        <div className="flex-1 min-w-[1px]">
                            <label htmlFor="phoneNumber" className="block font-bold mb-[5px]">Client Phone No.</label>
                            <CustomInput
                                id="phoneNumber"
                                name="phoneNumber"
                                type="phoneNumber"
                                placeholder="XXX-XXXX-XXXX"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                className="w-full"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-[10px] mb-[15px] w-full">
                        <div className="flex-1 min-w-[1px]">
                            <label htmlFor="cptCode" className="block font-bold mb-[5px]">CPT Code *</label>
                            <div className="flex gap-[5px]">
                                {['W1785', 'W1760', 'W1784', 'R899'].map((code) => (
                                    <button
                                        key={code}
                                        type="button"
                                        className={`flex-1 py-2 px-4 rounded ${formData.cptCode === code
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
                            <label htmlFor="authUnitsApproved" className="block font-bold mb-[5px]">Auth Units Approved *</label>
                            <CustomInput
                                id="authUnitsApproved"
                                name="authUnitsApproved"
                                value={formData.authUnitsApproved}
                                onChange={handleInputChange}
                                placeholder={62}
                                required
                                className="w-full"
                            />
                        </div>
                        <div className="flex-1 min-w-[1px]">
                            <label htmlFor="frequency" className="block font-bold mb-[5px]">Frequency *</label>
                            <CustomInput
                                id="frequency"
                                name="icdfrequency10Code"
                                placeholder={'Weekly'}
                                value={formData.frequency}
                                onChange={handleInputChange}
                                required
                                className="w-full"
                            />
                        </div>
                    </div>

                    <div className="flex-1 mt-3 mb-3 min-w-[1px]">
                        <label htmlFor="note" className="block font-bold mb-[5px]">Note *</label>
                        <CustomInput
                            id="note"
                            name="note"
                            value={formData.note}
                            onChange={handleInputChange}
                            placeholder={"Su-2.00 M-2.00 T-2.00 W-2.00 Th-2.00 F-2.00 Sa-2.00 Tot-14.00"}
                            required
                            className="w-full"
                        />
                    </div>

                    <div className="flex">
                        <div className="flex-none w-[210px]">
                            <label htmlFor="deliveryTime" className="block font-bold mb-[5px]">Preferred Delivery Time *</label>
                            <CustomInput
                                id="deliveryTime"
                                name="deliveryTime"
                                value={formData.deliveryTime}
                                onChange={handleInputChange}
                                required
                                className="w-full"
                            />
                        </div>
                        <div className="flex-grow ml-4">
                            <label htmlFor="deliveryNote" className="block font-bold mb-[5px]">Delivery Note*</label>
                            <CustomInput
                                id="deliveryNote"
                                name="deliveryNote"
                                value={formData.deliveryNote}
                                onChange={handleInputChange}
                                required
                                className="w-full"
                            />
                        </div>
                    </div>




                    <div className="flex flex-col gap-[10px] mb-[15px] w-full">
                        <h3 className="font-bold mt-4 ">Authorization Date *</h3>
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
                                required
                                className="w-full"
                            />
                        </div>
                        <div className="flex-1 min-w-[1px]">
                            <label htmlFor="city" className="block font-bold mb-[5px]">&nbsp;</label>
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
                        <div className="flex-1 min-w-[1px]">
                            <label htmlFor="state" className="block font-bold mb-[5px]">&nbsp;</label>
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
                        <div className="flex-1 min-w-[1px]">
                            <label htmlFor="zipCode" className="block font-bold mb-[5px]">&nbsp;</label>
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
                            <label htmlFor="AltContactFristName" className="block font-bold mb-[5px]">First Name *</label>
                            <CustomInput
                                id="AltContactFristName"
                                name="AltContactFristName"
                                value={formData.AltContactFristName}
                                onChange={handleInputChange}
                                required
                                className="w-full"
                            />
                        </div>
                        <div className="flex-1 min-w-[1px]">
                            <label htmlFor="AltContactLastName" className="block font-bold mb-[5px]">Last Name *</label>
                            <CustomInput
                                id="AltContactLastName"
                                name="AltContactLastName"
                                value={formData.AltContactLastName}
                                onChange={handleInputChange}
                                required
                                className="w-full"
                            />
                        </div>
                        <div className="flex-1 min-w-[1px]">
                            <label htmlFor="phoneNumber" className="block font-bold mb-[5px]">Phone Number *</label>
                            <CustomInput
                                id="phoneNumber"
                                name="phoneNumber"
                                type="tel"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                required
                                className="w-full"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-[10px] mb-[15px] w-full">
                        <div className="flex-1 min-w-[1px]">
                            <label htmlFor="street" className="block font-bold mb-[5px]">Address *</label>
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
                                required
                                className="w-full"
                            />
                        </div>
                        <div className="flex-1 min-w-[1px]">
                            <label htmlFor="city" className="block font-bold mb-[5px]">&nbsp;</label>
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
                        <div className="flex-1 min-w-[1px]">
                            <label htmlFor="state" className="block font-bold mb-[5px]">&nbsp;</label>
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
                        <div className="flex-1 min-w-[1px]">
                            <label htmlFor="zipCode" className="block font-bold mb-[5px]">&nbsp;</label>
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

                    <h1 className="text-[#959595] text-2xl font-bold w-full text-left">Coordiantor</h1>
                    <div className="flex flex-wrap gap-[10px] mb-[15px] w-full">


                    </div>

                    <div className="flex flex-wrap gap-[10px] mb-[15px] w-full">
                        <div className="flex-1 min-w-[1px]">
                            <label htmlFor="coordinatorFirstName" className="block font-bold mb-[5px]">First Name *</label>
                            <CustomInput
                                id="coordinatorFirstName"
                                name="coordinatorFirstName"
                                placeholder="First Name"
                                value={formData.coordinatorFirstName}
                                onChange={handleInputChange}
                                required
                                className="w-full"
                            />
                        </div>
                        <div className="flex-1 min-w-[1px]">
                            <label htmlFor="coordiantorLastName" className="block font-bold mb-[5px]">Last Name *</label>
                            <CustomInput
                                id="coordiantorLastName"
                                name="coordiantorLastName"
                                placeholder="Last Name"
                                value={formData.coordiantorLastName}
                                onChange={handleInputChange}
                                required
                                className="w-full"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-[10px] mb-[15px] w-full">
                        <div className="flex-1 min-w-[1px]">
                            <label htmlFor="coordinatorEmail" className="block font-bold mb-[5px]">Coordiantor Email *</label>
                            <CustomInput
                                id="coordinatorEmail"
                                name="coordinatorEmail"
                                type="email"
                                placeholder="Email Address"
                                value={formData.coordinatorEmail}
                                onChange={handleInputChange}
                                required
                                className="w-full"
                            />
                        </div>
                        <div className="flex-1 min-w-[1px]">
                            <label htmlFor="coordinatorPhoneNumber" className="block font-bold mb-[5px]">Coordinator Phone No. *</label>
                            <CustomInput
                                id="coordinatorPhoneNumber"
                                name="coordinatorPhoneNumber"
                                type="coordinatorPhoneNumber"
                                placeholder="XXX-XXXX-XXXX"
                                value={formData.coordinatorPhoneNumber}
                                onChange={handleInputChange}
                                required
                                className="w-full"
                            />
                        </div>
                    </div>


                    <div className="flex justify-center gap-2 mt-10">
                        <button type="submit" className="py-2 px-6 rounded-full bg-[#0E6D99] text-white">Save</button>
                        <button type="button" onClick={handleCancel} className="py-2 px-4 rounded-full border border-[#ccc]">Cancel</button>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default ClientDetailsForm;
