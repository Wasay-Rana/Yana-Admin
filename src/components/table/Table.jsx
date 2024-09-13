import React from 'react';

const Table = ({ headers, rows }) => {
  return (
    <div className="bg-white rounded-xl p-5 pb-2.5 font-poppins">
      <table className="w-full table-auto">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="text-left p-2 text-gray-600 font-medium">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b">
              {headers.map((header, colIndex) => (
                <td key={colIndex} className="p-2 text-gray-700">{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;