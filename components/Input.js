import React from "react";

const Input = ({ label, value, handleInput, name }) => {
  return (
    <div className="">
      <p className="text-sm mb-1 text-gray-700 font-semibold">{label}</p>
      <div className="px-2 py-1 border-2 border-gray-200 rounded-md bg-white focus-within:border-sky-400">
        <input
          type="text"
          name={name}
          value={value}
          onChange={handleInput}
          className="w-full bg-transparent focus:outline-none placeholder:italic placeholder:text-sm "
          placeholder={`Masukkan ${label}`}
          required
        />
      </div>
    </div>
  );
};

export default Input;
