import { useState,  useEffect } from 'react';

import { useDebounce } from "@uidotdev/usehooks";
import SearchIcon from '@/components/icons/SearchIcon';
export const DebouncedInput = ({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}) => {
  const [value, setValue] = useState(initialValue || '');
  const debouncedValue = useDebounce(value, debounce);

  useEffect(() => onChange(debouncedValue), [debouncedValue]);

  return (
    <div className="pt-2 relative  text-gray-600">
      <button type="submit" className="absolute left-0 top-0 mt-5 ml-4">
        <SearchIcon />
      </button>
      <input
        className="border border-gray-300 bg-white h-10 px-5 pl-10 rounded  text-sm focus:outline-none"
        type="search"
        name="search"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
         
        }}
        placeholder="Search"
        {...props}
      />
    </div>
  );
};
