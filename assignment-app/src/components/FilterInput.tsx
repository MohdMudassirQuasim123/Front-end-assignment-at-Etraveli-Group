import React from 'react';

interface FilterInputProps {
  onFilterChange: (filter: string) => void;
}

const FilterInput: React.FC<FilterInputProps> = ({ onFilterChange }) => {
  return (
    <div className="filter-input">
      <label>Filter: </label>
      <input
        type="text"
        placeholder="Search by title..."
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
};

export default FilterInput;
