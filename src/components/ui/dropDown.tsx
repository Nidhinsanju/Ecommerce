import React, { useState } from "react";

interface DropdownProps {
  onSelect: (selectedValue: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ onSelect }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const handleSelectChange = (event: any) => {
    setSelectedValue(event.target.value);
    onSelect(event.target.value);
  };

  return (
    <div>
      <label htmlFor="dropdown">Select Product category</label>
      <select
        className="text-black ml-1 rounded-md"
        id="dropdown"
        value={selectedValue}
        onChange={handleSelectChange}
      >
        <option value="">-- Select --</option>
        <option value="Mobiles">Mobiles</option>
        <option value="Books">Books</option>
        <option value="Fridge">Fridge </option>
        <option value="Home Applicants">Home Applicants</option>
        <option value="Laptop">Laptop</option>
        <option value="Table">Table</option>
        <option value="TV">TV</option>
        <option value="Table Fan">Table Fan </option>
        <option value="AC">AC </option>
        <option value="UPS">UPS</option>
      </select>
    </div>
  );
};

export default Dropdown;
