/* eslint-disable react-refresh/only-export-components */
import { memo } from 'react';

interface SearchProps {
  onChange: (text: string) => void;
}

const Search = ({ onChange }: SearchProps) => {
  console.log(`Search rendered!`);
  return (
    <input
      type="text"
      placeholder="Search users..."
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
export default memo(Search);
