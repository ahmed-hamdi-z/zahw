import React from 'react';

interface DropdownProps {

  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block" htmlFor=''>
     
      </label>
      <select
      
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block appearance-none w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-[#764095]"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
