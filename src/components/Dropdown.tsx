import React from "react";

const Dropdown = ({ items, onChange }) => {
  return (
    <div className="relative inline-block w-full">
      <select
        onChange={e => onChange(e.target.value)}
        className="block appearance-none w-full text-xl text-green-500 bg-emerald-900  font-semibold border-none hover:outline-2 hover:outline-green-500 hover:border-green-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        <option>Selecione uma cifra</option>
        {items.map((item, index) => (
          <option
            key={index}
            value={item}
            className="hover:bg-emerald-800 hover:text-green-400"
          >
            {item}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-green-500 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z"/></svg>
      </div>
    </div>
  );
};

export default Dropdown;
