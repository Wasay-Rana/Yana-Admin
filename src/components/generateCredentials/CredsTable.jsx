import React, { useState } from "react";
import SearchBar from "../../elements/searchBar/SearchBar";
import ConfirmationDialog from "../confirmGenerateCreds/confirmGenerateCreds";

function CredsTable() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedParticipant, setSelectedParticipant] = useState(null);

  const participants = [
    {
      id: 1,
      username: "elgiot",
      password: "adasda",
      memberId: "123456789",
      medicalId: "10101010",
      credentials: "Change",
      clientName: "Anderson Corey",
      clientPhone: "21532333333",
      clientAddress: "456 Elm St, Unit 2B, Anytown, NY 10001",
      clientDob: "02/06/1975",
      status: "NEW",
      startDate: "07/01/2024",
      authUnitsApproved: 64,
      cptCode: "W1759",
      icd10Code: "R76",
      serviceCoordinatorName: "Tino Best",
      serviceCoordinatorPhone: "4452222222",
      serviceCoordinatorEmail: "Tbest@keystone.com",
      alternateContactName: "John Doe",
      alternateContactPhone: "1523654789",
      alternateContactEmail: "john@123.com",
      alternateContactAddress: "456 Elm St, Unit 2B, Anytown, NY 10001",
    },
    {
      id: 2,
      username: "None",
      password: "None",
      memberId: "123456789",
      medicalId: "10101010",
      credentials: "Generate",
      clientName: "Anderson Corey",
      clientPhone: "21532333333",
      clientAddress: "456 Elm St, Unit 2B, Anytown, NY 10001",
      clientDob: "02/06/1975",
      status: "NEW",
      startDate: "07/01/2024",
      authUnitsApproved: 64,
      cptCode: "W1759",
      icd10Code: "R76",
      serviceCoordinatorName: "Tino Best",
      serviceCoordinatorPhone: "4452222222",
      serviceCoordinatorEmail: "Tbest@keystone.com",
      alternateContactName: "John Doe",
      alternateContactPhone: "1523654789",
      alternateContactEmail: "john@123.com",
      alternateContactAddress: "456 Elm St, Unit 2B, Anytown, NY 10001",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 5;

  const handleButtonClick = (participant) => {
    if (participant.credentials === "Generate") {
      setIsDialogOpen(true);
      setSelectedParticipant(participant); // Set the selected participant
    }
  };

  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentData = participants.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );
  const totalPages = Math.ceil(participants.length / customersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-2 py-0 text-sm font-medium text-gray-600 border border-gray-300 rounded-full ${
            currentPage === i ? "bg-yana-gold border-none text-white" : "bg-slate-200"
          }`}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="bg-white rounded-2xl p-6 font-poppins">
      <div className="flex justify-between items-center mb-6">
        <div className="htext">
          <h2 className="text-2xl font-semibold">Participants</h2>
          <h5 className="text-yana-green2 font-medium">Confirmed</h5>
        </div>
        <div className="flex gap-2">
          <SearchBar className="h-8 bg-[#F9FBFF] border border-gray-100 rounded-md px-2" />
          <select className="h-8 bg-[#F9FBFF] border-gray-100 rounded-md px-2">
            <option value="newest">Sort by: Newest</option>
            <option value="oldest">Sort by: Oldest</option>
          </select>
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-left text-gray-500 font-medium py-3 px-5">
              Username
            </th>
            <th className="text-left text-gray-500 font-medium py-3 px-5">
              Password
            </th>
            <th className="text-left text-gray-500 font-medium py-3 px-5">
              Member ID
            </th>
            <th className="text-left text-gray-500 font-medium py-3 px-5">
              Medical ID
            </th>
            <th className="text-left text-gray-500 font-medium py-3 px-5">
              Credentials
            </th>
            <th className="text-left text-gray-500 font-medium py-3 px-5">
              Client Name
            </th>
            <th className="text-left text-gray-500 font-medium py-3 px-5">
              Client Phone
            </th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((participant) => (
            <tr key={participant.id} className="border-b">
              <td className={`py-3 px-5 ${participant.credentials === "Generate" ? "text-red-600" : ""}`}>
                {participant.username}
              </td>
              <td className={`py-3 px-5 ${participant.credentials === "Generate" ? "text-red-600" : ""}`}>
                {participant.password}
              </td>
              <td className="py-3 px-5">{participant.memberId}</td>
              <td className="py-3 px-5">{participant.medicalId}</td>
              <td className="py-3 px-5">
                <button
                  className={`inline-block py-1 px-4 rounded-full text-sm font-medium ${
                    participant.credentials === "Change"
                      ? "bg-yana-light-green text-yana-green border border-yana-green px-5"
                      : "bg-red-100 text-red-700 border border-red-600"
                  }`}
                  onClick={() => handleButtonClick(participant)} // Pass participant to handler
                >
                  {participant.credentials}
                </button>

                {/* Show ConfirmationDialog if the dialog is open */}
                {isDialogOpen && selectedParticipant?.id === participant.id && (
                  <ConfirmationDialog
                    isOpen={isDialogOpen}
                    onConfirm={() => {
                      setIsDialogOpen(false);
                    }}
                    onCancel={() => {
                      setIsDialogOpen(false);
                    }}
                  />
                )}
              </td>
              <td className="py-3 px-5">{participant.clientName}</td>
              <td className="py-3 px-5">{participant.clientPhone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-6 text-gray-500">
        <span>
          Showing data {indexOfFirstCustomer + 1} to {Math.min(indexOfLastCustomer, participants.length)} of {participants.length} entries
        </span>
        <div className="flex space-x-2">{renderPaginationButtons()}</div>
      </div>
    </div>
  );
}

export default CredsTable;
