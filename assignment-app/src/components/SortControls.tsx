import React from 'react';

interface SortControlsProps {
  onSortChange: (sortKey: 'release_date' | 'episode_id' | 'average_rating') => void;
}

const SortControls: React.FC<SortControlsProps> = ({ onSortChange }) => {
  return (
    <div className="sort-controls">
      <label>Sort By: </label>
      <select onChange={(e) => onSortChange(e.target.value as 'release_date' | 'episode_id' | 'average_rating')}>
        <option value="release_date">Release Date</option>
        <option value="episode_id">Episode</option>
        <option value="average_rating">Average Rating</option>
      </select>
    </div>
  );
};

export default SortControls;
