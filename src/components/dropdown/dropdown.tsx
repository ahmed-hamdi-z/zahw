import React from "react";

interface DropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange }) => {
  return (
    <div className="relative mb-4">
      <label className="block" htmlFor=""></label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block appearance-none w-full border-[1px] text-[#764095] border-slate-300 px-2 py-1.5 pr-8 outline-none shadow-md shadow-[#764095] bg-white"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"%3E%3Cpath fill="%23764095" d="M12 14l-6-6h12z"/%3E%3C/svg%3E')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left 10px center",
          backgroundSize: "12px 12px",
        }}
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
