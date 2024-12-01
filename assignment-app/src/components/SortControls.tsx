import React from 'react';
import { Movie } from '../types/types';

interface SortControlsProps {
  onSortChange: (sortKey: 'release_date' | 'episode_id') => void;
}

const SortControls: React.FC<SortControlsProps> = ({ onSortChange }) => {
  return (
    <div className="sort-controls">
      <label>Sort By: </label>
      <select onChange={(e) => onSortChange(e.target.value as 'release_date' | 'episode_id')}>
        <option value="release_date">Release Date</option>
        <option value="episode_id">Episode</option>
      </select>
    </div>
  );
};

export default SortControls;
